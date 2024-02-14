<template>
  <Carousel
    v-model="currentSlide"
    ref="fCarousel"
    :itemsToShow="5"
    :wrapAround="true"
    :transition="500"
    style="height: 100%"
  >
    <Slide v-for="recipe in props.recipeList" :key="recipe">
      <div>
        <p>{{ recipe.name }}</p>
      </div>
    </Slide>
  </Carousel>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";
import { Carousel, Slide } from "vue3-carousel";
// import { useMotionStore } from "@/store/motion";
// import router from "@/router";
// import { useFavoriteStore } from "@/store/favorite";

const props = defineProps({
  recipeList: Array,
});
// const motionStore = useMotionStore();
// const favoriteStore = useFavoriteStore();

const next = () => {
  fCarousel.value.next();
};

const prev = () => {
  fCarousel.value.prev();
};

const currentSlide = ref(0);

const fCarousel = ref(null);

watch(currentSlide, (newVal) => {
  console.log("Current Col:", newVal);
  currentSlide.value = newVal;
});

// watchEffect(() => {
//   console.log(motionStore.motion_data);
//   if (motionStore.motion_data.swipe !== null) {
//     if (motionStore.motion_data.swipe == "SwipeUp") {
//       // 다음 멤버로

//     } else if (motionStore.motion_data.swipe == "SwipeDown") {
//       // 이전 멤버로

//     } else if (motionStore.motion_data.swipe == "SwipeLeft") {
//       next(); // 다음 레시피
//     } else if (motionStore.motion_data.swipe == "SwipeRight") {
//       prev(); // 이전 레시피
//     }
//   } else if (motionStore.motion_data.page !== null) {
//     if (motionStore.motion_data.page == "PageIn") {
//       router.push({
//         name: "recipe-detail",
//         params: { recipeid: currentSlide.value }, // 현재 가리키는 slide 의 해당하는 레시피의 디테일 페이지로 가기
//       });
//     } else if (motionStore.motion_data.page == "PageOut") {
//       router.push({ name: "home" });
//     }
//   }
//   // 초기화
//   motionStore.motion_data = {
//     swipe: null,
//     page: null,
//     rating: null,
//     zoom: null,
//     flip: null,
//   };
// });
</script>

<style scoped></style>
