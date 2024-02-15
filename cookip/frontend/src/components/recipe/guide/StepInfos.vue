<template>
  <div class="step-infos">
    <h3 class="text-h3">Step {{ props.step }}.</h3>
    <!-- <h4 class="text-h4"> {{ props.step.description }}</h4> -->
    <v-sheet border
        class="ingredients-table">
      <v-table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th class="text-end">Quantity</th>
            <th class="text-end">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(id, index) in props.recipe.ingredients" :key="index" >
            <td>{{id.name }}</td>
            <td class="text-end">{{ id.quantity }}</td>
            <td class="text-end">{{ id.unit }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
    <v-sheet border
        class="cooking-tip">
      <v-textarea
        v-model="cookingTip"
        label="요리 꿀팁 어쩌구 저쩌구"
        rows="6" 
      ></v-textarea>
    </v-sheet>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  recipe: Object,
  guide: Object,
  step: Number
});

onMounted(() => {
  console.log("스텝인포스 진입", props.recipe)
  console.log("샘플입니다",  props.recipe.ingredients[props.step.step_ingredients]);
})

const cookingTip = ref(""); // Define a reactive variable to capture the textarea input
</script>


<style scoped>
.step-infos{
  width: 600px;
  display: flex;
  flex-direction: column;
  /* background-color: pink;   */
  position: relative; /* 부모 요소를 positioning context로 설정 */

}
.ingredients-table{
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
