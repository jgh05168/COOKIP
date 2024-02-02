<template>
  <div>
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
    <div>
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
</script>

<style scoped>
.himessage{
  width: 300px;
  height: 100px;
  color:aqua;
  background-color: brown;
}
</style>