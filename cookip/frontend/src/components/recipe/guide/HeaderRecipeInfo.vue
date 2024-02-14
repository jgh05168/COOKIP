<!-- RecipeInfo.vue -->
<template>
  <div class="time-info">
    <div class="recipe-info">
      <div class="recipe-name">{{ props.recipe.name }}</div>
      <div class="recipe-status">만드는 중...</div>
    </div>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";
const props = defineProps({
  recipe: Object,
});
</script>