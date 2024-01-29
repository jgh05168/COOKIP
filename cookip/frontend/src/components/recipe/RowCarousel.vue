<template>
  <v-carousel height="400" hide-delimiters class="vertical-carousel">
    <!-- 캐로셀 상하 조작 버튼-->
    <template v-slot:prev="{ props }">
      <v-btn  @click="props.onClick">Prev</v-btn>
    </template>

    <template v-slot:next="{ props }">
      <v-btn @click="props.onClick">Next</v-btn>
    </template>
    <!-- ------------------ -->
    <v-carousel-item
      v-for="(slide, idx) in slides"
      :key="idx"
      class="vertical-carousel-item"
    >
      <v-card class="vertical-item-card" :title="slide.title">
        <v-img :src="slide.img"></v-img>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from "vue";

const slides = ref();

slides.value = [
  {
    title: "김치순두부찌개",
    img: "https://static.wtable.co.kr/image/production/service/recipe/1074/d3c0b5c1-2671-483e-9bbf-76496bb443fd.jpg?size=800x800",
  },
  {
    title: "채식순두부찌개",
    img: "https://static.wtable.co.kr/image/production/service/recipe/1766/76081be7-350a-490b-9a97-4ff00ec3d5ce.jpg?size=500x500",
  },
  {
    title: "해물순두부찌개",
    img: "https://static.wtable.co.kr/image/production/service/recipe/363/257408c4-6701-45ed-a86b-3a6af4a67ffc.jpg?size=500x500",
  },
];
</script>

<style scoped>
.vertical-carousel {
  transform: rotate(90deg); /* 90도 회전하여 세로로 슬라이드되도록 함 */
  width: 400px; /* 높이와 너비를 서로 교체하여 크기 조절 */
}

.vertical-carousel-item {
  transform: rotate(
    -90deg
  ); /* 각 슬라이드 아이템을 다시 90도 회전하여 정상적으로 표시 */
}

.vertical-item-card {
  transform: rotate(
    -90deg
  ); /* 각 슬라이드 아이템의 텍스트도 원래대로 90도 회전 */
}
</style>
