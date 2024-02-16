<template>
  <!-- 카드 플립 기능 -->
  <div class="the-card" @click="flipCard" :class="{ flipped: props.flip }">
    <!-- 카드 앞면 표시 내용 -->
    <div class="card-front">
      <CardFront :recipe-front="cardFront" />
    </div>
    <!-- 카드 뒷면 표시 내용 구현하기 -->
    <div class="card-back">
      <CardBack :recipe-back="cardBack" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import CardFront from "@/components/recipe/CardFront.vue";
import CardBack from "@/components/recipe/CardBack.vue";

const props = defineProps({
  recipe: Object,
  flip: Boolean,
});

console.log("이건 colflip 값", props.flip);
const cardFront = ref(props.recipe);
const cardBack = ref(props.recipe);
</script>

<style scoped>
.the-card {
  position: relative;
  transform-style: preserve-3d; /* 3D 효과 */
  transition: transform 0.3s; /* 전환 효과 */
  transform: perspective(2000px) rotateY(0deg); /* 전환 형태 원근감 , 회전 방향(각도)*/
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* 뒤집어 졌을 때 뒷면 보이지 않아야 함*/
}

.card-front {
  z-index: 1;
  transform: rotateY(0deg);
}

.card-back {
  z-index: -1;
  transform: rotateY(180deg); /* 뒷면 180도 회전시켜 놓기*/
}

.flipped {
  transform: perspective(2000px) rotateY(180deg);
}
</style>
