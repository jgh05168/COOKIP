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
    class="row-carousel"
  >
    <Slide
      class="row-carousel-slide"
      v-for="(recipe_col, slide) in recipe_category"
      :key="slide"
      viewport="1080px"
      :class="{
        'active-row': slide === currentSlide,
        'deactive-row': slide !== currentSlide,
      }"
    >
      <ColCarousel :recipe-list="recipe_col" :row-slide="slide" />
    </Slide>
  </Carousel>

  <div>
    <button @click="nextpage()">Next</button>
    <input type="number" min="0" max="3" v-model="currentSlide" />
    <button @click="prevpage()">Prev</button>
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

const recipe_category =
  recipeStore.recommend_list[recipeStore.selected_category].recipe_list;

const rowCarousel = ref(null);

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};

// const getBufferImage = (buffer) => {
//   if (buffer && buffer.data instanceof Array) {
//     const uint8Array = new Uint8Array(buffer.data);
//     const blob = new Blob([uint8Array], { type: "image/jpeg" });
//     return URL.createObjectURL(blob);
//   }
//   return null;
// };
watch(currentSlide, (newVal) => {
  console.log("Current Row:", newVal);
  recipeStore.currentRowSlide = newVal;
});
</script>

<style scoped>
.row-carousel {
  width: 100%;
  height: 1080px;
}

.row-carousel-slide {
  height: 100%;
  width: 100%;
  position: relative;
}

.carousel__viewport {
  height: 1080px;
}

.active-row {
  z-index: 1;
}

.deactive-row {
  z-index: 0;
  opacity: 0.7;
}
</style>
