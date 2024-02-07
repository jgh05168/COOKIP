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
import { ref } from "vue";
import { useGuideStore } from "@/store/guide";
import accountService from "@/store/mvpApi";
import recipeStepsData from "@/store/recipeDemo.json";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";
const recipe_steps = ref(recipeStepsData[0]);
const selectedStep = ref(1);

const error = ref("");
const raw_recipes = useGuideStore();
const recipeId = 27; // Replace with the actual recipe ID


const get_now_recipes = async () => {
  try {
    const recipeData = await accountService.getUserRecipe_RecipeId(recipeId);
    recipeData.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.cnow(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    raw_recipes.recipes = recipeData;
  } catch (err) {
    error.value = err.message;
  }
};

const get_now_ingredients = async () => {
  try {
    const now_ingredients = await accountService.getUseringredient_IngredientId(
      recipeId
    );
    raw_recipes.ingredients = now_ingredients;
  } catch (err) {
    error.value = err.message;
  }
};

const get_now_recipes_ingredients = async () => {
  try {
    const recipe_ingredientData =
      await accountService.getUserrecipe_ingredient_RecipeId(recipeId);
    recipe_ingredientData.forEach((ingredient) => {
      const matchingRecipe = raw_recipes.recipes.find(
        (recipe) => recipe.recipe_id === ingredient.recipe_id
      );
      matchingRecipe.ingredient.push(ingredient.ingredient_id);
    });
  } catch (err) {
    error.value = err.message;
  }
};

await get_now_recipes();
await get_now_recipes_ingredients();
await get_now_ingredients();
console.log(raw_recipes);


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
  height: 850px;
}
</style>
