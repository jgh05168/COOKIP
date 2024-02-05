<template>
  <div >
    <!-- <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
    <h2>
      추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 사용자 맞춤형
      페이지
    </h2> -->
    <RouterLink :to="{ name: 'my-favorite' }"
      >위로 이동하여 즐겨찾기</RouterLink
    >
    <br>
    <br>
    <div class = himessage>
      레시피님 안녕하세요!
    </div>
    <br>
    <div>;
      <div>
        <RecommendCategory />
        레시피 추천 카테고리 캐로셀 선택된 추천 카테고리를 기준으로 아래 요리
        미리보기 제공
      </div>
    </div>
    <RouterLink :to="{ name: 'recipe' }"
      >아래로 이동하여 추천 리스트 보기</RouterLink
    >
  </div>

</template>

<script setup>
import { RouterLink } from "vue-router";
import RecommendCategory from "@/components/home/RecommendCategory.vue";
import router from '@/router';
import { useMotionStore } from '@/store/motion';
import { watchEffect } from 'vue'

const motionStore = useMotionStore()

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect(motionStore.motion_data, () => {
    if (motionStore.motion_data.swipe !== null) {
        let value = motionStore.motion_data.swipe
        // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
        if (value == "SwipeDown") {
          router.push({name:"recipe" ,params : {}, query:{}})
        } else if (value == "SwipeUp") {
          router.push({name:"my-favorite" ,params : {}, query:{}})
      } 
    }
    // 초기화
    motionStore.motion_data = {
            swipe: null,
            page: null,
            rating: null,
            zoom: null,
            flip: null,
        }
});

</script>

<style scoped>
.himessage{
  width: 300px;
  height: 100px;
  color:aqua;
  background-color: brown;
}


</style>