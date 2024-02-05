<!-- 레시피 가이드 해당 스텝 상세 컨텐츠, 액션을 포함하는 컴포넌트 -->
<template>
  <div>
    <StepInfos :step="props.selectedStep" />
    <StepImageGallery :step="props.selectedStep"  />
    <StepIngredientsGallery :step="props.selectedStep" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StepInfos from "@/components/recipe/guide/StepInfos.vue";
import StepImageGallery from "@/components/recipe/guide/StepImageGallery.vue";
import StepIngredientsGallery from "@/components/recipe/guide/StepIngredientsGallery.vue";

const props = defineProps({
  selectedStep: Object,
});
</script>

<style scoped>
.stepper-content {
  width: 100%;
}
</style>