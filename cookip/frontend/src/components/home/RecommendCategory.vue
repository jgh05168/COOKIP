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
        <div class="category-title">{{ category.title }}</div>
        <img class="category-image" :src="category.img" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <div class="pagination-controls">
    <button @click="prevpage()" class="prev-button button">Previous</button>
    <input type="number" min="0" max="5" v-model="currentSlide" class="slide-input" />
    <button @click="nextpage()" class="next-button button">Next</button>
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

watchEffect(() => {
  if (motionStore.motion_data.swipe !== null) {
    let value = motionStore.motion_data.swipe;
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
  motionStore.motion_data = {
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  };
});

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
</script>

<style scoped>
.category-carousel {
  height: 300px;
}

.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  color: rgb(6, 59, 105);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.category:hover {
  transform: translateY(-5px);
}

.category-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.category-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.pagination-controls {
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 이전 버튼 스타일 */
.prev-button {
  background-color: #4E342E;
  color: #fff;
  margin-right: 10px;
}

.prev-button:hover {
  background-color: #4E342E;
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
  background-color: #4E342E;
  color: #fff;
}

.next-button:hover {
  background-color: #4E342E;
}

.slide-input {
  width: 50px;
  padding: 5px;
  text-align: center;
  /* border: 1px solid #4E342E; */
  border-radius: 5px;
}
.error {
  color: red;
}
</style>
