import cv2
import mediapipe as mp
import HandDetectorModule as hdm
from time import time


cap = cv2.VideoCapture(0)
detector = hdm.handDetector()

# zoom in, zoom out을 판단하는 flag
zoom_in = False
zoom_out = False
zoom_cooltime = 0

while True:
    res, frame = cap.read()

    if not cap.isOpened():
        print("Camera not exist")
        exit()

    frame = detector.findHands(frame)
    landmark_list, bbox = detector.findPosition(frame)

    if len(landmark_list):

        # 손가락이 펴져있는지 확인
        fingers = detector.findFingerUp()
        
        # 전제조건 1. 엄지, 검지, 중지 손가락이 붙어있는지 확인
        dist_left, frame, _ = detector.findDistance(8, 12, frame)
        dist_right, frame, _ = detector.findDistance(4, 8, frame)
        # 전제조건 2. 약지, 새끼 손가락은 접혀있어야 한다.
        if not fingers[3] and not fingers[4] and sum(fingers) == 3 and not zoom_out and not zoom_in:
            # zoom in 전제조건 확인 : 한번 zoom을 한 뒤에는 쿨타임이 존재함(2초)
            if dist_left < 40 and dist_right < 40 and time() - zoom_cooltime > 0.5:
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
                print("zoom in")
                zoom_in = False
        elif zoom_out:
            if dist_left < 40 and dist_right < 40:
                zoom_cooltime = time()
                print("zoom out")
                zoom_out = False

        
        
    cv2.imshow("MediaPipe Hands", frame)

    key = cv2.waitKey(5) & 0xFF
    if key == 27:
        break


cv2.destroyAllWindows()
cap.release()
