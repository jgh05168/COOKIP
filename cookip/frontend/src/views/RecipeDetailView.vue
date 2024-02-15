<template>
  <div class="recipe-guide-container">
    <v-stepper v-model="selectedStep">
      <!-- stepper 헤더 -->
      <v-stepper-header class="grid grid-cols-3">
        <v-stepper-item
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
          :title="index"
          :value="index"
          :complete="guide.method <= selectedStep"
        >
        </v-stepper-item>
      </v-stepper-header>

      <!-- 스텝 별 내용 -->
      <v-stepper-content>
        <div
          class="recipe-guide"
          v-for="(guide, index) in recipe_steps.guide"
          :key="index"
        >
          <!-- 각 스텝의 가이드 별 헤더 -->
          <GuideHeaderVue
            class="recipe-guide-header"
            :recipe="recipe_steps"
            :guide="guide"
            :now_step="index + 1"
            v-if="index + 1 === selectedStep"
          />
          <!-- 각 스텝의 가이드 별 내용 -->
          <GuideStepperVue
            class="recipe-guide-body"
            :recipe="recipe_steps"
            :guide="guide"
            :now_step="index + 1"
            v-if="index + 1 === selectedStep"
          />
        </div>
      </v-stepper-content>

      <!-- 각 스텝 별 actions -->
      <v-stepper-actions
        :disabled="disabled"
        @click:prev="prev"
        @click:next="next"
      ></v-stepper-actions>
    </v-stepper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGuideStore } from "@/store/guide";
// import accountService from "@/store/mvpApi";
import recipeData from "@/store/recipeDemo.json";
import GuideHeaderVue from "@/components/recipe/guide/GuideHeader.vue";
import GuideStepperVue from "@/components/recipe/guide/GuideStepper.vue";
import { useRouter } from "vue-router";

// useRouter를 사용하여 라우터 인스턴스를 가져옴
const router = useRouter();

// 현재 레시피 정보 저장
const now_recipe_id = ref({});

// const recipe_steps = ref(recipeStepsData[0]);

const selectedStep = ref(1);

const guideStore = useGuideStore();
const recipe_steps = ref({});

onMounted(async () => {
  // 디테일 페이지로 들어올 때 사용하는 recipe_id 값을 params 값을 이용해서 받기

  guideStore.now_recipe_id = router.currentRoute.value.params.recipe_id;
  // console.log(now_recipe_id.value);
  now_recipe_id.value = guideStore.now_recipe_id;

  // // 레시피 step 가져오기
  // guideStore.now_recipe_guide = await accountService.getUserStep_recipeId(
  //   now_recipe_id.value
  // );
  console.log(recipeData[1]);
  guideStore.now_recipe_guide = recipeData[1].guide;

  // // 레시피 재료 가져오기
  // guideStore.now_recipe_ingredients =
  //   await accountService.getUserrecipe_ingredient_RecipeId(now_recipe_id.value);
  guideStore.now_recipe_ingredients = recipeData[1].ingredients;

  // // 레시피 스텝 오브 스텝 가져오기
  // guideStore.now_recipe_stepofstep =
  //   await accountService.getUserstepofstep_RecipeId(now_recipe_id.value);


  guideStore.now.id = guideStore.now_recipe_id;
  guideStore.now.name = guideStore.now_recipe_info[0].name;
  guideStore.now.description = guideStore.now_recipe_info[0].description;
  guideStore.now.time = guideStore.now_recipe_info[0].time;
  guideStore.now.image = guideStore.now_recipe_info[0].thumbnail;
  guideStore.now.ingredients = guideStore.now_recipe_ingredients;
  guideStore.now.guide = guideStore.now_recipe_guide;

  recipe_steps.value = guideStore.now;

  console.log("나는가이드", guideStore.now); // 레시피 스텝
  console.log("나는 레시피 스텝", recipe_steps.value);
});

const disabled = () => {
  return selectedStep.value === 1
    ? "prev"
    : selectedStep.value === recipe_steps.value.guide.length
    ? "next"
    : undefined;
};

const prev = () => {
  if (selectedStep.value > 1) {
    selectedStep.value -= 1;
  }
};

const next = () => {
  if (selectedStep.value < recipe_steps.value.guide.length) {
    selectedStep.value += 1;
  }
};
</script>

<style scoped>
.recipe-guide {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #534645;
}
.recipe-guide-container {
  width: 1920px;
  height: 1080px;
  gap: 30px;
  padding: 20px;
  background: #534645;
}

.recipe-guide-header {
  width: 99%;
  padding: 20px;
  background: #fdf8ec;
  border-radius: 0px 0px 50px 50px;
}
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
  height: 750px;
}
</style>
