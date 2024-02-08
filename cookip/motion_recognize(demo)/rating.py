import cv2
import mediapipe as mp
import HandDetectorModule as hdm
from time import time


cap = cv2.VideoCapture(0)
detector = hdm.handDetector()

start = 0           # 시간이 돌아가고 있는지 체크
rate = 0            # output으로 전송되는 평점

get_rate = False    # 평점이 매겨졌는지 체크하기 위한 인터럽트


while True:
    res, frame = cap.read()

    if not cap.isOpened():
        print("Camera not exist")
        exit()

    frame = cv2.flip(frame, 1)  # 셀프 카메라처럼 좌우 반전
    frame = detector.findHands(frame)
    landmark_list, bbox = detector.findPosition(frame)

    if len(landmark_list):
        if not start:           # 손동작이 인식되었을 때만 rating을 위한 초 시작
            start = time()
    
        # 손가락이 펴져있는지 확인
        fingers = detector.findFingerUp()
        
        if time() - start > 5:
            rate = sum(fingers)
            print(rate)
            # 점수가 입력되었으므로 시작시간, 점수 초기화
            start = 0
            rate = 0

    else:           # 손이 인식되지 않았을 때 tmp_rate과 시작시간 초기화
        start = 0
        rate = 0
    
        
    cv2.imshow("MediaPipe Hands", frame)

    key = cv2.waitKey(5) & 0xFF
    if key == 27:
        break

cv2.destroyAllWindows()
cap.release()
