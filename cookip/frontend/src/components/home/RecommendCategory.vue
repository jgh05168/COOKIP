<template>
  <Carousel
    v-model="currentSlide"
    ref="rowCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    class="category-carousel"
  >
    <Slide v-for="(category, slide) in recommend_category" :key="slide">
      <div class="category" @click="selectCategory(slide)">
        <div>{{ category.title }}</div>
        {{ category.img }}
        <div>
          <img :src="`@/assets/image/${category.img}`" alt="" />
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <div>
    <button @click="nextpage()">Next</button>
    <input type="number" min="0" max="5" v-model="currentSlide" />
    <button @click="prevpage()">Prev</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  <RecommendPreview :selected-slide="selectedSlide" />
</template>

<script setup>
import RecommendPreview from "./RecommendPreview.vue";
import { ref, watch } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useMotionStore } from "@/store/motion";
import { useRecipeStore } from "@/store/recipe";
import { watchEffect } from "vue";
import router from "@/router";

const motionStore = useMotionStore();

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect( () => {
  if (motionStore.motion_data.swipe !== null) {
    let value = motionStore.motion_data.swipe;
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    if (value == "SwipeLeft") {
      nextpage();
    } else if (value == "SwipeRight") {
      prevpage();
    }
    else if (value == "SwipeDown") {
      motionStore.transition_dir = "slide-down"
      router.push({name:"recipe" ,params : {}, query:{}})
    } else if (value == "SwipeUp") {
      motionStore.transition_dir = "slide-up"
      router.push({name:"my-favorite" ,params : {}, query:{}})
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

const currentSlide = ref(0); // 초기 슬라이드 인덱스 설정

watch(currentSlide, (newVal) => {
  console.log("Current Slide Changed:", newVal);
  selectedSlide.value = newVal;
  recipeStore.selected_category = newVal;
});

const rowCarousel = ref(null);
const error = ref("");

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};

const recipeStore = useRecipeStore();
const recommend_category = recipeStore.recommend_category;

// 고려 인자

// 1.보유식자재 + 유통기한

// 2.쉐프팔로우

// 3.선호카테고리, 재료

// 4.평점

// 5.알러지

// 오늘의 추천 -> 무작위
// 인기추천 -> 평점,~
// 즐겨찾기는 -> 즐겨찾기 한거
// 맞춤추천

const selectedSlide = ref(0);

const selectCategory = (slide) => {
  // 클릭한 카테고리의 정보를 가져오기
  const selectedCategory = recommend_category[slide];
  console.log("Selected Category:", selectedCategory);
};
</script>

<style scoped>
.category-carousel {
  height: 300px;
}

.category {
  height: 200px;
  width: 400px;
  color: aliceblue;
  border: 2px solid bisque;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
  height: 400px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
