<template>
 <div class="max-w-sm rounded overflow-hidden">
  <img class="w-full" src="" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ props.recipeBack.name }}</div>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
  </div>
</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipeBack: Object,
});
</script>

<style scoped></style>
