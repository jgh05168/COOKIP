<!-- RecipeInfo.vue -->
<template>
  <div class="time-info">
    <div class="recipe-info">
      <div class="recipe-name">{{ props.info.name }} 만드는 중...</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  info: Object,
});
</script>

<style scoped>
.recipe-info {
  display: flex;
  flex-direction: row;
}

.recipe-name {
  font-weight: bold;
  font-size: 20px;
}

.recipe-status {
}
</style>
