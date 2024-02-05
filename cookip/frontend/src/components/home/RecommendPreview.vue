<template>
  <div class="grid grid-cols-3 gap-10">
    <div
      v-for="(item, idx) in recipeStore.recommend_list[selectedSlide]
        .recipe_list[selectedSlide]"
      :key="idx"
      class="max-w-sm rounded overflow-hidden shadow-lg preview-list"
      style="color: white; background-color: bisque"
    >
      <div class="preview-item">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
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
        </div>
      </div>

      <img class="preview-img" :src="getBufferImage(item.thumbnail)" alt="" />
    </div>
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
console.log(recipeStore.recommend_list[props.selectedSlide].recipe_list);

watch(
  () => props.selectedSlide,
  (newVal) => {
    console.log("Selected Recipe Name Changed_reciv:", newVal);
    // 여기서 변경된 값에 대한 로직을 추가할 수 있습니다.
  }
);

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
.preview-list {
  display: flex;
  flex-direction: row;
}
.preview-item {
  border: 2px solid bisque;
  background-color: bisque;
  border-radius: 5%;
  width: 320px;
  height: 180px;
  margin: auto auto;
}

.preview-img {
  width: 200px;
}
</style>
