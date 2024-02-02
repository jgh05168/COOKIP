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
          <tr v-for="(ingredient, index) in ingredients" :key="index">
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
        label="요리 꿀팁 어쩌구 저쩌구"
        v-model="cookingTip"
      ></v-textarea>
    </v-sheet>
  </v-col>
</template>

