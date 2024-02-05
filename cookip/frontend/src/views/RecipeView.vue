<template>
  <div>
  <div>
    <h1>여기는 검색된 결과를 보여주는 페이지 입니다.</h1>
  </div>

  <RowCarousel />

    <RouterLink :to="{name:'recipe-detail'}">디테일 보러가기</RouterLink> 
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RowCarousel from "@/components/recipe/RowCarousel.vue";
</script>

<style scoped></style>
