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
