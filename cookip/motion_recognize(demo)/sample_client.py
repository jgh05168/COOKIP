import asyncio
import websockets
import json

async def receive_data():
    uri = "ws://localhost:8001"  # 서버의 주소와 포트를 적절히 변경

    async with websockets.connect(uri) as websocket:
        while True:
            data = await websocket.recv()
            parsed_data = json.loads(data)
            
            # 여기서 parsed_data를 이용하여 프론트 클라이언트에게 출력하는 작업 수행
            print(parsed_data)

# 비동기로 데이터 수신을 처리하는 함수 실행
asyncio.get_event_loop().run_until_complete(receive_data())
