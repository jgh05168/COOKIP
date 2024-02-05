<template>
  <v-stepper v-model="selectedStep">
    <v-stepper-header>
      <v-stepper-item
        v-for="(guide, index) in recipe_steps.guide"
        :key="index"
        :title="guide.title"
        :value="guide.step"
        :complete="guide.step <= selectedStep"
      >
      </v-stepper-item>
        <GuideHeaderVue
          class="recipe-guide-header"
          :user-infos="user_infos"
          :selected-step="guide"
          v-if="guide.step === index + 1"
        />
    </v-stepper-header>
    <v-stepper-content class="grid grid-cols-3">
      <div v-for="(guide, index) in recipe_steps.guide" :key="index">
        <GuideStepperVue class="recipe-guide-body" :selected-step="guide" v-if="guide.step === selectedStep" />
      </div>
    </v-stepper-content>
    <v-stepper-actions
      :disabled="disabled"
      @click:prev="prev"
      @click:next="next"
    ></v-stepper-actions>
  </v-stepper>
</template>

<script setup>
import { ref } from "vue";
import { useRecipeStore } from "@/store/recipe";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

// Get recipe information
const store = useRecipeStore();
const recipe_steps = store.recipe_steps[0];
const selectedStep = ref(1); // Default to the first step

// Get user information
const user_infos = ref({
  userName: "임채진",
  userImage: "../../assets/image/임채진.png",
});

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
.recipe-guide-container {
  width: 1920px;
  height: 1080px;
  gap: 30px;
  padding: 20px;
  background: #534645;
}

.recipe-guide-header,
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
