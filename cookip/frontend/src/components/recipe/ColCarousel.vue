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
        <button @click="Flip_test">Flip_test</button>
        <FlipCard :flip="flip && slide == currentSlide" :recipe="recipe" />
      </div>
    </Slide>
  </Carousel>

  <!-- <div>
    <input type="number" min="0" max="3" v-model="currentSlide" />
  </div> -->
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import FlipCard from "./FlipCard.vue";
import { useMotionStore } from "@/store/motion";
import { useRecipeStore } from "@/store/recipe";
import router from "@/router";

const motionStore = useMotionStore();
const recipeStore = useRecipeStore();

const currentSlide = ref(0);

const colCarousel = ref(null);

const nextpage = () => {
  colCarousel.value.next();
};

const prevpage = () => {
  colCarousel.value.prev();
};

const flip = ref(false);

const Flip_test = () => {
  flip.value = !flip.value;
};

watch(currentSlide, (newVal) => {
  console.log("Current Col:", newVal);
  currentSlide.value = newVal;
});

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watch(
  () => motionStore.motion_data.swipe,
  (newSwipe) => {
    if (newSwipe !== null) {
      if (newSwipe == "SwipeUp") {
        nextpage();
      } else if (newSwipe == "SwipeDown") {
        prevpage();
      } else if (newSwipe == "SwipeLeft") {
        nextpage();
      } else if (newSwipe == "SwipeRight") {
        prevpage();
      }

      // 초기화
      motionStore.motion_data.swipe = null;
    }
  }
);

watch(
  () => motionStore.motion_data.page,
  (newPage) => {
    if (newPage !== null) {
      if (newPage == "PageIn") {
        router.push({
          name: "recipe-detail",
          params: { recipeid: props.recipeList[currentSlide.value] },
        });
      } else if (newPage == "PageOut") {
        router.push({ name: "home" });
      }

      // 초기화
      motionStore.motion_data.page = null;
    }
  }
);

watch(
  () => motionStore.motion_data.zoom,
  (newZoom) => {
    if (newZoom !== null) {
      let value = motionStore.motion_data.zoom;
      // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
      if (value == "ZoomIn") {
        flip.value = true;
      } else if (value == "ZoomOut") {
        flip.value = false;
      }
    }
  }
);

const props = defineProps({
  recipeList: Array,
  rowSlide: Number,
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
  transform-origin: 46% 48%;
  transform: scale(2.6);
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
