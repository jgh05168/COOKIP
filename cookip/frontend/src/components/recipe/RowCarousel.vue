<template>
  <v-carousel height="800px" hide-delimiters class="">
    <!-- 캐로셀 상하 조작 버튼-->
    <template v-slot:prev="{ props }">
      <v-btn @click="props.onClick">Prev</v-btn>
    </template>

    <template v-slot:next="{ props }">
      <v-btn @click="props.onClick">Next</v-btn>
    </template>
    <!-- ---------열 방향 캐로셀 받아오기----------->
    <v-carousel-item
      v-for="(recipe_list, idx) in recipe_category"
      :key="idx"
      class="vertical-carousel-item"
    >
      <ColCarousel :recipe-list="recipe_list" />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from "vue";
import ColCarousel from "./ColCarousel.vue";

const recipe_category = ref([
  [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }],
  [{ name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }],
  [{ name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }],
  [{ name: "13" }, { name: "14" }, { name: "15" }, { name: "16" }],
]);
</script>

<style scoped></style>
