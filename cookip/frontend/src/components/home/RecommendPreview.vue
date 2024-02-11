<template>
  <div class="grid grid-cols-5 gap-10">
    <div
      v-for="(item, idx)  in results[selectedSlide].value[0]"
      :key="idx"
      class="rounded overflow-hidden shadow-lg preview-list"
      style="color: #111111;+"
    ><h1>{{ item.name }}</h1>
    <img  class="preview-img" :src="getBufferImage(item.thumbnail)" alt="" /></div>
  </div>
</template>

<script setup>
import { watch, defineProps } from "vue"; // import reactive and onMounted from vue
import { useRecipeStore } from "@/store/recipe";

const recipeStore = useRecipeStore();

const props = defineProps({
  selectedSlide: Number,
});

// console.log(props.selectedSlide);
//console.log(recipeStore.recommend_list[props.selectedSlide].recipe_list);
const user_id = 1;
const profile_id = 1;
const results = [
    recipeStore.ref_category_1[0],
    recipeStore.ref_category_2[0],
    recipeStore.category_3(user_id),
    recipeStore.category_4(user_id, profile_id)
];
console.log("results",results);

watch(
  () => props.selectedSlide,
  (newVal) => {
    console.log("Selected Recipe Name Changed_reciv:", newVal);
    console.log("ssssssssssssssssssssssssssss",results[props.selectedSlide].value),
    console.log(results[props.selectedSlide].value[0].length)

    // 여기서 변경된 값에 대한 로직을 추가할 수 있습니다.
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
  /* width: 400px; */
  margin: 10px auto;
}
.preview-item {
  /* border-radius: 5%; */
  width: 250px;
  height: 250px;
  margin: auto auto;
}

.preview-img {
  width: 360px;
  height: 360px;
  /* border-radius: 10%; */
}
</style>
