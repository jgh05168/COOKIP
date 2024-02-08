<template>
  <v-card class="d-flex rounded-xl" width="400">
    <div class="rouded-xl">
      <v-card-item style="width: 150px">
        <p style="font-size: 13px; font-weight: 700">
          {{ props.recipeFront.name }}
        </p>
      </v-card-item>
    </div>
    <v-img
      :aspect-ratio="4/3"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>
    <!-- <v-card-actions>
      <v-btn color="orange"> Share </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipeFront: Object,
});

// const getBufferImage = (buffer) => {
//   if (buffer && buffer.data instanceof Array) {
//     const uint8Array = new Uint8Array(buffer.data);
//     const blob = new Blob([uint8Array], { type: "image/jpeg" });
//     return URL.createObjectURL(blob);
//   }
//   return null;
// };
</script>

<style scoped></style>
