<template>
  <v-card class="back-info rounded-xl" width="400" height="187.477">
    <v-card-item class="back-info-inner">
      <div
        class="d-flex"
        style="
          flex-direction: row;
          align-items: center;
          justify-content: center;
        "
      >
        <!-- 설명 -->
        <div class = "recipe_description">
          레시피 설명: {{ props.recipeBack.description }}
        </div>
        <div style="height: 140px; border: 1px dashed #8d6e63"></div>
        <!-- 재료 -->
        <div class="recipe-ingredients">
          재료리스트 반복문 돌면서 재료 사진 보여주기
          <div
            v-for="ingredient_id in props.recipeBack.ingredient"
            :key="ingredient_id"
          >
            <v-img aspect-ratio="1/1" :src="`/image/ingredient/item_${ingredient_id}.jpg`" alt=""
              >{{ ingredient_id }} 사진
            </v-img>
            <span>재료명</span>
          </div>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipeBack: Object,
});
</script>

<style scoped>
.back-info {
  background-color: white;
}

.back-info-inner {
  width: 100%;
  height: 100%;
}

.recipe-ingredients {
}
</style>
