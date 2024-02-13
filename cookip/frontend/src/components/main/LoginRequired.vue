<!-- components/Modal.vue -->
<template>
  <div class="member_background">
    hi hello
    <p>{{ useAuthStore.login_info }}</p>
    <div v-if="timeout">
      <p>신규 생성을 하려면 왼쪽으로 밀어주세요</p>
    </div>
  </div>
</template>


<script setup>
// import router from '@/router';
import { watchEffect } from 'vue';
import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';
import accountService from "@/store/mvpApi";

let socket = new WebSocket("ws://localhost:8060");

const timeout = ref(false)
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


const sendAuthInfoToServer = async (e) => {
  try {
    // 만약 데이터가 서버에서 클라이언트로 전송된다면
    if (e !== null && e !== undefined) {
      //   console.log(e.data)
      const result = await JSON.parse(e.data);
      useAuthStore.cur_user_info = [result["User"], result["Profile"]]
    }
    else {
      const jsonData = JSON.stringify(useAuthStore.profile);
      if (socket && socket.readyState === WebSocket.OPEN && jsonData) {
        socket.send(jsonData);
        console.log("Auth info sent to the server:", useAuthStore.login_info[0]);
      }
    }
  } catch (error) {
    console.error("Error sending auth info to the server:", error);
  }
};


const loginTimeOver = () => {
  timeout.value = true
}

onMounted(async () => {
  await get_user_profile(useAuthStore.login_info["user_id"])
  socket = new WebSocket("ws://localhost:8060");
  // 웹소켓 연결 설정
  socket.onopen = () => {
    console.log("웹소켓(얼굴 인식) 연결이 열렸습니다.");
    sendAuthInfoToServer(); // 연결이 열리면 데이터를 서버로 전송
  };

  // 에러가 발생했을 때의 처리
  socket.onerror = (e) => {
    console.error("웹소켓(얼굴 인식) 에러:", e);
  };
  
  setTimeout(() => {
    loginTimeOver();
    console.log("hello ")
  }, 5000);
})

watchEffect(() => {
  console.log(useAuthStore.cur_user_info);
  // if (useAuthStore.cur_user_info !== null) {
  //     router.push(({name:"home" ,params : {}, query:{}}))
  // }

  sendAuthInfoToServer();
});

</script>

<style>
.member_background {
  background-color: #fffbe6;
}

</style>
