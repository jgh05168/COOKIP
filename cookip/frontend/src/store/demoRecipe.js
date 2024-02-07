import { defineStore } from "pinia";
import accountService from "@/store/mvpApi";
import { ref, onBeforeMount } from "vue";    
import recipeStepsData from './recipeDemo.json';

export const useRecipeStore = defineStore(
  "recipe",
  () => {
    const recipes = ref([]);
    const recipe_steps = ref(recipeStepsData);
    const error = ref("");

    onBeforeMount(async () => {
      try {
        const recipeId = 27; // Replace with the actual recipe ID
        const recipeData = await accountService.getUserStep_recipeId(recipeId);
        recipes.value = recipeData;
      } catch (err) {
        error.value = err.message;
      }
    });

    return { recipes, recipe_steps };
  },
  { persist: true }
);