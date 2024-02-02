<template>
  <Carousel v-model="currentSlide"
    ref="rowCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
  >
    <Slide
    v-for="(category, slide) in recommend_category"
        :key="slide"
      >
      <div class = title>{{ category.name }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <div>
    <button @click="nextpage()">Next</button>
    <input type="number" min="0" max="3" v-model="currentSlide" />
    <button @click="prevpage()">Prev</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  <RecommendPreview :selectedRecipeName="selectedRecipeName"></RecommendPreview>
</template>

<script setup>
import RecommendPreview from "./RecommendPreview.vue";
import { ref,watch,provide } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


const selectedRecipeName = ref("");
provide("selectedRecipeName", selectedRecipeName);

const currentSlide = ref(0);  // 초기 슬라이드 인덱스 설정

watch(currentSlide, (newVal) => {
  console.log('Current Slide Changed:', newVal);
  selectedRecipeName.value = String(newVal);
});

const rowCarousel = ref(null);
const error = ref('');

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};

const recommend_category = ref([
    { name: "인기추천" }, { name: "기본추천" }, { name: "맞춤추천" },{ name: "카테추천" },{ name: "아무추천" },{ name: "비건추천" }
  ]);

</script>

<style scoped>
.title{
  height: 100px;
  width: 100px;
  color: aliceblue;
  background-color: black;
}
.carousel__slide {
  padding: 5px;
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
