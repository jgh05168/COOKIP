<!-- 레시피 가이드 해당 스텝 헤더 컴포넌트 -->
<template>
  <v-row class="recipe-guide-header">
    <!-- 레시피 가이드 스텝 메인 이미지 -->
    <div class="step-header-image">
      <v-img src="/src/assets/image/임채진.png" />
    </div>

    <!-- 레시피 가이드 스텝 정보 및 경과 시간 -->
    <v-row class="step-header-content">
      <HeaderStepInfo :step="props.selectedStep[props.selectedStep.step]" :title="props.selectedStep.title" />
      <!-- <HeaderRecipeInfo :recipeName="props.selectedStep.name" /> -->
    </v-row>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";
import HeaderStepInfo from "./HeaderStepInfo.vue";
// import HeaderRecipeInfo from "./HeaderRecipeInfo.vue";

const props = defineProps({
  userInfos: Object,
  selectedStep: Object,
});
</script>

<style scoped>
.recipe-guide-header {
  width: max-content;
}
.step-header-image {
  width: 140px;
  height: 140px;
}

.step-header-content {
  width: 1250px;
  height: 140px;
  padding: 20px;
  background: white;
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  gap: 10px;
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
