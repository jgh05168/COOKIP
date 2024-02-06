<template>
  <!-- 카드 플립 기능 -->
  <v-card class="the-card">
    <h1>test</h1>
    <!-- 카드 앞면 표시 내용 -->
    <CardFront class="card-front" :recipe-front="cardFront" />
    <!-- 카드 뒷면 표시 내용 구현하기 -->
    <CardBack class="card-back" :recipe-back="cardBack" />
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
// import CardFront from "@/components/recipe/CardFront.vue";
// import CardBack from "@/components/recipe/CardBack.vue";
const props = defineProps({
  recipe: Object,
});

const cardFront = { name: props.recipe.name };
const cardBack = { ingredients: props.recipe.ingredients };
</script>

<style scoped>
.the-card {
  width: 500px;
  height: 300px;
}
</style>
