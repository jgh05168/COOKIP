<template>
    <div class="frame">
      <div class="div-wrapper">
          <div class="icon">
            <v-img @click="goback" class="color" alt="Color" src="../../assets/login_icon/Start Button.png" 
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"/>
          </div>
      </div>
      <div class="div-wrapper">
        <div class="frame-wrapper">
          <div class="div">
            <div class="div-2">
              <div class="div-3">
                <v-img class="color" alt="Color" src="../../assets/login_icon/c1.png" 
                    @mouseover="handleMouseOver"
                    @mouseleave="handleMouseLeave"/>
                <div class="basic-details">Login</div>
              </div>
              <div class="to-sign-up-you-need">Please login to continue.</div>
            </div>
            <v-form @submit.prevent class="div-4">
                
                <v-text-field
        v-model="id"
        :rules="rules"
        label="ID" style="width: 100%;"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules"
        label="Password" style="width: 100%;"
      ></v-text-field>
              <div style="width: 100%;">
                <v-btn
                @click.prevent="login"
              class="continue"
              color="#007aff"
              dark
              elevation="2"
              >Continue</v-btn
            >
              </div>
            </v-form>
            <div v-show="error" style="color: red;">
              id, password를 잘못 입력했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //import axios from 'axios'; // Axios 라이브러리 가져오기
  import { ref, onMounted } from 'vue';
  import accountService from "@/store/mvpApi";
  import { useAuthStore } from "@/store/auth";
  import { useRouter } from "vue-router"

  const router = useRouter()
const id = ref('')
const password = ref('')
const error = ref(0)


// const login = async function(){
//   const user = await accountService.getLogin(id.value, password.value)
//   useAuthStore.login_info = user
//   if(user.length === 0){
//      error.value = 1
//   }
//   axios.post('http://localhost:5000/user/loginProc', {
//     id: useAuthStore.login_info[0].login_id,
//     pw: useAuthStore.login_info[0].password
//   })
//   .then(response => {
//     if (response.data.success) {
//       console.log('로그인 성공:', response.data.message);
//       error.value = 0
//       router.push({ name:'main'});
//     } else {
//       console.log('로그인 실패:', response.data.message);
//       error.value = 1
//     }
//   })
//   .catch(error => {
//     console.error('POST 요청 오류:', error);
//     // POST 요청 실패 시 수행할 작업 추가
//   });

//   localStorage.setItem('user_id', useAuthStore.login_info[0].login_id);
//   localStorage.setItem('pw', useAuthStore.login_info[0].password);
// }


const login = async function(){
  const user = await accountService.getLogin(id.value, password.value)
  if(user.length === 0){
    error.value = 1
  }
  else{
    error.value = 0
    useAuthStore.login_info = user
    localStorage.setItem('loginFlag', 1);
    router.push({ name:'main'})
  }
}
const goback = function(){
  router.go(-1)
}
const colorElement = ref(null);
const handleMouseOver = () => {
  // 이미지에 마우스 호버 시 크기를 확대
  document.querySelector('.color').style.transform = 'scale(2)';
};

const handleMouseLeave = () => {
  // 마우스를 뗄 때 이미지 크기를 원래 크기로 되돌림
  document.querySelector('.color').style.transform = 'scale(1)';
};

onMounted(() => {
  colorElement.value = document.querySelector('.color');
});
  </script>
  
  <style>
  .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }
  
  .frame .div-wrapper {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
    width: 360px;
  }
  
  .frame .start-button {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 12px;
    position: relative;
  }
  
  .frame .icon {
    height: 50px;
    position: relative;
    width: 50px;
  }
  
  .frame .color {
    height: 100%;
    left: 4px;
    top: 4px;
    width: 50px;
  }
  
  .color {
  transition: transform 0.3s ease-in-out; /* 부드러운 전환을 위한 CSS 속성 */
}

  .frame .frame-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .div {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .frame .div-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;
  }
  
  .frame .img {
    height: 40px;
    position: relative;
    width: 40px;
  }
  
  .frame .basic-details {
    color: #1a1c29;
    font-family: "Roboto-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .to-sign-up-you-need {
    align-self: stretch;
    color: #797979;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    position: relative;
  }
  
  .frame .div-4 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
  }
  
  .frame .frame-wrapper-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-5 {
    align-items: center;
    align-self: stretch;
    background-color: #f3f3f3;
    border: 2px solid;
    border-color: #007aff;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .text-wrapper {
    color: #797979;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .rectangle {
    background-color: #007aff;
    height: 24px;
    left: 16px;
    position: absolute;
    top: 15px;
    width: 2px;
  }
  
  .frame .frame-wrapper-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .last-name-wrapper {
    align-items: center;
    align-self: stretch;
    background-color: #f3f3f3;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    padding: 0px 16px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-wrapper-2 {
    align-items: center;
    align-self: stretch;
    background-color: #007aff;
    border-radius: 14px;
    display: flex;
    gap: 10px;
    height: 54px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .frame .text-wrapper-2 {
    color: #ffffff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .frame .div-6 {
    align-self: stretch;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
  }
  
  .continue {
    height: 50px;
    border-radius: 14px;
    color:  #007aff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: 100%;
  }
  </style>