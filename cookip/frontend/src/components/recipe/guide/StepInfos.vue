<template>
  <div class="step-infos">
    <div class="d-flex m-7" style="align-items: center">
      <h3 style="font-weight: bold; color: #2c1915" class="text-h2">
        Step {{ props.nowStep }}.{{ props.nowStepofstep }} :
      </h3>
      <h4 style="font-weight: bold; color: #c2a38f" class="text-h3 ms-4 pt-3">
        {{ props.stepofstep.title }}
      </h4>
    </div>

    <v-sheet border class="ingredients-table">
      <v-table>
        <thead>
          <tr>
            <th
              class="text-center"
              style="font-size: 20px; font-weight: bold; color: #c2a38f"
            >
              Ingredient
            </th>
            <th
              class="text-center"
              style="font-size: 20px; font-weight: bold; color: #c2a38f"
            >
              Quantity
            </th>
            <th
              style="font-size: 20px; font-weight: bold; color: #c2a38f"
              class="text-center"
            >
              Unit
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 스텝 별로 재료 리스트 돌면서 전체 재료에서 일치하는 재료 나타내기 -->
          <tr
           
            v-for="(ingredient_id, idx) in props.stepofstep.ingredient"
            :key="idx"
          >
            <td
              class="text-center"
              style="font-size: 30px; font-weight: bold; color: #2c1915"
            >
              {{ GS.now_recipe_ingredients[ingredient_id]["name"] }}
            </td>
            <td
              style="font-size: 30px; font-weight: bold; color: #2c1915"
              class="text-center"
            >
              {{ GS.now_recipe_ingredients[ingredient_id]["quantity"] }}
            </td>
            <td
              style="font-size: 30px; font-weight: bold; color: #2c1915"
              class="text-center"
            >
              {{ GS.now_recipe_ingredients[ingredient_id]["unit"] }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
    <v-sheet border class="cooking-tip">
      <div class="d-flex" style="overflow: hidden">
        <v-img
          v-for="utencil_id in props.stepofstep.utencil"
          :key="utencil_id"
          :aspect-ratio="1 / 1"
          width="250px"
          height="250"
          style="font-size: 20px"
          :src="GS.now_recipe_utencils[utencil_id].image"
        >
          {{ GS.now_recipe_utencils[utencil_id].name }}</v-img
        >
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useGuideStore } from "@/store/guide";

const props = defineProps({
  stepofstep: Object,
  nowStep: Number,
  nowStepofstep: Number,
});

const GS = useGuideStore();

// console.log("재료 출력 확인", GS.now_recipe_ingredients[5]);
</script>

<style scoped>
.step-infos {
  width: 900px;
  display: flex;
  flex-direction: column;
  /* background-color: pink;   */
}
.ingredients-table {
}
.cooking-tip {
}
</style>
