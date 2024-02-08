<!-- 레시피 가이드 해당 스텝 상세 컨텐츠, 액션을 포함하는 컴포넌트 -->
<template>
  <div class="stepper-content ">
    <StepInfos :recipe="recipe" :step="props.now_step" />
    <v-img class="stepper-main-gallery" src="@\assets\image\recipe\1\chadoldoenjangjjigae.jpg" />
    <StepIngredientsGallery :recipe="recipe" :step="props.now_step" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StepInfos from "@/components/recipe/guide/StepInfos.vue";
import StepIngredientsGallery from "@/components/recipe/guide/StepIngredientsGallery.vue";

const props = defineProps({
  recipe: Object,
  now_step: Object,
});


</script>
<style scoped>
.stepper-content {
  width: 100%;
  display: flex;
  flex-direction: row;

}
.stepper-main-gallery{
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 0 20px;
}
</style>