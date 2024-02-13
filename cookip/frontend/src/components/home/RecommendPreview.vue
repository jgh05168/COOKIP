<template>
  <div class="grid grid-cols-5 gap-10">
    <div
      v-for="(item, idx)  in results[selectedSlide].value[0]"
      :key="idx"
      class="rounded overflow-hidden shadow-lg preview-list"
    >
      <h1 class="preview-title">{{ item.name }}</h1>
      <img class="preview-img" :src="getBufferImage(item.thumbnail)" alt="" />
    </div>
  </div>
</template>

<script setup>
import { watch, defineProps } from "vue"; 
import { useRecipeStore } from "@/store/recipe";

const recipeStore = useRecipeStore();

const props = defineProps({
  selectedSlide: Number,
});


const user_id = 1;
const profile_id = 1;
const results = [
  recipeStore.category_1(user_id, profile_id),
  recipeStore.category_2(user_id, profile_id),
  recipeStore.category_3(user_id, profile_id),
  recipeStore.category_4(user_id, profile_id)
];
console.log("results",results);

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
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  /* width: 250px; /* 고정된 너비 */
  /* height: 300px; 고정된 높이 */ 
  width: 100%; /*부모 요소에 꽉 차도록 너비 설정*/
  height: 300px; /*고정된 높이 설정*/
}

.preview-list:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.preview-list .preview-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.preview-list .preview-img {
  width: 100%;
  height: 100%; /* 이미지가 부모 요소에 꽉 차도록 설정 */
  object-fit: cover;
  border-radius: 10px;
}

/* .preview-list:nth-child(even) {
  background-color: #f3f4f6;
} */
</style>
