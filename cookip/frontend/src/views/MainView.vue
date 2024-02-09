<template>

    <div>
        <!-- <h1>기본페이지입니다</h1>
        <form action="http://localhost:5000/user/insertUser" method="post">
        <label for="login_id">login_id:</label>
        <input type="text" id="login_id" name="login_id">
        <label for="password">password:</label>
        <input type="text" id="password" name="password">
        <label for="username">username:</label>
        <input type="text" id="username" name="username">
        <label for="email">email:</label>
        <input type="text" id="email" name="email">
        <label for="age">age:</label>
        <input type="text" id="age" name="age">
        <label for="phone_number">phone_number:</label>
        <input type="text" id="phone_number" name="phone_number">
        <button type="submit">Submit</button>
    </form> -->

        <div>
            <h1>기본페이지입니다</h1>
            <h2>만약 기기에 로그인 정보가 기록되어 있지 않다면 auth 게정
                설정 관련 QR 코드를 보여주는 페이지를 제시합니다
            </h2>
            <h2>만약 로그인 되어있다면 대표 화면을 보여줍니다.</h2>
            <h1>여기서 사용자 얼굴인식을 통하여 현재 사용자 정보를 저장해 둡니다</h1>
            <h1>여기서는 STT와 모션인식을 통해 다른 화면이나 기능으로 넘어갈 수 있습니다</h1>
            <div>
                <LoginRequired />
            </div>
        </div>
    </div>
</template>

<script setup>
import LoginRequired from '@/components/main/LoginRequired.vue'
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
// import { ref } from 'vue';

</script>

<style scoped>
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
}





</style>