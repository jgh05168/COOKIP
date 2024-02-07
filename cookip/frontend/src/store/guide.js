import { defineStore } from "pinia";
import { ref } from "vue";
// import axios from 'axios'

export const useGuideStore = defineStore(
  "recipe",
  () => {
    const recipes = ref([]); // 모든 레시피 데이터
    const ingredients = ref([]);
    const user_ingredients = ref([]);


    return {
      recipes,
      ingredients,
      user_ingredients,
    };
  },
  { persist: true }
);
