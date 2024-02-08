import cv2
import mediapipe as mp
import HandDetectorModule as hdm
from time import time
import json



cap = cv2.VideoCapture(0)
detector = hdm.handDetector()

# zoom in, zoom out을 판단하는 flag
p_in = False
p_out = False
p_cooltime = 0

while True:
    # 서버로 전송할 json 변환 전 딕셔너리 
    tmp_data = {"move": "0"}

    res, frame = cap.read()

    if not cap.isOpened():
        print("Camera not exist")
        exit()

    frame = detector.findHands(frame)
    landmark_list, bbox = detector.findPosition(frame)
    
    if len(landmark_list):
        
        # 손가락이 펴져있는지 확인
        fingers = detector.findFingerUp()
        attached_cnt = 0
        # print(bbox[2] - bbox[0], bbox[3]- bbox[1])
        # 전제조건 : 엄지와 나머지 손가락이 모두 붙었는가를 판단
        for idx in range(8, 20 + 1, 4):
            dist, frame, _ = detector.findDistance(4, idx, frame)
            if dist < 40:
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
        if not p_out and not p_in and attached_cnt == 4:
            # zoom in 전제조건 확인 : 한번 zoom을 한 뒤에는 쿨타임이 존재함(0.5초)
            if time() - p_cooltime > 0.5:
                prev_box_x, prev_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
                p_in = True
                p_out = False
                p_cooltime = 0
        
        # bbox의 크기 & 나머지 손가락들이 엄지 손가락과 붙었는지를 토대로 계산하기 
        if p_in:
            cur_box_x, cur_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
            if prev_box_x + 30 < cur_box_x and prev_box_y + 30 < cur_box_y and not attached_cnt:
                p_cooltime = time()
                tmp_data["move"] = "ZoomIn"
                p_in = False
        elif p_out:
            cur_box_x, cur_box_y = bbox[2] - bbox[0], bbox[3] - bbox[1]
            if prev_box_x - 30 > cur_box_x and prev_box_y - 30 > cur_box_y and attached_cnt == 4:
                p_cooltime = time()
                tmp_data["move"] = "ZoomOut"
                p_out = False
        
        
    cv2.imshow("MediaPipe Hands", frame)
    # 특정 이벤트가 발생했을 때 데이터 json으로 변환 후 쓰기 작업 진행
    if tmp_data["move"] != "0": 
        with open('page_move_data.json', 'w') as file:
            data = json.dump(tmp_data, file)



    key = cv2.waitKey(5) & 0xFF
    if key == 27:
        break


cv2.destroyAllWindows()
cap.release()
