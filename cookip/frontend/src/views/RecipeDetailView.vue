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
        <div
          class="recipe-guide"
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
        >
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
import { ref, onMounted } from "vue";
import { useGuideStore } from "@/store/guide";
import accountService from "@/store/mvpApi";
// import recipeStepsData from "@/store/recipeDemo.json";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";
// const recipe_steps = ref(recipeStepsData[0]);
const selectedStep = ref(1);

const guideStore = useGuideStore();
const recipe_steps = ref({});
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

  guideStore.my.id = guideStore.now_recipe_id;
  guideStore.my.name = guideStore.now_recipe_info[0].name;
  guideStore.my.description = guideStore.now_recipe_info[0].description;
  guideStore.my.time = guideStore.now_recipe_info[0].time;
  guideStore.my.image = guideStore.now_recipe_info[0].thumbnail;
  guideStore.my.ingredients = guideStore.now_recipe_ingredients;
  guideStore.my.guide = guideStore.now_recipe_guide;

  recipe_steps.value = guideStore.my;

  console.log(guideStore.my); // 레시피 스텝
  console.log(recipe_steps);
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
