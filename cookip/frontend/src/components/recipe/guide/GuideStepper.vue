<!-- 레시피 가이드 해당 스텝 상세 컨텐츠, 액션을 포함하는 컴포넌트 -->
<template>
  <div class="stepper-content">
    <div v-if="props.nowStep === 0">
      <RecipeStart :ingredient="GS.now_recipe_ingredients" />
    </div>
    <div v-else>
      <Carousel
        ref="stepCarousel"
        v-model="currentSlide"
        :transition="400"
        class="vertical-carousel"
      >
        <Slide
          class="vertical-carousel-slide carousel__viewport"
          v-for="(stepofstep, slide) in props.step.steps_of_step"
          :key="slide"
        >
          <div class="step-of-step">
            <StepOfStep
              :stepofstep="stepofstep"
              :now-step="nowStep"
              :now-stepofstep="slide"
            />
          </div>
        </Slide>
      </Carousel>
      <button @click="nextstep">nextstep</button>|
      <button @click="prevstep">prevstep</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useGuideStore } from "@/store/guide";
import StepOfStep from "@/components/recipe/guide/StepOfStep.vue";
import RecipeStart from "./RecipeStart.vue";
import { useMotionStore } from "@/store/motion";

const props = defineProps({
  step: Object,
  nowStep: Number,
  next: Function,
  prev: Function,
});

const motionStore = useMotionStore();

const GS = useGuideStore();

const currentSlide = ref(0);

const stepCarousel = ref(null);

const nextstep = () => {
  if (stepCarousel.value !== null) {
    stepCarousel.value.next();
  }
};

const prevstep = () => {
  if (stepCarousel.value !== null) {
    stepCarousel.value.prev();
  }
};

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watch(
  () => motionStore.motion_data,
  (newMotion) => {
    if (newMotion.swipe !== null) {
      if (newMotion.swipe == "SwipeUp") {
        nextstep();
      } else if (newMotion.swipe == "SwipeDown") {
        prevstep();
      } else if (newMotion.swipe == "SwipeLeft") {
        props.next();
      } else if (newMotion.swipe == "SwipeRight") {
        props.prev();
      }
      newMotion.swipe = null;
    }
  }
);
</script>
<style scoped>
.vertical-carousel {
  width: 1800px;
  height: 750px;
  margin: 0;
}

.vertical-carousel-slide {
  /* transform: rotate(-0.25turn); */
  width: 100%;
  height: 100%;
}

.carousel__viewport {
  width: 100%;
  height: 100%;
}

.vertical-carousel-slide {
  width: 100%;
  height: 100%;
}

.step-of-step {
  width: 1800px;
  height: 750px;
}
</style>
