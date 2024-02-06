<template>
  <!-- 카드 플립 기능 -->
  <div
    class="the-card shadow-md"
    @click="flipCard"
    :class="{ flipped: flipped }"
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
import { defineProps, ref, watchEffect } from "vue";
import CardFront from "@/components/recipe/CardFront.vue";
import CardBack from "@/components/recipe/CardBack.vue";
import { useMotionStore } from "@/store/motion";

const motionStore = useMotionStore();

// motionStore 의 motion_data 값이 변경될 때 마다 동작이 수행됨
// 동작 수행 후 store에 저장되어 있는 motion 초기화
watchEffect(motionStore.motion_data, () => {
  if (motionStore.motion_data.zoom !== null) {
    let value = motionStore.motion_data.zoom;
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    if (value == "ZoomIn") {
      flipCard();
    } else if (value == "ZoomOut") {
      flipCard();
    }
  } 
  // 초기화
  motionStore.motion_data = {
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  };
});
const props = defineProps({
  recipe: Object,
});

const cardFront = ref(props.recipe);
const cardBack = ref(props.recipe);

const flipped = ref(false);

const flipCard = () => {
  flipped.value = !flipped.value;
};
</script>

<style scoped>
.the-card {
  width: 480px;
  height: 270px;
  perspective: 1000px;
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
  background-color: blanchedalmond;
  transform: rotateY(0deg);
}

.card-back {
  background-color: aquamarine;
  transform: rotateY(180deg);
}

.flipped .card-front {
  transform: rotateY(-180deg);
}

.flipped .card-back {
  transform: rotateY(0deg);
}
</style>
