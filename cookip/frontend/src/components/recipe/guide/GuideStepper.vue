<template>
  <v-col>
    <v-stepper r v-model="steps.step" :items="steps.items" show-actions>
      <template v-slot:[`item.1`]>
        <v-row>
          <v-col class="stepper-contents">
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
                  <tr v-for="(ingredient, index) in steps.ingredients" :key="index">
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
                v-model="steps.cookingTip"
              ></v-textarea>
            </v-sheet>
          </v-col>
          <v-col class="stepper-main-gallery">
            <v-img
              class="stepper-main-gallery-img"
              src="@/assets/image/item_green.png"
            />
          </v-col>
          <IngredientsGalleryVue />
        </v-row>
      </template>
    </v-stepper>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsGalleryVue from "@/components/recipe/guide/Stepper/IngredientsGallery.vue";

const steps = ref({
  step: 1,
  items: ["요리 준비하기", "재료 손질", "요리 마무리"],
  ingredients: [
    {
      name: "감자",
      unit: 10,
      quantity: 2,
      image: "@/assets/image/item_green.png",
    },
    {
      name: "고구마",
      unit: 15,
      quantity: 10,
      image: "@/assets/image/item_green.png",
    },
    {
      name: "고구마",
      unit: 15,
      quantity: 10,
      image: "@/assets/image/item_green.png",
    },
    {
      name: "고구마",
      unit: 15,
      quantity: 10,
      image: "@/assets/image/item_green.png",
    },
    {
      name: "고구마",
      unit: 15,
      quantity: 10,
      image: "@/assets/image/item_green.png",
    },
  ],
  cookingTip: "",
})
</script>

<style scoped>
</style>
