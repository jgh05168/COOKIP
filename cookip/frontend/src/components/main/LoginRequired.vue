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
  background-color: #fffbe6;
}

</style>
