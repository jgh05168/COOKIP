<template>
  <!-- 카드 플립 기능 -->
  <v-card :class="{ flipped: isFlipped }" @click="toggleCard">
    <template v-slot:front>
      카드 앞면 표시 내용
      <CardFront :front-info="frontInfo" />
    </template>
    <template v-slot:back>
      카드 뒷면 표시 내용 구현하기
      <CardBack :back-info="backInfo" />
    </template>
  </v-card>
</template>

<script setup>
import { ref, defineProps } from "vue";
import CardFront from "@/components/recipe/CardFront.vue";
import CardBack from "@/components/recipe/CardBack.vue";

const props = defineProps({
  recipe: Object,
});

const frontInfo = ref(props.recipe);
const backInfo = ref(props.recipe);

const isFlipped = ref(false);

const toggleCard = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<style scoped>
/* 카드 회전 스타일 */
.flipped {
  transform: rotateY(180deg);
  /* 추가로 회전에 대한 스타일을 조절가능 */
  /* transition:; */
}

.vertical-item-card {
  transform: rotate(
    -90deg
  ); /* 각 슬라이드 아이템의 텍스트도 원래대로 90도 회전 */
  position: relative;
}

.item-inner {
  display: flex;
  flex-direction: row;
}

.card-action {
  position: absolute;
}
</style>
