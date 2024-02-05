# 프로젝트 업무 일지(4주차)

|주차별 정리|
|---|
|[01 / 29](#01--29)|
|[01 / 30](#01--30)|
|[01 / 31](#01--31)|
|[02 / 1](#02--1)|
|[02 / 2](#02--2)|

<br>

## 01 / 29

### 금일 실시 사항

- 오전 : 저번주 DB에서 값 불러오기, js 칸에서 입력하면 값 저장하기 정리

    - 

- 오후 : jira 변경, stt 조사, DB 설계

    - 

### 문제 분석 및 해결
||원인|해결|
|---|---|---|
||sql database 두개 프라이머키|:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|||

<br>

## 01 / 30

### 금일 실시 사항

- 오전 : stt 선정

    - 특징, 비용, HW 등 고려 선정
    - 오픈소스, api 구분

- 오후 : stt 개발

    - 라떼판다 vmware로 들어가지않고 mobaxterm 으로 접속
    - 라떼판다 자체에 usb로 ubuntu iso 설치
    - requirement.txt 라이브러리 설치
    - api 초기 세팅
    - 가상 환경
    - 녹음하고 script를 shell에 나타내기

### 문제 분석 및 해결
||원인|해결|
|---|---|---|
||DB 이미지를 바이너리로 변형하여 불러오려고했는데 불러오기가 안됨 -> bin file이|:white_check_mark:|
||라떼 판다가 whisper 돌리기에는 vram이 부족함 -> google stt로 결정|:white_check_mark:|
||패키지 충돌방지를 위한 requirement, 가상환경|:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|hw선정 구매|:white_check_mark:| 
|:white_check_mark: |샘플코드 조사|
|:white_check_mark: |코드 작성안하고 .py로 shell script 자동화|
|:white_check_mark: |웹에서 녹음하고 script 적기|
|:white_check_mark: |wave 파일을 사용한 이유는, 무압축 파일이기 때문에 손실문제를 피하고자 사용|

<br>

## 01 / 31

### 금일 실시 사항

- 오전 : STT API 설계 

    - 파라미터, 리턴값 설계
    - 음성을 인식하는 시간 계산

- 오후 : 음성인식

    - 필요 라이브러리 설치
    - HTML, JS에서 버튼을 누르면 음성인식을 시작하고 음성인식을 자동으로 인식 후 종료한다. 종료하면 웹페이지에 있는 칸에 자동으로 글이 적힌다. -> 코드작성

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
|:white_check_mark:|음성을 인식할때 자동으로 종료되었으면 좋겠다. 시간초로 세팅할까? 초음파센서를 이용해서 멀어지고 가까워짐에 따라 인식을 종료할까? 특정언어를 받으면 끝나도록 세팅할까? 말이 끝나면 알아서 종료되는 방법은 없을까?||


### 익일 예정 사항

|Todo List|
|---|---|
|:black_square_button: |음성인식을 하고있는건가? 음성을 넣은 후 자동으로 종료되지 않는다. 왜?|

<br>

## 02 / 1

### 금일 실시 사항

- 오전 : x

- 오후 : stt 웹 연결

    - stt 웹에서 js로 연결 -> py로 연결 (챗지피티를 이용해 초기 코드 구상을 만들고 시작하고 세부 사항에 대해 에러에 해결점을 제안받거나 구체적인 질문을 통해서 코드를 만들어볼 수 있다.)(
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const { SpeechClient } = require('@google-cloud/speech');

const client = new SpeechClient();
const audioFile = 'recorded_audio.wav';

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  let recorder;

  socket.on('startRecording', () => {
    recorder = startRecording();
    socket.emit('recordingStarted');
  });

  socket.on('stopRecording', () => {
    if (recorder) {
      stopRecording(recorder, socket);
    } else {
      console.error('Recorder is not initialized.');
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

function startRecording() {
  const recorder = require('node-record-lpcm16');

  const writeStream = fs.createWriteStream(audioFile, { encoding: 'binary' });

  const audioStream = recorder.record({
    sampleRate: 16000,
    channels: 1,
  });

  audioStream.pipe(writeStream);

  console.log('Recording started...');
  return { recorder, writeStream, audioStream };
}

async function stopRecording(recorder, socket) {
  recorder.audioStream.stop();
  recorder.writeStream.end();

  console.log('Recording stopped...');

  const audioBuffer = fs.readFileSync(audioFile);

  try {
    const [response] = await client.recognize({
      audio: {
        content: audioBuffer.toString('base64'),
      },
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'ko-KR',
      },
    });

    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    console.log('Transcription:', transcription);

    socket.emit('transcriptUpdate', transcription);
  } catch (error) {
    console.error('Error during transcription:', error);
  }
}

http.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

        녹음 스트림을 생성하는 node-record-lpcm16 모듈은 최근에 업데이트되어 API가 변경되었는데, 그로 인해 audioStream.pipe 메서드가 더 이상 지원되지 않습니다. 대신에 스트림 이벤트를 직접 다루어 처리할 수 있습니다.

// ...

function startRecording() {
  const recorder = require('node-record-lpcm16');

  const writeStream = fs.createWriteStream(audioFile, { encoding: 'binary' });

  const audioStream = recorder.record({
    sampleRate: 16000,
    channels: 1,
  });

  audioStream.on('data', (data) => {
    writeStream.write(data);
  });

  audioStream.on('end', () => {
    writeStream.end();
    console.log('Recording stopped...');
  });

  console.log('Recording started...');
  return { recorder, writeStream, audioStream };
}

// ...

이제 녹음 중에 오디오 데이터를 audioStream.on('data', ...) 이벤트 핸들러를 통해 스트림으로 기록합니다. 녹음이 끝나면 audioStream.on('end', ...) 이벤트 핸들러에서 기록을 종료합니다.

+
audioStream.on('data', ...) 및 audioStream.on('end', ...)에서 audioStream.stream().on('data', ...) 및 audioStream.stream().on('end', ...)로 변경되었습니다.

recorder.audioStream.stop()가 recorder.recorder.stop()로 변경

-> .wav파일을 열어보니 녹음이 제대로 이뤄지지 않음
-> 왜 그럴까? 아래와 같은 이유가 있을것이라 생각
마이크 권한 및 연결 확인:

운영체제에서 마이크에 대한 권한을 확인하고 허용되어 있는지 확인합니다.
마이크가 정상적으로 연결되어 있는지 확인합니다. => py로 불러왔을땐 문제없었음
오디오 드라이버 및 설정 확인:

시스템의 오디오 드라이버가 올바르게 설치되어 있는지 확인합니다.
오디오 설정에서 마이크가 선택되어 있는지 확인합니다.
Node.js 모듈 및 의존성 버전 확인: => py로 불러왔을땐 문제없었음

사용 중인 Node.js 모듈 및 의존성 버전이 호환되는지 확인합니다.
node-record-lpcm16 모듈을 최신 버전으로 업데이트해보세요.
녹음 파일의 형식 및 코덱 확인: => node-record-lpcm16 방금 받았음

녹음된 오디오 파일이 WAV 형식이고 적절한 코덱으로 인코딩되었는지 확인합니다.
녹음 설정에서 encoding: 'LINEAR16'이 올바르게 설정되어 있는지 확인합니다. => 설정됨
로그 확인: 

콘솔 로그를 확인하여 어떤 오류가 발생했는지 확인합니다.
특히 녹음이 시작될 때와 종료될 때의 로그를 주의 깊게 확인합니다 => 로그까지 보면 시간이 많이 지체되고 언제 해결될지 미지수임
) 
    - 모션인식과 socket 통신을 위한 연결 (nodejs, 카메라 모션인식은 항상 실행되고 있다. 이떄, while 문에서 0이 아닌 1값을 모션인식이 리턴하면 nodejs 에서 값을 받아 data 파싱된 값을 통해 모션인식 type을 인식한다.)

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
||js, html 만을 이용해서 nodejs에서 마이크로 녹음하고 녹음한 데이터를 인풋으로 google speech to text api로 넣고 나온 transscripts를 웹에서 띄우려고 했는데 nodejs에서 녹음이 제대로 이뤄지지 않고 제대로된 lib를 찾기 어려워서 처음 py로 녹음한것으로 돌아감.(py로 녹음하는 것이 더 쉽다) js와 py를 websocket lib로 연결하기로 결정함. 또, 규훈이의 모션인식을 한 결과값을 같이 websocket으로 같이 보내기로 했다. |:white_check_mark:|
||develop에서 git pull 할때 feature에서 pull 을 받으면 된다. = git pull origin feature/stt, pull을 받을 때는 local에서 branch와 원격의 branch와 이름이 같아야 한다.|:white_check_mark:|
||branch를 switch할때 pull을 먼저 받고 switch 해야한다.|:white_check_mark:|
||commit convention은 git commit 을 치면 알아서 넘어간다. 제목, 본문, footer만 넣으면 된다.|:white_check_mark:|
||mysql과 ec2를 연결할때 ssh host 이름이 달라서 연결이 안될수있다.|:white_check_mark:|
||mysql workbench, connection method에서 standard tcp/ip, standard tcpip over ssh의 차이점은 보안성이다. over ssh를 택하면 .pem의 private-key가 넣어서 보안성이 강화되지만 db에 접근이 어려워진다. over ssh를 택하지 않는다면 db의 접근이 쉬워지지만 보안성이 떨어진다. |:white_check_mark:|

### 익일 예정 사항

|Todo List||
|---|---|
|:black_square_button: |모션인식의 결과값과 녹음의 결과값을(.py) 같이 websocket으로 nodejs로 연결시킬지 아니면 모션인식과 녹음의 결과값을 따로 연결해줄지 어떤것이 더 효율적인지 고려해야한다.|

<br>

## 02 / 2

### 금일 실시 사항

- 오전 : stt py에서 구현 
 
- 오후 : stt py에서 구현
  
  - stt py로 구현

### 문제 분석 및 해결

||원인|해결|
|---|---|---|
||동작이 겹친다. 손동작 인식을 돌릴때 연산이 많고 쌓인다. => 제약사향(손인식이 시작될때 인공지능 연산 시작, 인식이 끝나면 연산이 쌓인 데이터 초기화) 효과 x||
||모션인식이 멀리서 하게되면 점이 작아져서 잘 안보이게되어서 인식에 오히려 방해가됨 -> 초음파 센서로 멀리서는 인식할 수 없도록 만들자.||
||stt 구현에 라이브러리가 import가 안된다.||


### 익일 예정 사항

|Todo List||
|---|---|
|:black_square_button: |가상환경을 만들거나 다른 보드를 이용하자|
