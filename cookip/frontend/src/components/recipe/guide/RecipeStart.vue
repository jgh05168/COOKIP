<template>
  <div class="stepper-content">
    <div class="grid-container">
      <v-img
        v-for="(stepofstep, slide) in props.ingredient"
        :key="slide"
        :src="stepofstep.image"
        style="width: 250px; margin: 20px; border-radius: 50%"
      ></v-img>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  ingredient: Object,
});
</script>

<style scoped>
.grid-container {
  /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 이미지의 최소 너비는 200px로 설정할 수 있습니다. */
  /* gap: 10px; 이미지 사이의 간격 */
  display: flex;
  flex-wrap: wrap;
}

/* 아래 스타일은 이미지의 가로 크기를 조절할 수 있습니다. */
.grid-container img {
  width: 100%;
  height: auto;
}
</style>
