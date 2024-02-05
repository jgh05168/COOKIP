<template>
  <v-stepper v-model="selectedStep">
    <v-stepper-header>
      <v-stepper-item
        v-for="(step, index) in props.recipeSteps"
        :key="index"
        :title="step.title"
        :value="index + 1"
        :complete="index + 1 <= selectedStep"
      ></v-stepper-item>
    </v-stepper-header>

    <v-stepper-content class="grid grid-cols-3">
      <template >
        <div v-for="(step, index) in recipeSteps" :key="index">
        <StepInfos :step="step" v-if="selectedStep === index + 1" />
        <StepImageGallery :step="step" v-if="selectedStep === index + 1" />
        <StepIngredientsGallery
          :step="step"
          v-if="selectedStep === index + 1"
        />
      </div>
      </template>
    </v-stepper-content>
    <v-stepper-actions
      :disabled="disabled"
      @click:prev="prev"
      @click:next="next"
    ></v-stepper-actions>
  </v-stepper>
</template>

<script setup>
import { defineProps, ref } from "vue";
import StepInfos from "./Stepper/StepInfos.vue";
import StepImageGallery from "./Stepper/StepImageGallery.vue";
import StepIngredientsGallery from "./Stepper/StepIngredientsGallery.vue";
const disabled = () => {
  return selectedStep.value === 1
    ? "prev"
    : selectedStep.value === props.recipeSteps.length
    ? "next"
    : undefined;
};

const prev = () => {
  if (selectedStep.value > 1) {
    selectedStep.value -= 1;
  }
};

const next = () => {
  if (selectedStep.value < props.recipeSteps.length) {
    selectedStep.value += 1;
  }
};

const props = defineProps({
  userInfos: Object,
  recipeSteps: Object,
});
const selectedStep = ref(1);
</script>

<style scoped>
.stepper-content {
  width: 100%;
}
</style>