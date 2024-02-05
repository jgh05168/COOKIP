import { defineStore } from "pinia";
// import { ref, computed } from 'vue'
// import axios from 'axios'
import accountService from "@/store/mvpApi";
import { ref, onBeforeMount } from "vue";    
import recipeStepsData from './recipeDemo.json';


export const useRecipeStore = defineStore(
  "recipe",
  () => {
    const recipes = ref([]);
    const error = ref("");

    const recipe_steps = ref(recipeStepsData);

    onBeforeMount(async () => {
      try {
        const recipeData = await accountService.getUserRecipe();
        recipes.value = recipeData;
      } catch (err) {
        error.value = err.message;
      }
    });

    return { recipes, recipe_steps };
  },
  { persist: true }
);
