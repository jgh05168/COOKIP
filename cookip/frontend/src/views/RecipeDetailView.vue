<template>
  <v-col class="recipe-guide-container">
    <h1>dd</h1>
    <GuideHeaderVue class="recipe-guide-header" :user-infos="user_infos" :recipe-steps="recipe_steps" />
    <GuideStepperVue class="recipe-guide-body" :user-infos="user_infos" :recipe-steps="recipe_steps" />
  </v-col>
</template> 

<script setup>
import { ref } from "vue";
import { useRecipeStore } from "@/store/recipe";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";

// 유저 정보를 가져오는 부분
const user_infos = ref({
  userName: "임채진",
  userImage: "../../assets/image/임채진.png",
  recipeName: "감자고구마볶음",
});

// 레시피 정보를 가져오는 부분
const store = useRecipeStore();
const recipe_steps = store.recipe_steps;
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
