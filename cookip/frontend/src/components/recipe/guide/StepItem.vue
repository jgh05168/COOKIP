<template>
  <div class="stepofstep-item">
    <v-title>
      {{ props.stepofstep.description }}
    </v-title>
    <v-img
    :aspect-ratio="1/1"
      class="stepper-main-gallery"
      :src="props.stepofstep.image"
    />

  </div>
</template>

<script setup>
import { defineProps } from "vue";
// import { useGuideStore } from "@/store/guide";

const props = defineProps({
  stepofstep: Object,
});
</script>

<style scoped>
.stepofstep-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stepper-main-gallery {
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 0 20px;
}
</style>
