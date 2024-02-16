<template>

    <v-img class="stepper-main-gallery" :src="props.step.step_image" />

</template>
  
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipe: Object,
  step: Object,
});
</script>
  
<style scoped>
.stepper-main-gallery {
  height: 400px;
}
</style>
   