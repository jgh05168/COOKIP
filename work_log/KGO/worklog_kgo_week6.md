# 프로젝트 업무 일지(6주차)

|주차별 정리|
|---|
|[02 / 13](#02--13)|
|[02 / 14](#02--14)|
|[02 / 15](#02--15)|
|[02 / 16](#02--16)|

<br>

## 02 / 13

### 금일 실시 사항

- 오전 : 최신화 베포
    
    - 3307:3306 (host:container) 포트 매핑

    - 3d printer
    
    - vue 파일구조 이해하기 view -> component

- 오후 : mobile/survey css 만들기 
    
    - git pull 이슈

    - 하나 파라미터 값 변경하면서 div 찾기

    - router 넘어가기 고려, 6줄5개 나오게 만들기, submitsurvey에서 모바일 키에서 입력한 글자와 db안에 있는 글자가 일치하지않으면 값을 제대로 넣을 수 없도록 한다.

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
||소통-> 누구는 이렇게 이해하고 중간에 수정하는줄 모르고 다른 버전으로 개발 -> 지라 업데이트, 정기 미팅시간, 친하게 지내기|:white_check_mark:|
||gpt -> DB insert 반복문, 샘플코드 간단한 예시 만들기|:white_check_mark:|
||작업공간에서 git 에 올리려다가 git pull 하라길래 git pull 햇다가 작업했던것들 다 날라감. git reset으로 add 한거 다 날려버려서 복구도 안됨 -> 파일구조 변경|:white_check_mark:|
||해킹당한 DB -> git에다가 비밀번호와 관련된 코드를 올려놧음 -> gitignore, dockerignoer 을 이용해서 올라와서는 안되는 비밀번호 관련 코드들을 삭제함, 노션에서만 비밀리 해결(관리자 권한이 있는 이용자들만 들어올 수 있음)|:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|||

<br>

## 02 / 14

### 금일 실시 사항

- 오전 : 
    
    - docker port 해결하기. docker 3306 port를 사용하면 mysql 에서 3306 port를 사용하지 못한다는 문제점 발견
    - survey css, 6줄

- 오후 : 
    
    - 배포 완성
    - dbConnection.js에서 port를 적을때 "" 안적어도 됨, 비밀번호만 따로 관리하는 식으로도 관리할 수 있음. (우리는 .gitignore을 이용해서 처음부터 만드는 과정)
    - docker logs ~ 을 이용해서 몇번 포트에 연결이 되었는지 확인할 수 있음, f12에서 console을 통해 디버깅(원하는 값을 불러왔는지, print를 이용해서 함수 작동 중 인지)이 가능함.
    - server.js에서 port 값 수정
    - 베포해야하는 port 변경으로 front에서 라우터의 값을 제대로 못가져오므로 프론트 포트값 수정

### 문제 분석 및 해결
||원인|해결|
|---|---|---|
||host:container port 관리, dockerfile의 expose는 container port임. host port를 이용해서 접속이 가능하다. |:white_check_mark:|
||f12을 이용해서 mvpApi에서 값이 이상함을 확인함 -> 지라로 담당 팀원 찾음 -> 함수 설명을 듣고 오류가 발생할 가능성이 있는 코드에 대해 들음 -> 오류 확인 -> 주석화로 해결 |:white_check_mark:|
||mysql은 이미 aws에 연결이 되어있으므로 docker-compose에서 container로 올리지 않아도 됨. docker에 올려서 local에서 mysql에 접속이 못하는 현상이 발생됨. 이는 포트의 중복 문제로 판별남|:white_check_mark:|
||sudo afw, 임의 사용할 포트 열어두기|:white_check_mark:|
||cmd로 npm start를 하면 package.json에서 script로 따로 시작 스크립트를 작성했다면 상관없지만 작성하지 않았다면 node server.js 처럼 직접 코드를 동작시켜줘야한다. |:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|:white_check_mark:|서버 배포 후 빌드 자동화(젠킨스) -> 2차 프로젝트에서 사용 예정|
|:white_check_mark:|survey 6줄 css 만들기|
|:white_check_mark:|포팅 메뉴얼|

<br>

## 02 / 15

### 금일 실시 사항

- 금일 : 
    - 

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
|:white_check_mark:||

### 익일 예정 사항

|Todo List|
|---|---|
|:black_square_button:||

<br>

## 02 / 16

### 금일 실시 사항

- 오전 : 

- 오후 : 
    - 

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
|||:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|:black_square_button:||
