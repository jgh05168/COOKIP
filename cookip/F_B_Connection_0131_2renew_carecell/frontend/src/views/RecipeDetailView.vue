<template>
  <div class="container">
    <h1>RecipeData:</h1>
    <hr />
    <p v-if="error" class="error">{{ error }}</p>
    <div v-for="(recipe, index) in recipes" :key="index" class="recipes">
      <h2>{{ recipe.Name }}</h2>
      <img :src="getBufferImage(recipe.Thumbnail)" alt="Recipe Thumbnail" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // import reactive and onMounted from vue
import accountService from '../AllGet';

const recipes = ref([]);
const error = ref("");

onMounted(async () => {
  try {
    const recipeData = await accountService.getUserRecipe();
    console.log(recipeData);
    recipes.value = recipeData;
  } catch (err) {
    error.value = err.message;
  }
});

const getBufferImage = (buffer) => {
  if (buffer && buffer.data instanceof Array) {
    const uint8Array = new Uint8Array(buffer.data);
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  }
  return null;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>