<template>
  <!-- 카드 플립 기능 -->
  <div
    class="the-card shadow-md"
    @click="flipCard"
    :class="{ flipped: props.flip }"
  >
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
  perspective: 2000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;

}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.flipped .card-front {
  transform: rotateY(-180deg);
}

.flipped .card-back {
  transform: rotateY(0deg);
}
</style>
