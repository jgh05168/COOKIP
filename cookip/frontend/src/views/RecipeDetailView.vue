<template>
  <v-col class="recipe-guide-container">
    <GuideHeaderVue class="recipe-guide-header" :user-infos="user_infos" :recipe-steps="recipe_steps" />
    <GuideStepperVue class="recipe-guide-body" :user-infos="user_infos" :recipe-steps="recipe_steps" />
  </v-col>
</template> 

<script setup>
import { ref } from "vue";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

const user_infos = ref({
  userName: "임채진",
  userImage: "../../assets/image/임채진.png",
  recipeName: "감자고구마볶음",
});
const recipe_steps = ref([
  {
    step: 1,
    title: "재료 준비하기",
    ingredients: [
      {
        id: 1,
        name: "감자",
        unit: 10,
        quantity: 2,
        image: "@/assets/image/item_pepper.png",
      },
      {
        id: 2,
        name: "고구마",
        unit: 15,
        quantity: 50,
        image: "@/assets/image/item_pepper.png",
      },
      {
        id: 3,
        name: "양파",
        unit: 5,
        quantity: 3,
        image: "@/assets/image/item_pepper.png",
      },
      {
        id: 4,
        name: "당근",
        unit: 8,
        quantity: 1,
        image: "@/assets/image/item_pepper.png",
      },
    ],
  },
  {
    step: 2,
    title: "요리 준비하기",
    ingredients: [
      {
        id: 1,
        name: "감자",
        unit: 10,
        quantity: 2,
        image: "@/assets/image/item_green.png",
      },
      {
        id: 2,
        name: "고구마",
        unit: 15,
        quantity: 50,
        image: "@/assets/image/item_green.png",
      },
      {
        id: 3,
        name: "양파",
        unit: 5,
        quantity: 3,
        image: "@/assets/image/item_yellow.png",
      },
      {
        id: 4,
        name: "당근",
        unit: 8,
        quantity: 1,
        image: "@/assets/image/item_orange.png",
      },
    ],
  },
  {
    step: 5,
    title: "요리 준비하기",
    ingredients: [
      {
        id: 1,
        name: "감자",
        unit: 10,
        quantity: 2,
        image: "../../assets/image/item_green.png",
      },
      {
        id: 2,
        name: "고구마",
        unit: 15,
        quantity: 50,
        image: "@/assets/image/item_green.png",
      },
      {
        id: 3,
        name: "양파",
        unit: 5,
        quantity: 3,
        image: "@/assets/image/item_yellow.png",
      },
      {
        id: 4,
        name: "당근",
        unit: 8,
        quantity: 1,
        image: "@/assets/image/item_orange.png",
      },
    ],
  },
]);
</script>

<style scoped>
.recipe-guide-container {
  width: 1920px;
  height: 1080px;
  gap: 30px;
  padding: 20px;
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
