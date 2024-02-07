<template>
  <div class="recipe-guide-container">
    <v-stepper v-model="selectedStep">
      <v-stepper-header class="grid grid-cols-3">
        <v-stepper-item
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
          :title="guide.title"
          :value="guide.step"
          :complete="guide.step <= selectedStep"
        >
        </v-stepper-item>
      </v-stepper-header>
      <v-stepper-content>
      <v-divider></v-divider>
        <div class="recipe-guide" v-for="(guide, index) in recipe_steps.guide" :key="index">
          <GuideHeaderVue
            class="recipe-guide-header"
            :recipe="recipe_steps"
            :now_step="guide"
            v-if="guide.step === selectedStep"
          />
          <GuideStepperVue
            class="recipe-guide-body"
            :recipe="recipe_steps"
            :now_step="guide"
            v-if="guide.step === selectedStep"
          />
        </div>
      </v-stepper-content>
      <v-stepper-actions
        :disabled="disabled"
        @click:prev="prev"
        @click:next="next"
      ></v-stepper-actions>
    </v-stepper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRecipeStore } from "@/store/demoRecipe";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

// Get recipe information
const store = useRecipeStore();
const recipe_steps = store.recipe_steps[0];
const my_tmp = store.recipes;
const selectedStep = ref(1); // Default to the first step
console.log(recipe_steps);
console.log(my_tmp);
console.log(recipe_steps.guide[0]);
const disabled = () => {
  return selectedStep.value === 1
    ? "prev"
    : selectedStep.value === recipe_steps.length
    ? "next"
    : undefined;
};

const prev = () => {
  if (selectedStep.value > 1) {
    selectedStep.value -= 1;
  }
};

const next = () => {
  if (selectedStep.value < recipe_steps.length) {
    selectedStep.value += 1;
  }
};
</script>

<style scoped>
.recipe-guide{
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #534645;
}
.recipe-guide-container {
  width: 1920px;
  height: 1080px;
  gap: 30px;
  padding: 20px;
  background: #534645;
}

.recipe-guide-header{
  width: 99%;
  padding: 20px;
  background: #fdf8ec;
  border-radius: 0px 0px 50px 50px;
}
.recipe-guide-body {
  width: 99%;
  padding: 20px;
  background: #fdf8ec;
  border-radius: 50px 0px 0px 50px;
}

.recipe-guide-header {
  height: 165px;
}
.recipe-guide-body {
  height: 850px;
}
</style>
