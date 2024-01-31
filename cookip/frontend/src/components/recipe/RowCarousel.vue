<template>
  <Carousel
    ref="rowCarousel"
    :itemsToShow="3.95"
    :wrapAround="true"
    :transition="500"
    style="height: 1000px"
  >
    <Slide
      class="test"
      v-for="(recipe_list, slide) in recipe_category"
      :key="slide"
      style="height: 1000px"
    >
      <div class="carousel__item">
        <ColCarousel :recipe-list="recipe_list" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

  <div>
    <button @click="nextpage()">Next</button>
    <input type="number" min="0" max="3" v-model="currentSlide" />
    <button @click="prevpage()">Prev</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ColCarousel from "./ColCarousel.vue";

const rowCarousel = ref(null);

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};

const recipe_category = ref([
  [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }],
  [{ name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }],
  [{ name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }],
  [{ name: "13" }, { name: "14" }, { name: "15" }, { name: "16" }],
]);
</script>

<style scoped>
.test {
}
.colcarousel {
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
