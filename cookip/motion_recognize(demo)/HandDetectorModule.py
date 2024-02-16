import cv2  # OpenCV 라이브러리 import
import sys  # sys 모듈 import
import mediapipe as mp  # MediaPipe 패키지 import하고 mp라는 별칭으로 사용하겠다는 뜻.
import math  # math 모듈 import
from time import time
import numpy as np


# 손 감지 클래스 생성()
class handDetector():
    def __init__(self, mode=False, maxHands=2, detectionConf=0.5, trackConf=0.5):
        self.mode = mode
        self.maxHands = maxHands
        self.detectionConf = detectionConf
        self.trackConf = trackConf

        # MediaPipe 패키지에서 사용할 기능들.
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_drawing_styles = mp.solutions.drawing_styles
        self.mp_hands = mp.solutions.hands  # 손 인식을 위한 객체
        self.hands = self.mp_hands.Hands(
            static_image_mode=self.mode,
            max_num_hands=self.maxHands,
            min_detection_confidence=self.detectionConf,
            min_tracking_confidence=self.trackConf
        )
        self.tipIds = [4, 8, 12, 16, 20]        # 손가락 팁 id


    # 손가락 좌표 찾기
    def findHands(self, frame, draw=True):
        frame = cv2.flip(frame, 1)  # 셀프 카메라처럼 좌우 반전
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)  # 미디어파이프에서 인식 가능한 색공간으로 변경
        self.results = self.hands.process(image)  # 이미지에서 손을 찾고 결과를 반환
        if self.results.multi_hand_landmarks:  # 손이 인식되었는지 확인
            for idx, hand_landmarks in enumerate(self.results.multi_hand_landmarks):  # 반복문을 활용해 인식된 손의 주요 부분을 그림으로 그려 표현
                if draw:        # 요청을 보낼 때만 손가락 관절 그리기(기본값=True)
                    self.mp_drawing.draw_landmarks(
                        frame,
                        hand_landmarks,
                        self.mp_hands.HAND_CONNECTIONS,
                        self.mp_drawing_styles.get_default_hand_landmarks_style(),
                        # self.mp_drawing_styles.get_default_hand_connections_style(),
                    )

                points = hand_landmarks.landmark  #  landmark 좌표 정보들을 points라는 변수로 활용

        return frame


    # 손가락 마디 별 x, y 좌표 리스트 반환
    def findPosition(self, image, landmarkNo=0, handNo=0, draw=True):     # handNo : 손이 한 개인지, 두 개인지 판단
        self.landmark_list = []
        bbox = []
        x_list = []
        y_list = []
        if self.results.multi_hand_landmarks:
            my_hand = self.results.multi_hand_landmarks[handNo]         
            # 픽셀의 위치를 토대로 중앙값 구하기 
            for id, landmark in enumerate(my_hand.landmark):     # 좌표 별 위치 찾기
                h, w, c = image.shape
                cx, cy = int(landmark.x * w), int(landmark.y * h)       # x, y 중앙값 찾기 
                # print(cx, cy)
                x_list.append(cx)
                y_list.append(cy)
                self.landmark_list.append([id, cx, cy])
                if draw:
                    cv2.circle(image, (cx, cy), 5, (255, 0, 255), cv2.FILLED)      # 특정 손가락 마디 표시 강조           

            min_x, max_x = min(x_list), max(x_list)
            min_y, max_y = min(y_list), max(y_list)
            bbox = min_x, min_y, max_x, max_y

            if draw:
                cv2.rectangle(image, (min_x - 10, min_y - 10), (max_x + 10, max_y + 10), 
                              (0, 255, 0), 2)

        return self.landmark_list, bbox
    

    # 손가락 마디 별 거리 찾고 시각화해주는 함수
    def findDistance(self, p1, p2, image, draw=True, r=10, t=3):
        x1, y1 = self.landmark_list[p1][1:]
        x2, y2 = self.landmark_list[p2][1:]
        cx, cy = (x1 + x2) // 2, (y1 + y2) // 2

        if draw:
            # 특정 마디와 마디 사이를 연결해주는 line을 그리고 중앙에 circle 그리기
            cv2.line(image, (x1, y1), (x2, y2), (255, 0, 255), t)
            cv2.circle(image, (x1, y1), r, (255, 0, 255), cv2.FILLED)
            cv2.circle(image, (x2, y2), r, (255, 0, 255), cv2.FILLED)
            cv2.circle(image, (cx, cy), r, (0, 0, 255), cv2.FILLED)
        distance = math.hypot(x2 - x1, y2 - y1)

        return distance, image, [x1, y1, x2, y2, cx, cy]
    

    def get_distance(self, p1, p2):
        x1, y1 = self.landmark_list[p1][1:]
        x2, y2 = self.landmark_list[p2][1:]

        return math.hypot(x2 - x1, y2 - y1)

    

    # 손가락이 접혔는지 펴졌는지 확인하는 함수
    def findFingerUp(self):
        fingers = []
        # 엄지손가락
        if self.landmark_list[self.tipIds[0]][1] < self.landmark_list[self.tipIds[0] - 1][1]:
            fingers.append(1)
        else:
            fingers.append(0)

        # 나머지 손가락들
        for id in range(1, 5):
            if self.get_distance(self.tipIds[id], 0) < self.get_distance(self.tipIds[id] - 2, 0):
                fingers.append(0)
            else:
                fingers.append(1)

        return fingers
        

    def get_label(self, hand_idx=0):
        
        def get_label(index, results):
            for idx, classification in enumerate(results.multi_handedness):
                if classification.classification[0].index == index:
                    label = classification.classification[0].label
                    return label
                else:
                    label = classification.classification[0].label
                    return label
        

        if self.results.multi_hand_landmarks:
            return get_label(hand_idx, self.results)


def main():
    cap = cv2.VideoCapture(0)       # 비디오 캡처 객체 생성
    detector = handDetector()       # 클래스 가져오기
    if not cap.isOpened():  # 연결 확인
        print("Camera is not opened")
        sys.exit(1)  # 프로그램 종료

    # fps 확인을 위한 변수
    prev_time = 0
    cur_time = 0

    while True:  # 무한 반복
        res, frame = cap.read()  # 카메라 데이터 읽기
        
        if not res:  # 프레임 읽었는지 확인
            print("Camera error")
            break  # 반복문 종료

        frame = detector.findHands(frame)       # 얻은 카메라 데이터의 프레임을 findHands 함수로 보내기
        lm_list, bbox = detector.findPosition(frame)

        # fps를 구하여 화면에 표시
        cur_time = time()
        fps = 1 / (cur_time - prev_time)
        prev_time = cur_time
        cv2.putText(frame, str(int(fps)), (10, 70), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 255), 3)


        cv2.imshow("MediaPipe Hands", frame)  # 영상을 화면에 출력.

        key = cv2.waitKey(5) & 0xFF  # 키보드 입력받기
        if key == 27:  # ESC를 눌렀을 경우
            break  # 반복문 종료

    
    cv2.destroyAllWindows()  # 영상 창 닫기 
    cap.release()  # 비디오 캡처 객체 해제

if __name__=="__main__":
    main()