<!-- components/Modal.vue -->
<template>
  <div class="member_background">
    hi
  </div>
</template>


<script setup>
import router from '@/router';
import { useMotionStore } from '@/store/motion';
import { watchEffect } from 'vue';

const motionStore = useMotionStore()

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
