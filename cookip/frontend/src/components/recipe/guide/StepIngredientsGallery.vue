<template>
  <div>
    <div class="step-ingredients-gallery">
      {{ props.nowStep }}
      {{ GS.now_recipe_id }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useGuideStore } from "@/store/guide";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  stepofstep: Object,
  nowStep: Number,
  nowStepofstep: Number,
});

const GS = useGuideStore();


</script>

<style scoped>
div > button {
  margin-right: 0; /* 버튼의 상단 마진을 0으로 설정 */
}
.step-ingredients-gallery {
  overflow: hidden;
  width: 500px;
  height: 500px;
  display: block;
  /* display: inline; */
  flex-direction: column;
  background-color: pink;
}

.sub-img {
  height: 120px;

  width: 120px;
}
</style>
