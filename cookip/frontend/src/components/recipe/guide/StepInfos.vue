<template>
  <div class="step-infos">
    <h3 class="text-h3">
      Step {{ props.nowStep }}.{{ props.nowStepofstep }}
      {{ props.stepofstep.title }}
    </h3>
    <!-- <h4 class="text-h4"> {{ props.step.description }}</h4> -->
    <v-sheet border class="ingredients-table">
      <v-table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th class="text-end">Quantity</th>
            <th class="text-end">Unit</th>
          </tr>
        </thead>
        <tbody>
          <!-- 스텝 별로 재료 리스트 돌면서 전체 재료에서 일치하는 재료 나타내기 -->
          <tr
            v-for="(ingredient_id, idx) in props.stepofstep.ingredients"
            :key="idx"
          >
            <td>{{ GS.now_recipe_ingredients[ingredient_id].name }}</td>
            <td class="text-end">
              {{ GS.now_recipe_ingredients[ingredient_id].quantity }}
            </td>
            <td class="text-end">
              {{ GS.now_recipe_ingredients[ingredient_id].unit }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
    <v-sheet border class="cooking-tip">
      <v-img
        v-for="utencil in props.stepofstep.utencil"
        :key="utencil"
        :src="require(GS.now_recipe_utencils[utencil.id].image)"
      ></v-img>
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
  width: 600px;
  display: flex;
  flex-direction: column;
  /* background-color: pink;   */
  position: relative; /* 부모 요소를 positioning context로 설정 */
}
.ingredients-table {
  width: 100%;
  margin-top: 20px;
  position: absolute; /* 요리 꿀팁 요소를 부모 요소에 상대적으로 고정 */
  top: 150px; /* 요리 꿀팁 요소를 부모 요소의 하단에 위치시킴 */
}
.cooking-tip {
  width: 100%;
  position: absolute; /* 요리 꿀팁 요소를 부모 요소에 상대적으로 고정 */
  bottom: 0; /* 요리 꿀팁 요소를 부모 요소의 하단에 위치시킴 */
}
</style>
