<!-- StepInfo.vue -->
<template>
  <div class="step-info">
    <div class="step-number">Step {{ props.step.step }}.</div>
    <div class="step-description">{{ props.step.title }}</div>
  </div>
</template>
  
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  recipe: Object,
  step: Object,
});
</script>