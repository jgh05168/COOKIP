<template>
  <v-container class="recipe-guide-container">
    <div class="recipe-guide-header">
      <GuideHeaderVue />
    </div>

    <div class="recipe-guide-body">
      <GuideStepperVue />
    </div>
  </v-container>
</template>

<script setup>
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

</script>

<style scoped>
.recipe-guide-container {
  width: 1920px;
  height: 1080px;
  gap: 30px;
  padding: 30px;
  background: #534645;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.recipe-guide-header,
.recipe-guide-body {
  width: 99%;
  padding: 20px;
  background: #fdf8ec;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
}

.recipe-guide-header {
  height: 165px;
}
.recipe-guide-body {
  height: 825px;
  }
</style>
