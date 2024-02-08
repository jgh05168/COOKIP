# websocket_server.py

import asyncio
import websockets
import json

async def handle_client(websocket, path):
    print(f"클라이언트가 연결되었습니다.")

    try:
        while True:
            with open('data.json', 'r') as file:
                json_data = file.read()
            # 파일 내용을 클라이언트에 전송
            await websocket.send(json_data)

    except (websockets.exceptions.ConnectionClosedError, websockets.exceptions.WebSocketException) as e:
        print(f"클라이언트와의 연결이 종료되었습니다. 오류: {e}")

def start_websocket_server():
    # 웹 소켓 서버 생성
    start_server = websockets.serve(handle_client, "localhost", 8001)

    # 서버 실행
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()

if __name__ == "__main__":
    start_websocket_server()
