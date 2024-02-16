<!-- StepInfo.vue -->
<template>
  <div class="step-info">
    <div class="step-number">
      <span>Step {{ props.nowStep }}.</span>
    </div>
    <div class="step-description">
      <span>{{ props.step.description }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  step: Object,
  nowStep: Number,
});
</script>

<style scoped>
.step-info {
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 60px;
  align-items: center;
  padding-bottom: 40px;
}                                        
.step-number {
  color: #2c1915;
  font-size: 50px;
}

.step-description {
  color: #3a211c;
  font-size: 30px;
  align-items: center;
}
</style>
