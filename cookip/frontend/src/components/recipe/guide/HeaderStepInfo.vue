<!-- StepInfo.vue -->
<template>
  <div class="step-info">
    <div class="step-number">Step {{ props.nowStep }}.</div>
    <div class="step-description">{{ props.step.description }}</div>
  </div>
</template>
  
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  step: Object,
  nowStep: Number,
});
</script>
