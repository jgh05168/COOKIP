<!-- StepInfo.vue -->
<template>
  <div class="step-info">
    <div class="step-number">Step {{ props.step }}.</div>
    <div class="step-description">{{ props.title }}</div>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";
const props = defineProps({
  step: Number,
  title: String,
});
</script>