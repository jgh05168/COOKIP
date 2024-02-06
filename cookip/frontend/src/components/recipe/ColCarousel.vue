<template>
  <Carousel
    v-model="currentSlide"
    :items-to-show="3"
    :wrap-around="true"
    ref="colCarousel"
    :transition="400"
    class="vertical-carousel"
  >
    <Slide
      class="vertical-carousel-slide carousel__viewport"
      :class="{
        'active-slide':
          props.rowSlide == recipeStore.currentRowSlide &&
          slide == currentSlide,
        'deactive-slide': slide !== currentSlide,
      }"
      v-for="(recipe, slide) in props.recipeList"
      :key="slide"
    >
      <div class="flip-card">
        <FlipCard :recipe="recipe" />
      </div>
    </Slide>
  </Carousel>

  <!-- <div>
    <input type="number" min="0" max="3" v-model="currentSlide" />
  </div> -->
</template>

<script setup>
import { ref, defineProps, watchEffect, watch } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import FlipCard from "./FlipCard.vue";
import { useMotionStore } from "@/store/motion";
import { useRecipeStore } from "@/store/recipe";

const motionStore = useMotionStore();
const recipeStore = useRecipeStore();

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect(motionStore.motion_data, () => {
  if (motionStore.motion_data.swipe !== null) {
    let value = motionStore.motion_data.swipe;
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    if (value == "SwipeLeft") {
      nextpage();
    } else if (value == "SwipeRight") {
      prevpage();
    }
  }
  // 초기화
  motionStore.motion_data = {
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  };
});

const props = defineProps({
  recipeList: Array,
  rowSlide: Number,
});

console.log(props.rowSlide, recipeStore.currentRowSlide);

const currentSlide = ref(0);

const colCarousel = ref(null);

const nextpage = () => {
  colCarousel.value.next();
};

const prevpage = () => {
  colCarousel.value.prev();
};

watch(currentSlide, (newVal) => {
  console.log("Current Col:", newVal);
  currentSlide.value = newVal;
});
</script>

<style scoped>
.vertical-carousel {
  transform: rotate(0.25turn);
  width: 1080px;
  height: 100%;
  margin: auto auto;
}

.carousel__viewport {
  height: 1080px;
}

.vertical-carousel-slide {
  width: 360px !important;
}

.carousel__track {
}

.active-slide {
  transition: transform 0.5s ease-out;
  transform-origin: 50% 50%;
  transform: scale(2.2);
  z-index: 2;
}

.deactive-slide {
  opacity: 0.7;
}

.flip-card {
  transform: rotate(-0.25turn);
  width: 480px;
  height: 270px;
}
</style>
