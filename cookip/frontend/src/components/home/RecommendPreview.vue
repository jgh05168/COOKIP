<template>
  <div class="recommand-title">RECOMMAND</div>
  <div class="grid grid-cols-5 preview-list">
    <div
      v-for="(item, idx) in results[selectedSlide].value[0]"
      :key="idx"
      class="rounded overflow-hidden shadow-lg preview-item"
      style="color: #111111;+"
    >
      <p style="font-size: 20px; font-weight: bold; text-align: center">
        {{ item.name }}
      </p>
      <img class="preview-img" :src="getBufferImage(item.thumbnail)" alt="" />
    </div>
  </div>
</template>

<script setup>
import { watch, defineProps } from "vue"; 
import { useRecipeStore } from "@/store/recipe";

const recipeStore = useRecipeStore();


const user_id = 1;
const profile_id = 1;

const results = [
  recipeStore.category_1(user_id, profile_id),
  recipeStore.category_2(user_id, profile_id),
  recipeStore.category_3(user_id, profile_id),
  recipeStore.category_4(user_id, profile_id)
];


const props = defineProps({
  selectedSlide: Number,
});




console.log("results", results);

watch(
  () => props.selectedSlide,
  (newVal) => {
    console.log("Selected Recipe Name Changed_reciv:", newVal);
  },
);

const getBufferImage = (buffer) => {
  if (buffer && buffer.data instanceof Array) {
    const uint8Array = new Uint8Array(buffer.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }
  // null 값인 경우 빈 문자열 반환
  return null;
};
</script>

<style scoped>
.preview-list {
  padding: 0 7%;
}

.preview-item {
  display: flex;
  flex-direction: column;
  /* width: 400px; */
  margin: 0 auto;
}

.preview-img {
  width: 300px;
  height: 300px;
  margin: 0 0;
}

.recommand-title {
  width: 1920px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  color: #6d4c41;
  margin-bottom: 10px;
}

.recommand-title {
  width: 1920px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  color: #6d4c41;
  margin-bottom: 10px;
}

.preview-list .preview-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}



/* .preview-list:nth-child(even) {
  background-color: #f3f4f6;
} */
</style>
