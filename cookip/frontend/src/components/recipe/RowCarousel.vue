<template>
  <!-- <div v-for="(recipe, idx) in recipestore.recipes" :key="idx">
    {{ recipe }}
    <img  :src="getBufferImage(recipe.thumbnail)" alt="" />
  </div> -->

  <Carousel
    v-model="currentSlide"
    ref="rowCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    class="row-carousel carousel__viewport carousel__track"
  >
    <Slide
      class="row-carousel-slide"
      v-for="(recipe_col, slide) in recipe_category"
      :key="slide"
      :class="{
        'active-row': slide === currentSlide,
        'deactive-row': slide !== currentSlide,
      }"
    >
      <ColCarousel
        :recipe-list="recipe_col"
        :row-slide="slide"
        :nextrow="nextrow"
        :prevrow="prevrow"
      />
    </Slide>
  </Carousel>

  <div>
    <button @click="nextrow()">Next</button>
    <input type="number" min="0" max="4" v-model="currentSlide" />
    <button @click="prevrow()">Prev</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ColCarousel from "./ColCarousel.vue";
import { useRecipeStore } from "@/store/recipe";

const currentSlide = ref(0);
const recipeStore = useRecipeStore();

const recipe_category = recipeStore.recommend_list[recipeStore.selected_category].recipe_list;
console.log("recipe_category",recipe_category);
const rowCarousel = ref(null);

const nextrow = () => {
  rowCarousel.value.next();
};

const prevrow = () => {
  rowCarousel.value.prev();
};

watch(currentSlide, (newVal) => {
  console.log("Current Row:", newVal);
  recipeStore.currentRowSlide = newVal;
});
</script>

<style scoped>
.row-carousel {
  width: 1920px;
  height: 1080px;
}

.row-carousel-slide {
  width: 1080px;
  margin: -0.2%;
}

.carousel__viewport {
  height: 1080px;
}

.carousel__track {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.active-row {
  z-index: 1;
}

.deactive-row {
  z-index: 0;
  opacity: 0.7;
}
</style>
