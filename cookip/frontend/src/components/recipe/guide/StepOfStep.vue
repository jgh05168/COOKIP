<!-- 레시피 가이드 해당 스텝 상세 컨텐츠, 액션을 포함하는 컴포넌트 -->
<template>
  <div class="stepofstep">
    <div>
      <StepInfos
        :stepofstep="props.stepofstep"
        :now-step="props.nowStep"
        :now-stepofstep="props.nowStepofstep"
      />
    </div>
    <div>
      <StepItem :stepofstep="props.stepofstep" />
    </div>

    <!-- <StepIngredientsGallery :stepofstep="props.stepofstep" :now-step="props.nowStep" :now-stepofstep="props.nowStepofstep" /> -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StepInfos from "@/components/recipe/guide/StepInfos.vue";
// import StepIngredientsGallery from "@/components/recipe/guide/StepIngredientsGallery.vue";
import StepItem from "@/components/recipe/guide/StepItem.vue";

const props = defineProps({
  stepofstep: Object,
  nowStep: Number,
  nowStepofstep: Number,
});
</script>

<style scoped>
.stepofstep {
  height: 750px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
