<template>
    <div class="preview-list grid grid-cols-3">

    <div v-for="(recipe, index) in recipes.slice(parseInt(selectedRecipeName), parseInt(selectedRecipeName)+6)" :key="index">
      <h2>{{ recipe.name }}</h2>
      <img :src="getBufferImage(recipe.thumbnail)" alt="Recipe Thumbnail" />
    </div>

    
    </div>
</template>

<script setup>
import { ref,watch,onMounted,inject } from 'vue'; // import reactive and onMounted from vue
import accountService from '@/store/mvpApi';

const recipes = ref([]);
const error = ref("");
const selectedRecipeName = inject('selectedRecipeName',ref(''));

if(selectedRecipeName.value==undefined){
  selectedRecipeName.value=0;
}

watch(() => selectedRecipeName.value, (newVal) => {
  console.log('Selected Recipe Name Changed_reciv:', newVal);
  // 여기서 변경된 값에 대한 로직을 추가할 수 있습니다.
});

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
.preview-list {
  text-align: center;
}
</style>
