<template>
  <div>
    <h3 class="text-h6">Step {{ props.step.step }}.</h3>
    <h4 class="text-h6"> {{ props.step.description }}</h4>
    <br />
    <v-sheet border>
      <v-table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th class="text-end">Quantity</th>
            <th class="text-end">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(id, index) in props.step.step_ingredients" :key="index" >
            <td>{{props.recipe.ingredients[id].name }}</td>
            <td class="text-end">{{ props.recipe.ingredients[id].quantity }}</td>
            <td class="text-end">{{ props.recipe.ingredients[id].unit }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
    <br />
    <v-sheet border>
      <v-textarea
        v-model="cookingTip"
        label="요리 꿀팁 어쩌구 저쩌구"
        rows="6"
      ></v-textarea>
    </v-sheet>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  recipe: Object,
  step: Object,
});
console.log(props.recipe.ingredients[props.step.step_ingredients[0]].name);
console.log("props");
const cookingTip = ref(""); // Define a reactive variable to capture the textarea input
</script>


<style scoped>


</style>
