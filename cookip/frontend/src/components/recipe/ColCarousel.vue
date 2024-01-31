<template>
  <VueSlickCarousel v-bind="settings" :style="{ height: '372px' }">
    <div v-for="(recipe, idx) in props.recipeList" :key="idx" class="card-item">
      <div class="cardcontainer">
        <!-- 카드 플립 기능 -->
        <v-card class="the-card">
          <!-- 카드 앞면 표시 내용 -->
          <CardFront class="card-front" :recipe="recipe" />
          <!-- 카드 뒷면 표시 내용 구현하기 -->
          <CardBack class="card-back" :recipe="recipe" />
        </v-card>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script setup>
import { defineProps } from "vue";
import CardFront from "@/components/recipe/CardFront.vue";
import CardBack from "@/components/recipe/CardBack.vue";

const props = defineProps({
  recipeList: Array,
});

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};
</script>

<style scoped>
.cardcontainer {
  position: relative;
  width: 400px;
  height: 200px;
  perspective: 10000px;
}

.the-card {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.5s ease;
  background-color: black;
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: aqua;
  transform: translateZ(30px);
}

.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: antiquewhite;
  transform: rotateY(180deg) translateZ(-30px);
}

.the-card:hover {
  transform: rotateY(180deg);
}
</style>
