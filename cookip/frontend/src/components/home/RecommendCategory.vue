<template>
  <Carousel
    v-model="currentSlide"
    ref="rowCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    class="category-carousel"
  >
    <Slide
      class="carousel__slide"
      v-for="(category, slide) in recommend_category"
      :key="slide"
    >
      <div class="category" @click="selectCategory(slide)">
        <div class="category-title">{{ category.title }}</div>
        <img class="category-image" :src="category.img" alt="" style="" />
      </div>
    </Slide>
  </Carousel>
  <div class="pagination-controls">
    <button @click="prevpage()" class="prev-button button">Previous</button>
    <input
      type="number"
      min="0"
      max="5"
      v-model="currentSlide"
      class="slide-input"
    />
    <button @click="nextpage()" class="next-button button" style="">
      Next
    </button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  <div class="divide"></div>
  <RecommendPreview :selected-slide="selectedSlide" />
</template>

<script setup>
import RecommendPreview from "./RecommendPreview.vue";
import { ref, watch } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useMotionStore } from "@/store/motion";
import { useRecipeStore } from "@/store/recipe";
import { watchEffect } from "vue";
import router from "@/router";

const motionStore = useMotionStore();

const currentSlide = ref(0);

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

const selectedSlide = ref(0);

const selectCategory = (slide) => {
  const selectedCategory = recommend_category[slide];
  console.log("Selected Category:", selectedCategory);
};

watchEffect(() => {
  if (motionStore.motion_data.swipe !== null) {
    let value = motionStore.motion_data.swipe;
    if (value == "SwipeLeft") {
      nextpage();
    } else if (value == "SwipeRight") {
      prevpage();
    } else if (value == "SwipeDown") {
      motionStore.transition_dir = "slide-down";
      router.push({ name: "recipe", params: {}, query: {} });
    } else if (value == "SwipeUp") {
      motionStore.transition_dir = "slide-up";
      router.push({ name: "my-favorite", params: {}, query: {} });
    }
  }
});


</script>

<style scoped>
.category-carousel {
  height: 370px;
}

.divide {
  background-color: #795548;
  height: 10px;
  opacity: 0.6;
  width: 90%;
  margin: 15px auto;
}

.category {
  padding: 10px;
  width: 300px;
  height: 300px;
  border: 7px solid #6d4c41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-title {
  color: #6d4c41;
  font-size: 30px;
  font-weight: bold;
}
.category:hover {
  transform: translateY(-5px);
}

.category-image {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 5%;
}

.pagination-controls {
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 이전 버튼 스타일 */
.prev-button {
  background-color: #4e342e;
  color: #fff;
  margin-right: 10px;
}

.prev-button:hover {
  background-color: #4e342e;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
/* 다음 버튼 스타일 */
.next-button {
  background-color: #4e342e;
  color: #fff;
}

.next-button:hover {
  background-color: #4e342e;
}

.slide-input {
  width: 50px;
  padding: 5px;
  text-align: center;
  /* border: 1px solid #4E342E; */
  border-radius: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
