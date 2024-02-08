import cv2
import mediapipe as mp
import HandDetectorModule as hdm
from time import time


cap = cv2.VideoCapture(0)
detector = hdm.handDetector()


while True:
    res, frame = cap.read()

    if not cap.isOpened():
        print("Camera not exist")
        exit()

    frame = detector.findHands(frame)
    landmark_list, bbox = detector.findPosition(frame)
    
    if len(landmark_list):
        # 전제조건 : 1. 12번 마디와 4번 마디가 붙어있어야 한다. 
        #            2. 4번, 5번 손가락이 접혀있어야 한다.
        #            3. x 좌표의 위치만 생각해주면 된다.

        fingers = detector.findFingerUp()
        distance, frame, _ = detector.findDistance(4, 12, frame)
        print(distance)
        
        
    cv2.imshow("MediaPipe Hands", frame)

    key = cv2.waitKey(5) & 0xFF
    if key == 27:
        break


cv2.destroyAllWindows()
cap.release()
