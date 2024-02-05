import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'
// import axios from 'axios'
import { ref } from "vue";

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([]);
    return { recipes }
  }, { persist: true })
  