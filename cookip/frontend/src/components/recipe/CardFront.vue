<template>
  <div class="card max-w-sm rounded overflow-hidden">
    <div class="card-info">
      <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2 text-slate-800">
          {{ props.recipeFront.name }}
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
    <div class="thumbnail">
      <img :src="getBufferImage(recipeFront.thumbnail)" alt="음식이미지" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipeFront: Object,
});

const getBufferImage = (buffer) => {
  if (buffer && buffer.data instanceof Array) {
    const uint8Array = new Uint8Array(buffer.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }
  return null;
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.card-info {
  width: 40%;
  height: 60%;
}

.thumbnail {
  width: 60%;
  height: 100%;
}
</style>
