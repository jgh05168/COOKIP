<template>
  <v-col class="recipe-guide-container">
    <div class="recipe-guide-header">
      <GuideHeaderVue />
    </div>

    <div class="recipe-guide-body">
      <GuideStepperVue />
    </div>
  </v-col>
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
  padding:  20px;
  background: #534645;
}

.recipe-guide-header,
.recipe-guide-body {
  width: 99%;
  padding: 20px;
  background: #fdf8ec;
  border-radius: 50px 0px 0px 50px;

}

.recipe-guide-header {
  height: 165px;
}
.recipe-guide-body {
  height: 850px;
  }
</style>
