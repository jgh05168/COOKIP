import { defineStore } from "pinia";
import { ref } from "vue";
import recipeStepsData from "./recipeDemo.json";

export const useGuideStore = defineStore(
    "guiderecipe",
    () => {
        const now_recipe_id = ref(27);
        const now_recipe_info = ref([]);
        const now_recipe_guide = ref([]);
        const now_recipe_ingredients = ref([]);
        const now_recipe_stepofstep = ref([]);

        const id = ref();
        const name =  ref("");
        const image = ref("");
        const description = ref("");
        const time = ref();
        const ingredients = ref([]);
        const guide = ref([]);

        const recipe_steps = ref(recipeStepsData);

        return {
            now_recipe_id,
            now_recipe_info,
            now_recipe_guide,
            now_recipe_ingredients,
            now_recipe_stepofstep,
            recipe_steps,
            my: {id, name, image, description, time, ingredients, guide}
        };
    },
    { persist: true }
);
