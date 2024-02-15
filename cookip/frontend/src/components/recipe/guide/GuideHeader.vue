<!-- 레시피 가이드 해당 스텝 헤더 컴포넌트 -->
<template>
  <div>
    <div class="recipe-guide-header">
      <!-- 레시피 가이드 스텝 메인 이미지 -->
      <v-img class="step-header-image" :src="require(`@/assets/image/KGO.png`)" />
      <!-- 레시피 가이드 스텝 정보 및 경과 시간 -->
      <div class="step-header-content">
          <HeaderStepInfo :guide="props.guide" :step="props.now_step" />
          <HeaderRecipeInfo :recipe="props.recipe" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import HeaderStepInfo from "./HeaderStepInfo.vue";
import HeaderRecipeInfo from "./HeaderRecipeInfo.vue";

const props = defineProps({
  recipe: Object,
  guide: Object,
  now_step: Number
});
</script>

<style scoped>
.recipe-guide-header {
  /* width: max-content; */
  background: #fdf8ec;
  gap: 20px;
  display: flex;
  flex-direction: row;
}
.step-header-image {
  width: 140px;
  height: 140px;
  padding: 0 0;
  /* margin: 20px; */
  border-radius: 0 30px 30px 0;
}

.step-header-content {
  width: 1000px;
  height: 140px;
  padding: 20px;
  background: white;
  /* border-radius: 30px 0 0 30px; */
  overflow: hidden;
  gap: 10px;
  display: flex;
  flex-direction: row;
}

.step-info {
  height: 112px;
  gap: 10px;
}

.step-number,
.step-description {
  text-align: left;
  color: #000000;
  font-size: 30px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.step-description {
  align-self: stretch;
  flex: 1 1 0;
  font-size: 35px;
}

.time-info {
  /* align-self: stretch; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* align-items: right; */
  /* display: inline-flex; */
}

.time,
.recipe-name,
.recipe-status {
  text-align: right;
  color: black;
  font-size: 40px;
  font-family: Shanti;
  font-weight: 400;
  word-wrap: break-word;
}

.recipe-info {
  width: 500px;
  /* justify-content: flex-start; */
  align-items: right;
  gap: 10px;
  word-wrap: break-word;
  /* display: inline-flex; */
}
</style>
