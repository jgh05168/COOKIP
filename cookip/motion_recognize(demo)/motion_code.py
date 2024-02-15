import cv2
import mediapipe as mp
import numpy as np
import HandDetectorModule as hdm
from time import time
import json
import asyncio
import websockets
import autopy

cap = cv2.VideoCapture(0)
detector = hdm.handDetector()

########## swipe 함수 관련 변수 #############
# swipe 가능 플래그 설정
v_swipe_flag = 0  # vertical
h_swipe_flag = 0  # horizontal
# middle tip 좌표
mt_x, mt_y = 0, 0
# swipe 블록 크기(width, height)
swipe_width, swipe_height = 0, 0
# 이전 동작 상태
prev_action = None

########## zoom in & out 관련 변수 ###########
# zoom in, zoom out을 판단하는 flag
zoom_in = False
zoom_out = False
zoom_cooltime = 0

########## rating 관련 변수 ##########
start = 0           # 시간이 돌아가고 있는지 체크
rate = 0            # output으로 전송되는 평점

########## page move(main - detail) 관련 변수 ###########
# zoom in, zoom out을 판단하는 flag
p_in = False
p_out = False
p_cooltime = 0
prev_box_x, prev_box_y = 0, 0

########## 화면 터치 관련 변수 ############
#################################
wCam, hCam = 640, 480
wScr, hScr = autopy.screen.size()
# print(wScr, hScr)
frameR = 100        # frame reduction
smoothening = 7
cap.set(3, wCam)
cap.set(4, hCam)
pTime = 0
plocX, plocY = 0, 0
clocX, clocY = 0, 0
#################################

'''
여기서부터 실제 동작 구현 함수 및 main 코드 

동작은 개별적인 결과를 갖기 때문에 만약 한 동작이 수행된다면 나머지 동작은 보지 않고 바로 출력
'''


########### swmipe 함수 ############
def swipe(landmark_list, bbox, frame):
    global v_swipe_flag, h_swipe_flag, mt_x, mt_y, swipe_width, swipe_height, prev_action, tmp_data

    x1, y1 = landmark_list[8][1:]
    x2, y2 = landmark_list[12][1:]

    # 손가락이 펴져있는지 확인
    fingers = detector.findFingerUp()

    # swipe가 가능하게 하기 위한 조건
    # # 1. 검지, 중지, 약지 손가락은 펴져있어야 한다.
    # if fingers[1] and fingers[2] and fingers[3]:
    # 2. 검지와 중지가 일정 거리 이하여야 한다(붙어있어야 함)
    distance, frame, _ = detector.findDistance(8, 12, frame)
    if distance < 50:  # distance 동작 15초 수행 후 평균한 값을 threshold로 사용
        # 3. block의 width와 height의 차 혹은 비율을 계산하여 특정 threshold를 넘어갔을 경우만 가능하게 한다
        x1, y1, x2, y2 = bbox
        if x2 - x1 + 30 < y2 - y1:  # horizontal move
            h_swipe_flag = 1
            v_swipe_flag = 0
            mt_x, mt_y = landmark_list[12][1:]
            if not swipe_width:
                swipe_width = x2 - x1
            if prev_action == "vertical":  # 만약 이전에 수직 동작이었다면 초기화
                v_swipe_flag = 0
                swipe_height = 0
            prev_action = "horizontal"  # 현재 동작 상태 갱신
        elif y2 - y1 + 30 < x2 - x1:  # vertical move
            h_swipe_flag = 0
            v_swipe_flag = 1
            mt_x, mt_y = landmark_list[12][1:]
            if not swipe_height:
                swipe_height = y2 - y1
            if prev_action == "horizontal":  # 만약 이전에 수평 동작이었다면 초기화
                h_swipe_flag = 0
                swipe_width = 0
            prev_action = "vertical"  # 현재 동작 상태 갱신

        # 상 하 좌 우 를 나누는 조건
        if prev_action == "horizontal":  # 좌 우 동작 구분
            nx1, nx2 = bbox[0], bbox[2]
            if landmark_list[12][1] < mt_x and nx2 - nx1 > swipe_width + 50:
                h_swipe_flag = 0
                swipe_width = 0
                prev_action = None  # 이전 동작 상태 초기화
                tmp_data["data"]["swipe"] = "SwipeLeft"
                return 1
            elif landmark_list[12][1] > mt_x and nx2 - nx1 > swipe_width + 50:
                h_swipe_flag = 0
                swipe_width = 0
                prev_action = None  # 이전 동작 상태 초기화
                tmp_data["data"]["swipe"] = "SwipeRight"
                return 1

        elif prev_action == "vertical":  # 상 하 동작 구분
            ny1, ny2 = bbox[1], bbox[3]
            if landmark_list[12][2] < mt_y and ny2 - ny1 > swipe_height + 30:
                v_swipe_flag = 0
                swipe_height = 0
                prev_action = None  # 이전 동작 상태 초기화
                tmp_data["data"]["swipe"] = "SwipeUp"
                return 1
            elif landmark_list[12][2] > mt_y and ny2 - ny1 > swipe_height + 30:
                v_swipe_flag = 0
                swipe_height = 0
                prev_action = None  # 이전 동작 상태 초기화
                tmp_data["data"]["swipe"] = "SwipeDown"
                return 1
    return 0


