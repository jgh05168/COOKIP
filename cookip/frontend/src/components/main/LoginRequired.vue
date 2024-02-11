<!-- components/Modal.vue -->
<template>
  <div class="member_background">
    hi hello
    <p>{{ useAuthStore.login_info }}</p>
  </div>
</template>


<script setup>
import router from '@/router';
import { useMotionStore } from '@/store/motion';
import { watchEffect } from 'vue';
import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';
import accountService from "@/store/mvpApi";

const motionStore = useMotionStore()
let socket = new WebSocket("ws://localhost:8060");

// const isLogin = ref(false)

// function loginTimeOver(){
//   isLogin.value = 
// }

const error = ref("")

const get_user_profile = async () => {
  try {
    useAuthStore.profile = await accountService.getUserProfile(useAuthStore.login_info[0]["user_id"]);
    console.log(useAuthStore.profile)
  } catch (err) {
    error.value = err.message;
    console.error("Error in get_user_profile:", err);
  }
};


const sendAuthInfoToServer = () => {
  try {
    const jsonData = JSON.stringify(useAuthStore.profile);
    if (socket && socket.readyState === WebSocket.OPEN && jsonData) {
      socket.send(jsonData);
      console.log("Auth info sent to the server:", useAuthStore.login_info[0]);
    }
  } catch (error) {
    console.error("Error sending auth info to the server:", error);
  }
};


onMounted(async () => {
  await get_user_profile(useAuthStore.login_info["user_id"])
  const socket = new WebSocket("ws://localhost:8060");

  // 웹소켓 연결 설정
  socket.onopen = () => {
    console.log("웹소켓(얼굴 인식) 연결이 열렸습니다.");
    sendAuthInfoToServer(); // 연결이 열리면 데이터를 서버로 전송
  };

  // 에러가 발생했을 때의 처리
  socket.onerror = (e) => {
    console.error("웹소켓(얼굴 인식) 에러:", e);
  };
  // setTimeout(loginTimeOver, 5000);
})

watchEffect(() => {
  console.log(motionStore.motion_data);
  if (motionStore.motion_data.swipe !== null) {
    if (motionStore.motion_data.swipe == "SwipeUp") {
      motionStore.transition_dir = "slide-up"
      router.push(({name:"member" ,params : {}, query:{}}))
    }

    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    motionStore.motion_data = {
      swipe: null,
      page: null,
      rating: null,
      zoom: null,
      flip: null,
    };
  }

  sendAuthInfoToServer();
});

</script>

<style>
.member_background {
  /* 백그라운드 이미지 설정 */
  background-image: url('@/assets/image/home_background.png'); /* @는 src 경로를 나타냅니다. */
  /* 이미지가 꽉 채우도록 설정 */
  background-size: cover;
  /* 이미지가 반복되지 않도록 설정 */
  background-repeat: no-repeat;
  /* 이미지가 가운데 정렬되도록 설정 */
  background-position: center;
  /* 배경 색상 fallback 설정 (이미지가 로드되지 않을 경우) */
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  z-index: -1;
}

</style>
