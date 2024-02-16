<template>
  <div class="recipe-guide-container">
    <v-stepper class="guide-stepper" v-model="selectedStep">
      <!-- stepper 헤더 -->
      <v-stepper-header class="grid grid-cols-3">
        <v-stepper-item
          v-for="(step, idx) in GS.now_recipe_step"
          :key="idx"
          :title="idx"
          :value="idx"
        >
        </v-stepper-item>
      </v-stepper-header>

      <!-- 스텝 별 내용 -->
      <v-stepper-content>
        <div
          class="recipe-guide"
          v-for="(step, idx) in GS.now_recipe_step"
          :key="idx"
        >
          <!-- 각 스텝의 가이드 별 헤더 -->
          <GuideHeaderVue
            class="recipe-guide-header"
            :step="step"
            :now-step="idx"
            v-if="idx === selectedStep"
          />
          <!-- 각 스텝의 가이드 별 내용 -->
          <GuideStepperVue
            class="recipe-guide-body"
            :step="step"
            :now-step="idx"
            :next="next"
            :prev="prev"
            v-if="idx === selectedStep"
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
import { ref, onBeforeMount } from "vue";
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

const selectedStep = ref(0);

const GS = useGuideStore();

onBeforeMount(async () => {
  // 디테일 페이지로 들어올 때 사용하는 recipe_id 값을 params 값을 이용해서 받기

  GS.now_recipe_id = router.currentRoute.value.params.recipe_id;
  // console.log(now_recipe_id.value);
  now_recipe_id.value = GS.now_recipe_id;

  // // 레시피 step 가져오기
  // GS.now_recipe_guide = await accountService.getUserStep_recipeId(
  //   now_recipe_id.value
  // );
  console.log(recipeData[1]);
  GS.now_recipe_step = recipeData[1].guide;

  // // 레시피 재료 가져오기
  // GS.now_recipe_ingredients =
  //   await accountService.getUserrecipe_ingredient_RecipeId(now_recipe_id.value);

  // 재료 정보  객체화 하기
  let ingredientObject = {};

  for (const ingredient of recipeData[1].ingredients) {
    ingredientObject[ingredient.id] = ingredient;
  }
  console.log(ingredientObject);
  GS.now_recipe_ingredients = ingredientObject;
  // 도구 재료 정보화 하기
  let utencilsObject = {};

  for (const utencil of recipeData[1].utencils) {
    utencilsObject[utencil.id] = utencil;
  }
  GS.now_recipe_utencils = utencilsObject;

  // // 레시피 스텝 오브 스텝 가져오기
  // GS.now_recipe_stepofstep =
  //   await accountService.getUserstepofstep_RecipeId(now_recipe_id.value);
  GS.now_recipe_info.name = recipeData[1].name;
  GS.now_recipe_info.image = recipeData[1].image;
  GS.now_recipe_info.level = recipeData[1].level;
  GS.now_recipe_info.time = recipeData[1].time;
  GS.now_recipe_info.description = recipeData[1].description;
});

const disabled = () => {
  return selectedStep.value === 1
    ? "prev"
    : selectedStep.value === GS.now_recipe_step.length
    ? "next"
    : undefined;
};

const prev = () => {
  if (selectedStep.value > 0) {
    selectedStep.value -= 1;
  }
};

const next = () => {
  if (selectedStep.value < GS.now_recipe_step.length) {
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

.guide-stepper {
  width: 100%;
  height: 100%;
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
  border-radius: 50px;
}

.recipe-guide-header {
  height: 165px;
}
.recipe-guide-body {
  height: 730px;
}
</style>