############## rating 함수 ##############
# def rating():
#     global start, rate, tmp_data

#     if not start:           # 손동작이 인식되었을 때만 rating을 위한 초 시작
#         start = time()
#         tmp_data["data"]["rating"] = None
    
#     # 손가락이 펴져있는지 확인
#     fingers = detector.findFingerUp()
    
#     if time() - start > 3:
#         rate = sum(fingers)
#         tmp_data["data"]["rating"] = str(rate)
#         # 점수가 입력되었으므로 시작시간, 점수 초기화
#         start = 0
#         rate = 0
#         return 1
#     else:
#         return 0

   
############### zoom 함수 ################
def zoom(frame):
    global zoom_in, zoom_out, zoom_cooltime, tmp_data

    # 손가락이 펴져있는지 확인
    fingers = detector.findFingerUp()
    
    # 전제조건 1. 엄지, 검지, 중지 손가락이 붙어있는지 확인
    dist_left, frame, _ = detector.findDistance(8, 12, frame)
    dist_right, frame, _ = detector.findDistance(4, 8, frame)
    # 전제조건 2. 약지, 새끼 손가락은 접혀있어야 한다.
    if not fingers[3] and not fingers[4] and not zoom_out and not zoom_in:
        # zoom in 전제조건 확인 : 한번 zoom을 한 뒤에는 쿨타임이 존재함(2초)
        if dist_left < 30 and dist_right < 30 and time() - zoom_cooltime > 0.5:
            zoom_in = True
            zoom_out = False
            zoom_cooltime = 0
        elif dist_left < 40 and dist_right > 70 and time() - zoom_cooltime > 0.5:
            zoom_out = True
            zoom_in = False
            zoom_cooltime = 0

    if zoom_in:
        if dist_left < 40 and dist_right > 70:
            zoom_cooltime = time()
            tmp_data["data"]["zoom"] = "ZoomIn"
            zoom_in = False
            return 1
    elif zoom_out:
        if dist_left < 40 and dist_right < 70:
            zoom_cooltime = time()
            tmp_data["data"]["zoom"] = "ZoomOut"
            zoom_out = False
            return 1

    return 0
    

########### 페이지 in & out(main - detail) ##########
def page_move(bbox, frame):
    global p_cooltime, p_in, p_out, prev_box_x, prev_box_y, tmp_data

    attached_cnt = 0
    # print(bbox[2] - bbox[0], bbox[3]- bbox[1])
    # 전제조건 : 엄지와 나머지 손가락이 모두 붙었는가를 판단
    for idx in range(8, 20 + 1, 4):
        dist, frame, _ = detector.findDistance(4, idx, frame)
        if dist < 50:
            attached_cnt += 1

    # print(attached_cnt)
    
    # 1. 손가락이 하나도 안 붙은 경우
    if not p_out and not p_in and not attached_cnt:
        if time() - p_cooltime > 0.5:
            prev_box_x, prev_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
            p_out = True
            p_in = False
            p_cooltime = 0
    # 2. 손가락이 모두 붙은 경우
    elif not p_out and not p_in and attached_cnt == 4:
        # zoom in 전제조건 확인 : 한번 zoom을 한 뒤에는 쿨타임이 존재함(0.5초)
        if time() - p_cooltime > 0.5:
            prev_box_x, prev_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
            p_in = True
            p_out = False
            p_cooltime = 0
            
    # bbox의 크기 & 나머지 손가락들이 엄지 손가락과 붙었는지를 토대로 계산하기 
    if p_in:
        cur_box_x, cur_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
        if prev_box_x + 5 < cur_box_x and prev_box_y + 5 < cur_box_y and not attached_cnt:
            p_cooltime = time()
            prev_box_x, prev_box_y = 0, 0
            tmp_data["data"]["page"] = "PageIn"
            p_in = False
            return 1
    elif p_out:
        cur_box_x, cur_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
        if prev_box_x - 5 > cur_box_x and prev_box_y - 5 > cur_box_y and attached_cnt == 4:
            p_cooltime = time()
            prev_box_x, prev_box_y = 0, 0
            tmp_data["data"]["page"] = "PageOut"
            p_out = False
            return 1

    return 0
    

# ########### flip 함수 ############
# def flip():
#     global tmp_data
#     # 전제조건 : 1. 13번 마디와 2번 마디의 위치가 바뀌어야 한다.
#     #            2. 왼손, 오른손을 구분해줘야 한다.
#     #            3. x 좌표의 위치만 생각해주면 된다.
#     hand = detector.get_label()         # 왼손인지, 오른손인지 정보를 return 해주는 메서드
#     # 오른손
#     if hand == "Right":      
#         if landmark_list[20][1] < landmark_list[4][1]:
#             tmp_data["data"]["flip"] = "Flip"
#             return 1
#     # 왼손
#     else:
#         if landmark_list[20][1] > landmark_list[4][1]:
#             tmp_data["data"]["flip"] = "Flip"
#             return 1

