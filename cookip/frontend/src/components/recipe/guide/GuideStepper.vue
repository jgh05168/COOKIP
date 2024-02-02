<template>
  <v-col>
    <v-stepper v-model="steps.step" :items="steps.items" show-actions>
      <template v-slot:[`item.1`]>
        <v-row>
          <v-col cols="8">
            <h3 class="text-h6">Step {{ steps.step }}.</h3>
            <br />
            <v-sheet border>
              <v-data-table
                :headers="[
                  { text: 'Ingredient', value: 'name' },
                  { text: 'Quantity', align: 'end', value: 'quantity' },
                  { text: 'Unit', align: 'end', value: 'unit' },
                ]"
                :items="steps.ingredients"
              >
              </v-data-table>
            </v-sheet>
            <br />
            <v-sheet border>
              <v-textarea
                label="요리 꿀팁 어쩌구 저쩌구"
                v-model="steps.cookingTip"
              ></v-textarea>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-img
              class="stepper-main-gallery-img"
              :src="mainImage"
              contain
              aspect-ratio="1.5"
            />
          </v-col>
          <IngredientsGalleryVue />
        </v-row>
      </template>
    </v-stepper>
  </v-col>
</template>
<script setup>
import { reactive } from "vue";
import IngredientsGalleryVue from "@/components/recipe/guide/Stepper/IngredientsGallery.vue";

const mainImage = "@/assets/image/recipe_main.png";

const steps = reactive({

  step: [
    {
      id: 1,
      item: "재료 손질",
      ingredients: [
        {
          id: 1,
          name: "감자",
          unit: 10,
          quantity: 2,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 2,
          name: "고구마",
          unit: 15,
          quantity: 50,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 3,
          name: "양파",
          unit: 5,
          quantity: 3,
          image: "@/assets/image/item_yellow.png",
        },
        {
          id: 4,
          name: "당근",
          unit: 8,
          quantity: 1,
          image: "@/assets/image/item_orange.png",
        },
      ],
    },
    {
      id: 2,
      item: "요리 준비하기",
      ingredients: [
        {
          id: 1,
          name: "감자",
          unit: 10,
          quantity: 2,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 2,
          name: "고구마",
          unit: 15,
          quantity: 50,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 3,
          name: "양파",
          unit: 5,
          quantity: 3,
          image: "@/assets/image/item_yellow.png",
        },
        {
          id: 4,
          name: "당근",
          unit: 8,
          quantity: 1,
          image: "@/assets/image/item_orange.png",
        },
      ],
    },
    {
      id: 4,
      item: "요리 준비하기",
      ingredients: [
        {
          id: 1,
          name: "감자",
          unit: 10,
          quantity: 2,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 2,
          name: "고구마",
          unit: 15,
          quantity: 50,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 3,
          name: "양파",
          unit: 5,
          quantity: 3,
          image: "@/assets/image/item_yellow.png",
        },
        {
          id: 4,
          name: "당근",
          unit: 8,
          quantity: 1,
          image: "@/assets/image/item_orange.png",
        },
      ],
    },
    {
      id: 5,
      item: "요리 준비하기",
      ingredients: [
        {
          id: 1,
          name: "감자",
          unit: 10,
          quantity: 2,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 2,
          name: "고구마",
          unit: 15,
          quantity: 50,
          image: "@/assets/image/item_green.png",
        },
        {
          id: 3,
          name: "양파",
          unit: 5,
          quantity: 3,
          image: "@/assets/image/item_yellow.png",
        },
        {
          id: 4,
          name: "당근",
          unit: 8,
          quantity: 1,
          image: "@/assets/image/item_orange.png",
        },
      ],
    }
  ]
});
</script>

<style scoped></style>
