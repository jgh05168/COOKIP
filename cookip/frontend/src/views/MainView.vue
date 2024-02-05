<template>
    <div class="member_background">
        <!-- <h1>기본페이지입니다</h1>
        <h2>만약 기기에 로그인 정보가 기록되어 있지 않다면 auth 게정
            설정 관련 QR 코드를 보여주는 페이지를 제시합니다
        </h2>
        <h2>만약 로그인 되어있다면 대표 화면을 보여줍니다.</h2>
        <h1>여기서 사용자 얼굴인식을 통하여 현재 사용자 정보를 저장해 둡니다</h1>
        <h1>여기서는 STT와 모션인식을 통해 다른 화면이나 기능으로 넘어갈 수 있습니다</h1>
        <LoginRequired />
        <SignedIn /> -->
        <LoginRequired :visible="showModal"/>
    </div>
</template>

<script setup>
import LoginRequired from '@/components/main/LoginRequired.vue'
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
import { useMotionStore } from '@/store/motion';
import { watchEffect } from 'vue'
import { ref } from 'vue';

const motionStore = useMotionStore()
const showModal = ref(false);

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect( () => {
    if (motionStore.motion_data.swipe !== null) {
        // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
        console.log(motionStore.motion_data)
        if (motionStore.motion_data.swipe == "SwipeUp") {
            showModal.value = true
        }
        motionStore.motion_data = {
                swipe: null,
                page: null,
                rating: null,
                zoom: null,
                flip: null,
            }
    } 
});



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