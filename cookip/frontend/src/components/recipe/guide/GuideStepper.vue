<!-- 레시피 가이드 해당 스텝 상세 컨텐츠, 액션을 포함하는 컴포넌트 -->
<template>
  <div class="stepper-content">
    <Carousel
      ref="stepCarousel"
      :itemsToShow="1"
      v-model="currentSlide"
      :wrap-around="true"
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
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Carousel, Slide } from "vue3-carousel";
// import { useGuideStore } from "@/store/guide";
import StepOfStep from "@/components/recipe/guide/StepOfStep.vue";

const props = defineProps({
  step: Object,
  nowStep: Number,
});

const currentSlide = ref(0);

const stepCarousel = ref(null);

const nextstep = () => {
  stepCarousel.value.next();
};

const prevstep = () => {
  stepCarousel.value.prev();
};
</script>
<style scoped>
.vertical-carousel {
  transform: rotate(0.25turn);
  width: 1080px;
  height: 100%;
  margin: auto auto;
}

.vertical-carousel-slide {
  /* transform: rotate(-0.25turn); */
  width: 100%;
  height: 1080px;
}

.carousel__viewport {
  height: 1080px;
}

.vertical-carousel-slide {
  width: 360px !important;
}

.step-of-step {
  transform: rotate(-0.25turn);
}
</style>
