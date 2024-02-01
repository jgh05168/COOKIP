<template>
  <div>
    <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
    <h2>
      추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 사용자 맞춤형
      페이지
    </h2>
    <RouterLink :to="{ name: 'my-favorite' }"
      >위로 이동하여 즐겨찾기</RouterLink
    >
    <div>
<<<<<<< HEAD
        <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
        <h2>추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 
            사용자 맞춤형 페이지
        </h2>
        <RouterLink :to="{name:'my-favorite'}">즐겨찾기</RouterLink> |
        <RouterLink :to="{name:'recipe'}">레시피</RouterLink> |
        <RouterLink :to="{name:'recipe-detail'}">레시피디테일</RouterLink>
=======
      <div>
        <RecommendCategory />
        레시피 추천 카테고리 캐로셀 선택된 추천 카테고리를 기준으로 아래 요리
        미리보기 제공
      </div>
      <div>
        <RecommendPreview />
        선택된 레시피 기준 대표 6개 요리 보여주기
      </div>
>>>>>>> def753d0ec55f054e528b8ebbe968d59708d8c4f
    </div>
    <RouterLink :to="{ name: 'recipe' }"
      >아래로 이동하여 추천 리스트 보기</RouterLink
    >
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RecommendCategory from "@/components/home/RecommendCategory.vue";
import RecommendPreview from "@/components/home/RecommendPreview.vue";
</script>

<style scoped></style>
