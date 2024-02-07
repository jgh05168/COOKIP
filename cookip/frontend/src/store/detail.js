import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'
// import axios from 'axios'
import { ref } from "vue";

export const useDetailStore = defineStore('detail', () => {

    const recipes_step = ref([]);
    const recipe_stepofstep = ref([]);

    return { recipes_step, recipe_stepofstep }
  }, { persist: true })