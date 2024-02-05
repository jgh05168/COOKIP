<template>
  <Carousel
    :items-to-show="3"
    :wrap-around="true"
    ref="colCarousel"
    :transition="400"
    class="vertical-carousel"
  >
    <Slide
      class="vertical-carousel-slide carousel__viewport"
      v-for="(recipe, slide) in props.recipeList"
      :key="slide"
    >
      <div class="flip-card">
        <FlipCard :recipe="recipe" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

  <div>
    <button @click="nextpage()">다음</button>
    <input type="number" min="0" max="3" v-model="currentSlide" />
    <button @click="prevpage()">이전</button>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import FlipCard from "./FlipCard.vue";

const props = defineProps({
  recipeList: Array,
});

const colCarousel = ref(null);

const nextpage = () => {
  colCarousel.value.next();
};

const prevpage = () => {
  colCarousel.value.prev();
};
</script>

<style scoped>
.vertical-carousel {
  transform: rotate(0.25turn);
  width: 1080px;
}

.vertical-carousel-slide {
  transform: rotate(-0.25turn);
  width: 100%;
  height: 1080px;
}

.carousel__viewport {
  height: 1080px;
}

.carousel__track {
  margin: 0 0;
}

.flip-card {
  width: 640px;
  height: 360px;
  border: 2px solid red;
  margin: 10%;
  padding: 0 0;
  /* transform: rotate(-0.25turn); */
}
</style>
