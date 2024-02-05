<template>
  <div v-for="(recipe, idx) in recipestore.recipes" :key="idx">
    <img :src="getBufferImage(recipe.thumbnail)" alt="">
  </div>
  
  <Carousel
    ref="rowCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    class="row-carousel"
  >
    <Slide
      class="row-carousel-slide"
      v-for="(recipe_list, slide) in recipe_category"
      :key="slide"
      viewport="1080px"
    >
      <ColCarousel :recipe-list="recipe_list" />
    </Slide>
    <!-- 
    <template #addons>
      <Pagination />
    </template> -->
  </Carousel>

  <div>
    <button @click="nextpage()">Next</button>
    <input type="number" min="0" max="3" v-model="currentSlide" />
    <button @click="prevpage()">Prev</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ColCarousel from "./ColCarousel.vue";
import { useRecipeStore } from "@/store/recipe"

const recipestore = useRecipeStore()


const rowCarousel = ref(null);

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};

const getBufferImage = (buffer) => {
  if (buffer && buffer.data instanceof Array) {
    const uint8Array = new Uint8Array(buffer.data);
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  }
  return null;
};

const recipe_category = ref([
  [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }],
  [{ name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }],
  [{ name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }],
  [{ name: "13" }, { name: "14" }, { name: "15" }, { name: "16" }],
]);
</script>

<style scoped>
.row-carousel {
  width: 100%;
  height: 1080px;
}

.row-carousel-slide {
  height: 100%;
  width: 100%;
}

.carousel__viewport {
  height: 1080px;
}
</style>
