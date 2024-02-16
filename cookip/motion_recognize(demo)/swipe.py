import cv2
import mediapipe as mp
import HandDetectorModule as hdm
import json




cap = cv2.VideoCapture(0)
detector = hdm.handDetector()

# swipe 가능 플래그 설정
v_swipe_flag = 0  # vertical
h_swipe_flag = 0  # horizontal
# middle tip 좌표
mt_x, mt_y = 0, 0
# swipe 블록 크기(width, height)
swipe_width, swipe_height = 0, 0
# 이전 동작 상태
prev_action = None

while True:
    res, frame = cap.read()

    if not cap.isOpened():
        print("Camera not exist")
        exit()
        
    frame = detector.findHands(frame)
    landmark_list, bbox = detector.findPosition(frame)

    if len(landmark_list):
        x1, y1 = landmark_list[8][1:]
        x2, y2 = landmark_list[12][1:]

        # 손가락이 펴져있는지 확인
        fingers = detector.findFingerUp()

        # swipe가 가능하게 하기 위한 조건
        # 1. 검지, 중지, 약지 손가락은 펴져있어야 한다.
        if fingers[1] and fingers[2] and fingers[3]:
            # 2. 검지와 중지가 일정 거리 이하여야 한다(붙어있어야 함)
            distance, frame, _ = detector.findDistance(8, 12, frame)
            if distance < 30:  # distance 동작 15초 수행 후 평균한 값을 threshold로 사용
                # 3. block의 width와 height의 차 혹은 비율을 계산하여 특정 threshold를 넘어갔을 경우만 가능하게 한다
                x1, y1, x2, y2 = bbox
                if x2 - x1 + 50 < y2 - y1:  # horizontal move
                    h_swipe_flag = 1
                    v_swipe_flag = 0
                    mt_x, mt_y = landmark_list[12][1:]
                    if not swipe_width:
                        swipe_width = x2 - x1
                    if prev_action == "vertical":  # 만약 이전에 수직 동작이었다면 초기화
                        v_swipe_flag = 0
                        swipe_height = 0
                    prev_action = "horizontal"  # 현재 동작 상태 갱신
                elif y2 - y1 + 50 < x2 - x1:  # vertical move
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
                    if landmark_list[12][1] < mt_x and nx2 - nx1 > swipe_width + 30:
                        h_swipe_flag = 0
                        swipe_width = 0
                        prev_action = None  # 이전 동작 상태 초기화
                        print("swipe left")
                    elif landmark_list[12][1] > mt_x and nx2 - nx1 > swipe_width + 30:
                        h_swipe_flag = 0
                        swipe_width = 0
                        prev_action = None  # 이전 동작 상태 초기화
                        print("swipe right")

                elif prev_action == "vertical":  # 상 하 동작 구분
                    ny1, ny2 = bbox[1], bbox[3]
                    if landmark_list[12][2] < mt_y and ny2 - ny1 > swipe_height + 30:
                        v_swipe_flag = 0
                        swipe_height = 0
                        prev_action = None  # 이전 동작 상태 초기화
                        print("swipe up")
                    elif landmark_list[12][2] > mt_y and ny2 - ny1 > swipe_height + 30:
                        v_swipe_flag = 0
                        swipe_height = 0
                        prev_action = None  # 이전 동작 상태 초기화
                        print("swipe down")

    cv2.imshow("MediaPipe Hands", frame)

    key = cv2.waitKey(5) & 0xFF
    if key == 27:
        break

cv2.destroyAllWindows()
cap.release()
