<template>
  <div class="col-container">
    <Carousel
      ref="colCarousel"
      :itemsToShow="1"
      :wrapAround="true"
      :transition="500"
      class="vertical-carousel"
    >
      <Slide
        class="vertical-slide"
        v-for="(recipe, slide) in props.recipeList"
        :key="slide"
      >
        <div class="cardcontainer carousel__item">
          <!-- 카드 플립 기능 -->
          <v-card class="the-card">
            {{ recipe }}
            <!-- 카드 앞면 표시 내용 -->
            <!-- <CardFront class="card-front" :recipe="recipe" /> -->
            <!-- 카드 뒷면 표시 내용 구현하기 -->
            <!-- <CardBack class="card-back" :recipe="recipe" /> -->
          </v-card>
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
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// import CardFront from "@/components/recipe/CardFront.vue";
// import CardBack from "@/components/recipe/CardBack.vue";

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
.col-container {
  transform: rotate(0.25turn);
}

.vertical-carousel {
}
.vertical-slide {
}

.cardcontainer {
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  background-color: aqua;
}

.the-card {
  position: absolute;
  width: 100%;
  height: 100%;
  /* transform-style: preserve-3d; */
  transition: all 1.5s ease;
  /* background-color: black; */
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: aqua;
  /* transform: translateZ(30px); */
}

.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: antiquewhite;
  /* transform: rotateY(180deg) translateZ(-30px); */
}
/* 
.the-card:hover {
  transform: rotateY(180deg);
} */

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
