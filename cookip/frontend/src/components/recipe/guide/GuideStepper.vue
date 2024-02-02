<template>
  <v-stepper model-value="2">
    <v-stepper-header>
      <v-stepper-item
        title="Select campaign settings"
        value="1"
        complete
      ></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="Create an ad group" value="2"></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item title="Create an ad" value="3"></v-stepper-item>
    </v-stepper-header>
    <v-window model-value="2">
      <v-window-item value="2">
        <v-row>
          <StepInfosVue />
          <StepImageGalleryVue />
          <StepIngredientsGalleryVue />
        </v-row>
      </v-window-item>
    </v-window>
  </v-stepper>
</template>

<script setup>
// import { ref } from "vue";
import StepInfosVue from "./Stepper/StepInfos.vue";
import StepImageGalleryVue from "./Stepper/StepImageGallery.vue";
import StepIngredientsGalleryVue from "./Stepper/StepIngredientsGallery.vue";

// const recipe_steps = ref({
//   step: 1,
//   items: ["요리 준비하기", "재료 손질", "요리 마무리"],
//   ingredients: [
//     {
//       name: "감자",
//       unit: 10,
//       quantity: 2,
//       image: "@/assets/image/item_green.png",
//     },
//     {
//       name: "고구마",
//       unit: 15,
//       quantity: 10,
//       image: "@/assets/image/item_green.png",
//     },
//     {
//       name: "고구마",
//       unit: 15,
//       quantity: 10,
//       image: "@/assets/image/item_green.png",
//     },
//     {
//       name: "고구마",
//       unit: 15,
//       quantity: 10,
//       image: "@/assets/image/item_green.png",
//     },
//     {
//       name: "고구마",
//       unit: 15,
//       quantity: 10,
//       image: "@/assets/image/item_green.png",
//     },
//   ],
//   cookingTip: "",
// });
</script>


<style scoped>
</style>