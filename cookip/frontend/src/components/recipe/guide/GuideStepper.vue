<template>
  <v-col>
    <v-stepper v-model="step" :items="items" show-actions>
      <template v-slot:[`item.1`]>
        <v-row>
          <h3 class="text-h6">Order</h3>
          <br />
          <v-row no-gutters>
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
                  <tr v-for="(product, index) in ingredients" :key="index">
                    <td v-text="product.name"></td>
                    <td class="text-end" v-text="product.quantity"></td>
                    <td
                      class="text-end"
                      v-text="product.quantity * product.unit"
                    ></td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
            <br />
            <v-sheet border>
              <v-table>
                <thead>
                  <tr>
                    <th>Utencil</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(product, index) in ingredients" :key="index">
                    <td v-text="product.name"></td>
                    <td class="text-end" v-text="product.quantity"></td>
                    <td
                      class="text-end"
                      v-text="product.quantity * product.unit"
                    ></td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-row>
          <br />

          <v-sheet border>
            <v-radio-group v-model="shipping" label="요리 Tip">
              <v-textarea
                label="요리 꿀팁 어쩌구 저쩌구"
                value="5"
              ></v-textarea>
            </v-radio-group>
          </v-sheet>
          <v-col>
            <v-img class="recipe-img" src="@/assets/image/item_green.png" />
          </v-col>
          <v-col class="recipe-gallery">
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_green.png"
            />
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_onion.png"
            />
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_pepper.png"
            />
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_pumkin.png"
            />
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_green.png"
            />
            <v-img
              class="recipe-gallery-img"
              src="@/assets/image/item_green.png"
            />
          </v-col>
        </v-row>
      </template>
      <template v-slot:[`item.2`]>
        <h3 class="text-h6">Shipping</h3>

        <br />

        <v-radio-group v-model="shipping" label="Delivery Method">
          <v-radio label="Standard Shipping" value="5"></v-radio>
          <v-radio label="Priority Shipping" value="10"></v-radio>
          <v-radio label="Express Shipping" value="15"></v-radio>
        </v-radio-group>
      </template>

      <template v-slot:[`item.3`]>
        <h3 class="text-h6">Confirm</h3>

        <br />

        <v-sheet border>
          <v-table>
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-end">Quantity</th>
                <th class="text-end">unit</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(product, index) in ingredients" :key="index">
                <td v-text="product.name"></td>
                <td class="text-end" v-text="product.quantity"></td>
                <td
                  class="text-end"
                  v-text="product.quantity * product.unit"
                ></td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </template>
    </v-stepper>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    // shipping: 0,
    step: 1,
    items: ["요리 준비하기", "재료 손질", "요리 마무리"],
    ingredients: [
      {
        name: "감자",
        unit: 10,
        quantity: 2,
      },
      {
        name: "고구마",
        unit: 15,
        quantity: 10,
      },
    ],
  }),
};
</script>
<style scoped>
</style>