import cv2
import face_recognition as fr
import numpy as np
import json
import asyncio
import websockets

# # 미리 알려진 얼굴들의 인코딩 생성
# known_person_list = []
# known_person_list.append(fr.load_image_file("C:/Users/SSAFY/Desktop/realhackylife/common_pjt/S10P12C101/cookip/face_recognition/jgh.jpg"))

# print(type(known_person_list[0]))
# known_face_list = [fr.face_encodings(person)[0] for person in known_person_list]

# data = [{"type": "buffer", "data": [172, 128, 128, 53, 108, 233, 13, 156, 0, 1, 2, 4, 8, 16, 168, 37, 
# 240, 255, 1, 177, 178, 80, 68, 98, 245, 231, 68, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]}]
# flattened_data = [data[i]["data"] for i in range(len(data))]
# image_data = np.reshape(flattened_data, (3, 3, 3))
# print(flattened_data)

# 웹캠 열기
video_capture = cv2.VideoCapture(0)


async def handle_client(websocket, path):
    print(f"클라이언트(얼굴 인식)가 연결되었습니다.")

    try:
        async for message in websocket:
            known_person_list = json.loads(message)
            print(known_person_list)
            flattened_data_list = [known_person_list["profile"][i]["profile_img"]["data"] for i in range(len(known_face_list))]
            image_data_list = [np.reshape(flattened_data_list[i], (64, 64, 4)) for i in range(len(flattened_data_list))]
            known_face_list = [fr.face_encodings(person)[0] for person in image_data_list]
            
            tmp_data = {        # 전송할 json 형식 데이터
                "User": None,
                "Profile": None
            }

            while True:
                flag = 0        # 얼굴 인식이 되었는지 확인하기 위한 flag
                # 현재 프레임 가져오기
                ret, frame = video_capture.read()

                # 현재 프레임에서 얼굴 위치 찾기
                face_locations = fr.face_locations(frame)

                # 각 얼굴에 대해 인코딩하고 정확도 판단
                for face_location in face_locations:
                    top, right, bottom, left = face_location
                    face_image = frame[top:bottom, left:right]

                    # 얼굴 이미지를 uint8 타입으로 변환
                    face_image_uint8 = face_image.astype('uint8')

                    # rgb2bgr 변환 적용
                    face_image_bgr = cv2.cvtColor(face_image_uint8, cv2.COLOR_RGB2BGR)
                    enc_unknown_face = fr.face_encodings(face_image_bgr)

                    # 얼굴이 인식되면 정확도 판단
                    if len(enc_unknown_face) > 0:
                        # 프로필 이미지도 인덱스 별로 저장이 될 것이기 때문에 min_distance_index 변수를 통해 user, profile 정보에 접근하면 된다.

                        distance = fr.face_distance(known_face_list, enc_unknown_face[0])
                        min_distance_index = np.argmin(distance)

                        # 판단 결과 출력
                        if distance[min_distance_index] < 0.5:  # 예시 값, 필요에 따라 조절 가능
                            print("인식된 얼굴:", f"Person {min_distance_index + 1}")
                            tmp_data["User"] = known_person_list["profile"][min_distance_index]["user_id"]
                            tmp_data["Profile"] = known_person_list["profile"][min_distance_index]["profile_id"]

                            flag = 1
                        else:
                            print("인식 실패: 알려진 얼굴과 일치하지 않음")

                        ##### 얼굴 인식된 정보를 지속적으로 서버에 전송해주어야 한다. 
                        if flag:
                            # send_json(tmp_data)
                            json_data =json.dumps(tmp_data,  indent='\t')
                            await websocket.send(json_data)
                            await asyncio.sleep(0)  # 이벤트 루프에 제어를 반환하여 다음 작업이 진행될 수 있도록 함
                            print(json_data)

                        # 얼굴에 블록 생성
                        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)

                # 화면에 프레임 표시
                cv2.imshow('Video', frame)

                # 'q' 키를 누르면 종료
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    break

            # 웹캠 해제 및 창 닫기
            video_capture.release()
            cv2.destroyAllWindows()

    except (websockets.exceptions.ConnectionClosedError, websockets.exceptions.WebSocketException) as e:
            print(f"클라이언트(얼굴 인식)와의 연결이 종료되었습니다. 오류: {e}")

def start_websocket_server():
    # 웹 소켓 서버 생성
    start_server = websockets.serve(handle_client, "localhost", 8060)

    # 서버 실행
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()

if __name__ == "__main__":
    start_websocket_server()