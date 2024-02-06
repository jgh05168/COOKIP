<template>
  <div class="recipe-view">
    <!-- <div class="recipe-view-header">
      <h1>여기는 검색된 결과를 보여주는 페이지 입니다.</h1>
    </div> -->
    <div class="carousel-wrapper">
      <RowCarousel />
    </div>
  </div>
</template>

<script setup>
import RowCarousel from "@/components/recipe/RowCarousel.vue";
import { useMotionStore } from "@/store/motion";
import router from "@/router";
import { watchEffect } from "vue";

const motionStore = useMotionStore();

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect(motionStore.motion_data, () => {
  if (motionStore.motion_data.page !== null) {
    let value = motionStore.motion_data.page;
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    if (value == "PageIn") {
      router.push({ name: "recipe-detail" });
    } else if (value == "PageOut") {
      router.push({ name: "home" });
    }
  }
  // 초기화
  motionStore.motion_data = {
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  };
});
</script>

<style scoped>
.recipe-view {
  height: 100%;
  width: 100%;
}

/* .recipe-view-header {
  height: 10%;
  text-align: center;
} */

.carousel-wrapper {
  height: 100%;
  width: 100%;
}
</style>
