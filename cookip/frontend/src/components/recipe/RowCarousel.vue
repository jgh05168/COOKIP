<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="(recipe_list, idx) in recipe_category" :key="idx">
      <ColCarousel :recipe-list="recipe_list" />
    </div>
    <v-btn @click="showNext()">show me the next</v-btn>
  </VueSlickCarousel>

  <FlipCard />
</template>

<script setup>
import { ref } from "vue";
import ColCarousel from "./ColCarousel.vue";
import FlipCard from "./FlipCard.vue";

const settings = ref({
  centerMode: true,
  centerPadding: "20px",
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  arrows: true,
});

const recipe_category = ref([
  [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }],
  [{ name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }],
  [{ name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }],
  [{ name: "13" }, { name: "14" }, { name: "15" }, { name: "16" }],
]);

</script>

<style scoped></style>
