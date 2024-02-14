import { defineStore } from "pinia";
import { ref } from "vue";
import recipeStepsData from "./recipeDemo.json";

export const useGuideStore = defineStore(
    "guiderecipe",
    () => {
        const now_recipe_id = ref(1);
        const now_recipe_info = ref([]);
        const now_recipe_guide = ref([]);
        const now_recipe_ingredients = ref([]);
        const now_recipe_stepofstep = ref([]);

        const now = ref({
            id: null,
            name: null,
            image: null,
            description: null,
            time: null,
            ingredients: null,
            guide: null
        })

        const recipe_steps = ref(recipeStepsData);

        return {
            now_recipe_id,
            now_recipe_info,
            now_recipe_guide,
            now_recipe_ingredients,
            now_recipe_stepofstep,
            recipe_steps,
            now
        };
    },
    { persist: true }
);
