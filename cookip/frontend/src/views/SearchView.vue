<template>
  <v-container class="search-container">
    <div class="search-bar">
      <input type="text" v-model="search" />
    </div>
    <v-data-table
      class="data-table"
      :search="search"
      :headers="headers"
      :page="page"
      :items="recipes"
      :items-per-page="itemsPerPage"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
    >
      <template #header="{ header }">
        <th class="custom-header">{{ header.text }}</th>
      </template>
      <template #item="{ item }">
        <tr class="data-item">
          <td style="width: 5%">{{ item.recipe_id }}</td>
          <td style="font-weight: bold; width: 20%">{{ item.name }}</td>
          <td style="width: 15%">
            <v-img
              :src="require(`@/assets/login_image/cookip_logo.png`)"
              width="150"
              cover
            ></v-img>
          </td>
          <td style="width: 15%">
            <v-chip
              :color="set_color(item.difficulty)"
              :text="item.difficulty"
              class="text-uppercase"
              label
              size="xl"
              style="padding: 5px 10px"
            ></v-chip>
          </td>
          <td style="width: 15%">{{ item.time }} 분</td>
          <td>
            <div class="star-ratings" style="margin: 0 auto">
              <div
                class="star-ratings-fill space-x-2 text-lg"
                :style="{ width: ratingToPercent(item.recipe_score) + '%' }"
              >
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
              <div class="star-ratings-base space-x-2 text-lg">
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
            </div>
          </td>
          <td style="width: 10%">
            <div class="good">
              {{ item.recipe_good }}
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
  <button @click="nextpage">nextpage</button>
  <button @click="prevpage">prevpage</button>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRecipeStore } from "@/store/recipe";

const recipeStore = useRecipeStore();

const search = ref("");
const recipes = ref(recipeStore.recipes);

const headers = [
  { title: "id", value: "recipe_id", align: "center", key: "recipe_id" },
  { title: "음식", value: "name", key: "name", align: "center" },
  { title: "사진", value: "thumbnail", key: "thumbnail", align: "center" },
  { title: "난이도", value: "difficulty", key: "difficulty", align: "center" },
  { title: "소요시간", value: "time", key: "time", align: "center" },
  { title: "평점", value: "score", key: "recipe_score", align: "center" },
  { title: "좋아요", value: "good", key: "recipe_good", align: "center" },
];

const page = ref(1); // 현제 페이지
const itemsPerPage = ref(5); // 페이지당 아이템 수

const canGoNextPage = computed(
  () => page.value < Math.ceil(recipes.value.length / itemsPerPage.value)
);
const canGoPreviousPage = computed(() => page.value > 1);

const nextpage = () => {
  if (canGoNextPage.value) {
    page.value++;
  }
};

const prevpage = () => {
  if (canGoPreviousPage.value) {
    page.value--;
  }
};

const sortBy = ref([]); // 정렬할 열
const sortDesc = ref(false); // 정렬 방향 (true: 내림차순, false: 오름차순)

const set_color = (level) => {
  if (level == "easy") {
    return "green";
  } else if (level == "normal") {
    return "orange";
  } else if (level == "hard") {
    return "red";
  }
};

const ratingToPercent = (score) => {
  return score * 20 + 1.5;
};
</script>

<style scoped>
.search-bar {
  border: solid #bcaaa4 5px;
  background-color: #efebe9;
  margin: 1% 0;
}

.search-bar input[type="text"] {
  font-size: 30px; /* 텍스트 크기를 원하는 크기로 설정하세요 */
}
.custom-header {
}

.search-container {
  border: solid #bcaaa4 5px;
  height: 1080px;
  margin: 0 auto;
}

.data-table {
  border: solid #bcaaa4 5px;
  height: 920px;
  font-size: 30px;
  text-align: center;
}

.data-item {
  height: 150px;
}

/* 별점 구현 */
.star-ratings {
  color: #aaa9a9;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
}

.star-ratings-fill {
  color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: gold;
}

.star-ratings-base {
  z-index: 0;
  padding: 0;
}
/* ------별점 구현 끝 */

</style>