#     return 0


# ######## json 파일 생성 함수 ########
# def send_json(tmp_data):
#     with open('data.json', 'w') as file:
#         data = json.dump(tmp_data, file, indent='\t')


def mouse_click(landmark_list, frame):
    global plocX, plocY, clocX, clocY
    x1, y1 = landmark_list[8][1:]       # 검지
    x2, y2 = landmark_list[4][1:]       # 엄지

    # 3. 어떤 손가락이 올라왔는지 체크하기
    fingers = detector.findFingerUp()
    cv2.rectangle(frame, (frameR, frameR), (wCam - frameR, hCam - frameR),
                    (255, 0, 255), 2)
    
    # 4. if 올라온 손가락이 moving mode 일 경우, coordinate 변환하기
    if fingers[1] and not fingers[0] and not fingers[2]:
        x3 = np.interp(x1, (frameR, wCam - frameR), (0, wScr))
        y3 = np.interp(y1, (frameR, hCam - frameR), (0, hScr))
        
        # 5. Smoothen Values
        clocX = plocX + (x3 - plocX) / smoothening
        clocY = plocY + (y3 - plocY) / smoothening

        # 6. 마우스 움직이기
        autopy.mouse.move(clocX, clocY)
        cv2.circle(frame, (x1, y1), 15, (255, 0, 255), cv2.FILLED)
        plocX, plocY = clocX, clocY

    # 7. clicking mode인지 확인(index, 엄지손가락 둘 다 up인 경우)
    if fingers[1] and fingers[0] and not fingers[2]:
        # 8. 검지, 엄지 손가락 거리 확인
        length, frame, lineInfo = detector.findDistance(8, 4, frame)
        length_exception, frame, _ = detector.findDistance(4, 12, frame)

        # 9. 마우스 클릭 : distance가 가까울 경우
        if length < 40 and length_exception > 40:
            cv2.circle(frame, (lineInfo[4], lineInfo[5]), 10, (0, 255, 255), cv2.FILLED)
            autopy.mouse.click()


'''
######### main ##########
'''
tmp_data = {        # 전송할 json 형식 데이터
    "type": 'Motion',
    "data": {
        "swipe": None,
        "page": None, 
        "rating": None,
        "zoom": None,
        "flip": None
    }        
}

async def handle_client(websocket, path):
    global start, rate, pTime, cTime
    print(f"클라이언트가 연결되었습니다.")

    try:
        while True:

            res, frame = cap.read()
            flag = 0        # 보낼 json 데이터가 있는지 확인
            tmp_data["data"]["flip"] = None

            if not cap.isOpened():
                print("Camera not exist")
                exit()
                
            frame = detector.findHands(frame)
            landmark_list, bbox = detector.findPosition(frame)

            
            if len(landmark_list):
                if swipe(landmark_list, bbox, frame):
                    flag = 1
                    tmp_data["data"]["page"] = None
                    tmp_data["data"]["zoom"] = None
                    tmp_data["data"]["rating"] = None
                if page_move(bbox, frame):
                    # json 쓰기 작업 진행
                    flag = 1
                    tmp_data["data"]["swipe"] = None
                    tmp_data["data"]["zoom"] = None
                    tmp_data["data"]["rating"] = None
                if zoom(frame):
                    # json 쓰기 작업 진행
                    flag = 1
                    tmp_data["data"]["page"] = None
                    tmp_data["data"]["swipe"] = None
                    tmp_data["data"]["rating"] = None
                ################ 별점매기기 구현은 되었으나, 일단 사용 안하므로 주석처리 ###############
                # if rating():
                #     # json 쓰기 작업 진행
                #     flag = 1
                #     tmp_data["data"]["page"] = None
                #     tmp_data["data"]["zoom"] = None
                #     tmp_data["data"]["swipe"] = None
                # if flip():
                #     # json 쓰기 작업 진행
                #     flag = 1
                mouse_click(landmark_list, frame)

            else:           # 손이 인식되지 않았을 때 tmp_rate과 시작시간 초기화
                start = 0
                rate = 0

            if flag:
                # send_json(tmp_data)
                json_data =json.dumps(tmp_data,  indent='\t')
                await websocket.send(json_data)
                await asyncio.sleep(0)  # 이벤트 루프에 제어를 반환하여 다음 작업이 진행될 수 있도록 함
                print(json_data)

            cTime = time()
            fps = 1/(cTime - pTime)
            pTime = cTime
            cv2.putText(frame, str(int(fps)), (20, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)

            cv2.imshow("MediaPipe Hands", frame)

            key = cv2.waitKey(5) & 0xFF
            if key == 27:
                break
        cv2.destroyAllWindows()
        cap.release()

    except (websockets.exceptions.ConnectionClosedError, websockets.exceptions.WebSocketException) as e:
        print(f"클라이언트와의 연결이 종료되었습니다. 오류: {e}")


def start_websocket_server():
    # 웹 소켓 서버 생성
    start_server = websockets.serve(handle_client, "localhost", 8002)

    # 서버 실행
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()

if __name__ == "__main__":
    start_websocket_server()
