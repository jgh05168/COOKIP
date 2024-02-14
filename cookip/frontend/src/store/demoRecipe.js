import { defineStore } from "pinia";
import accountService from "@/store/mvpApi";
import { ref } from "vue";
import recipeStepsData from "./recipeDemo.json";

export const useGuideStore = defineStore(
  "recipe",
  () => {
    const recipes = ref([]);
    const ingredients = ref([]);
    const user_ingredients = ref([]);

    const recipe_steps = ref(recipeStepsData);

    const recipeId = 27; // Replace with the actual recipe ID
    const recipeData = accountService.getUserStep_recipeId(recipeId);
    recipes.value = recipeData;

    return {
      recipes,
      ingredients,
      user_ingredients,
      recipe_steps,
    };
  },
  { persist: true }
);
