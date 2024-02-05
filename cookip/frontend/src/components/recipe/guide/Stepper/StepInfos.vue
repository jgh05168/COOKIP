<template>
  <v-col>
    <h3 class="text-h6">Step 4.</h3>
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
          <tr
            v-for="(ingredient, index) in props.step.ingredients"
            :key="index"
          >
            <td>{{ ingredient.name }}</td>
            <td class="text-end">{{ ingredient.quantity }}</td>
            <td class="text-end">{{ ingredient.unit }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
    <br />
    <v-sheet border>
      <v-textarea
        v-model="cookingTip"
        label="요리 꿀팁 어쩌구 저쩌구"
      ></v-textarea>
    </v-sheet>
  </v-col>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  step: Object,
});

const cookingTip = ref(""); // Define a reactive variable to capture the textarea input
</script>

