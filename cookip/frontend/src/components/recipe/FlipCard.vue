<template>
  <!-- 카드 플립 기능 -->
  <v-card class="the-card">
    {{ props.recipe }}
    <!-- 카드 앞면 표시 내용 -->
    <!-- <CardFront class="card-front" :recipe="recipe" /> -->
    <!-- 카드 뒷면 표시 내용 구현하기 -->
    <!-- <CardBack class="card-back" :recipe="recipe" /> -->
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
// import CardFront from "@/components/recipe/CardFront.vue";
// import CardBack from "@/components/recipe/CardBack.vue";
const props = defineProps({
  recipe: Object,
});
</script>

<style scoped>
.the-card {
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;

}
</style>
