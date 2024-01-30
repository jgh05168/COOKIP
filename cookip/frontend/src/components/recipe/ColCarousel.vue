<template>
    <v-carousel height="800px" hide-delimiters class="vertical-carousel">
      <!-- 캐로셀 상하 조작 버튼-->
      <template v-slot:prev="{ props }">
        <v-btn @click="props.onClick">Prev</v-btn>
      </template>
  
      <template v-slot:next="{ props }">
        <v-btn @click="props.onClick">Next</v-btn>
      </template>

      <!-- ------------------ -->
      <v-carousel-item
        v-for="(recipe, idx) in props.recipeList"
        :key="idx"
        class="vertical-carousel-item"
      >
        <FlipCard 
        :recipe="recipe"
        />
        
      </v-carousel-item>

    </v-carousel>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import FlipCard from "@/components/recipe/FlipCard.vue"

  const props = defineProps({
    recipeList:Array,
  })

  </script>
  
  <style scoped>
  .vertical-carousel {
    transform: rotate(90deg); /* 90도 회전하여 세로로 슬라이드되도록 함 */
    width: 400px; /* 높이와 너비를 서로 교체하여 크기 조절 */
  }
  
  .vertical-carousel-item {
    transform: rotate(
      -90deg
    ); /* 각 슬라이드 아이템을 다시 90도 회전하여 정상적으로 표시 */
  }
  


  </style>
  