<!-- components/Modal.vue -->
<template>
  <div class="login_container">
    <div class="loading_cycle">
      <v-progress-circular
        :size="100"
        :width="7"
        color="brown"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="logo">
      <img :src="require(`@/assets/login_image/cookip_logo.png`)" alt="로고" />
    </div>
    <!-- <p>{{ useAuthStore.login_info }}</p> -->
    <footer>
      <transition name="fade" mode="out-in">
        <div :key="timeout" class="fade">
          <span v-if="timeout" class="arrow-prev"></span>
          <span v-if="timeout" class="arrow-prev"></span>
          <span v-if="timeout" class="arrow-prev"></span>
          <h2><strong>{{ timeout ? '밀어서 프로필 생성' : '사용자 인증 진행중 ...' }}</strong></h2>
        </div>
      </transition>

  </footer>

  </div>
</template>


<script setup>
// import router from '@/router';
import { watchEffect } from 'vue';
import { useMotionStore } from '@/store/motion';
import { useAuthStore } from '@/store/auth';
import { onMounted, ref, onUnmounted } from 'vue';
import accountService from "@/store/mvpApi";
import router from '@/router';

let socket = new WebSocket("ws://localhost:8060");

const motionStore = useMotionStore()
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
    console.log(useAuthStore.profile)
    // 만약 데이터가 서버에서 클라이언트로 전송된다면
    if (e !== null && e !== undefined) {
        console.log(e.data)
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
  motionStore.motion_data = {
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  }
}

onMounted(async () => {
  if (useAuthStore.login_info != undefined){
    await get_user_profile(useAuthStore.login_info["user_id"])
  }
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
  }, 5000);
})

onUnmounted(() => {
  if (socket) {
    socket.close(); // 컴포넌트가 제거될 때 웹소켓 연결을 닫습니다.
  }
});

watchEffect(() => {
  // if (useAuthStore.cur_user_info !== null) {
  //     router.push(({name:"home" ,params : {}, query:{}}))
  // }
  if (timeout.value == true && motionStore.motion_data.swipe !== null) {
    if (motionStore.motion_data.swipe == "SwipeLeft") {
      motionStore.transition_dir = "slide-left"
      router.push({name:"create-profile" ,params : {}, query:{}})
    }
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    motionStore.motion_data = {
      swipe: null,
      page: null,
      rating: null,
      zoom: null,
      flip: null,
    };
    // console.log(motionStore.motion_data)
  }

  sendAuthInfoToServer();
});

</script>

<style>

img {
  width: 400px;
  height: auto;
}


.login_container {
  height: 65vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.logo {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

footer {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

footer div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

footer h2 {
  font-size: 2.5em; /* 원하는 크기로 조절하세요 */
}

.loading_cycle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  margin-top: 20px;
}


.arrow-prev,
.arrow-next {
    position: relative;
    float:left;
    width:50px;
    height:50px;
    margin-right:5px;
}

.arrow-prev::after {
    position: absolute;
    left: 10px; 
    top: 10px;
    content: '';
    width: 35px; /* 사이즈 */
    height: 35px; /* 사이즈 */
    border-top: 5px solid #000; /* 선 두께 */
    border-right: 5px solid #000; /* 선 두께 */
    transform: rotate(225deg); /* 각도 */
}

.arrow-next::after {
    position: absolute;
    left: 10px; 
    top: 10px; 
    content: '';
    width: 35px; /* 사이즈 */
    height: 35px; /* 사이즈 */
    border-top: 5px solid #000; /* 선 두께 */
    border-right: 5px solid #000; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
