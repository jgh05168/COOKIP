<template>
  <div class="recipe-guide-container">
    <v-stepper v-model="selectedStep">
      <v-stepper-header class="grid grid-cols-3">
        <v-stepper-item
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
          :title="index"
          :value="index"
          :complete="guide.method <= selectedStep"
        >
        </v-stepper-item>
      </v-stepper-header>
      <v-stepper-content>
        <div
          class="recipe-guide"
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
        >
          <GuideHeaderVue
            class="recipe-guide-header"
            :recipe="recipe_steps"
            :guide="guide"
            :now_step="index + 1"
            v-if="index + 1 === selectedStep"
          />
          <GuideStepperVue
            class="recipe-guide-body"
            :recipe="recipe_steps"
            :guide="guide"
            :now_step="index + 1"
            v-if="index + 1 === selectedStep"
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
import { ref, onMounted } from "vue";
import { useGuideStore } from "@/store/guide";
import accountService from "@/store/mvpApi";
// import recipeStepsData from "@/store/recipeDemo.json";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";
// const recipe_steps = ref(recipeStepsData[0]);
const selectedStep = ref(1);

const guideStore = useGuideStore();
const recipe_steps = ref({})


onMounted(async () => {
  guideStore.now_recipe_info = await accountService.getUserRecipe_RecipeId(
    guideStore.now_recipe_id
  );
  guideStore.now_recipe_guide = await accountService.getUserStep_recipeId(
    guideStore.now_recipe_id
    );
    guideStore.now_recipe_ingredients =
    await accountService.getUserrecipe_ingredient_RecipeId(
      guideStore.now_recipe_id
      );
  guideStore.now_recipe_stepofstep =
    await accountService.getUserstepofstep_RecipeId(guideStore.now_recipe_id);

  guideStore.now.id = guideStore.now_recipe_id;
  guideStore.now.name = guideStore.now_recipe_info[0].name;
  guideStore.now.description = guideStore.now_recipe_info[0].description;
  guideStore.now.time = guideStore.now_recipe_info[0].time;
  guideStore.now.image = guideStore.now_recipe_info[0].thumbnail;
  guideStore.now.ingredients = guideStore.now_recipe_ingredients;
  guideStore.now.guide = guideStore.now_recipe_guide;

  recipe_steps.value = guideStore.now;

  console.log("나는가이드", guideStore.now); // 레시피 스텝
  console.log("나는 레시피 스텝", recipe_steps.value);
});

const disabled = () => {
  return selectedStep.value === 1
    ? "prev"
    : selectedStep.value === recipe_steps.value.guide.length
    ? "next"
    : undefined;
};

const prev = () => {
  if (selectedStep.value > 1) {
    selectedStep.value -= 1;
  }
};

const next = () => {
  if (selectedStep.value < recipe_steps.value.guide.length) {
    selectedStep.value += 1;
  }
};
</script>

<style scoped>
.recipe-guide {
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

.recipe-guide-header {
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
  height: 750px;
}
</style>
