## 1. local에서 클론 이후 빌드 하는 방법

```terminal
cd S10P12C101/cookip/backend
npm i
node server.js
cd ../frontend
npm i
npm run serve
```

Visual Studio Code 2024 (1.86)<br>
DB 계정 및 프로퍼티는 S10P12C101/cookip/backend/database/dbConnection.js 에 존재

nodejs 포트 3002 (server)<br>
vue 포트 8000    (front)<br>
nginx 포트 80

시연시나리오
http://i10c101.p.ssafy.io:8000/main

## 2. local에서 Python 가상 환경 설치하는 방법

1. `https://www.python.org/downloads/release/python-386/` 들어가서 `Windows x86-64 executable installer` 파일 다운로드

    - 환경 변수(PATH) 설정 

2. python 3.8.6 버전에 맞추어 가상환경 생성

	- python -m venv venv

    - 만약, 환경 변수를 설정해도 이전 파이썬 버전이 설정된다면

        1. vs code 오른쪽 아래 `언어 모드 선택` 클릭

        2. 상단 바 따라서 진행

3. pip install -r requirements.txt 진행

	- autopy 설치 중 에러뜬다면 python 버전 다시 확인해보기

	- requirements.txt는 cookip 폴더 안에 존재함
