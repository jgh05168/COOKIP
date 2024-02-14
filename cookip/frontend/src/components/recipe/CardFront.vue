<template>
  <v-card class="front-info rounded-xl" width="400">
    <div class="front-inner-info rouded-xl">
      <div class="front-inner-profile">
        레시피 제공 : {{ props.recipeFront.profile_id }}
      </div>
      <v-card-item class="front-inner-recipe" style="width: 150px">
        <!-- 별점 -->
        <div class="star-ratings" style="scale: 0.8; margin-left: -7px">
          <div
            class="star-ratings-fill space-x-2 text-xs"
            :style="{
              width: ratingToPercent(props.recipeFront.recipe_score) + '%',
            }"
          >
            <span>★</span><span>★</span><span>★</span><span>★</span
            ><span>★</span>
          </div>
          <div class="star-ratings-base space-x-2 text-xs">
            <span>★</span><span>★</span><span>★</span><span>★</span
            ><span>★</span>
          </div>
        </div>

        <!-- 요리이름 -->
        <div style="font-weight: bold; font-weight: bold">
          {{ props.recipeFront.name }}
        </div>

        <div class="d-flex" style="align-items: center">
          <!-- 난이도 -->
          <v-chip
            :color="set_color(props.recipeFront.difficulty)"
            :text="props.recipeFront.difficulty"
            class="text-uppercase"
            label
            size="small"
            style="padding: 5px 5px; border-radius: 10px; margin-right: 10px"
          ></v-chip>

          <!-- 시간 -->
          <div style="font-size: 13px">⌛ {{ props.recipeFront.time }} 분</div>
        </div>

        <!-- 연관 카테고리 -->
        <div
          style="
            font-size: 10px;
            margin-top: 20px;
            margin-bottom: 0;
            display: flex;
            flex-wrap: wrap;
          "
        >
          <v-chip
            v-for="n in [1, 2, 3, 4]"
            :key="n"
            color="#A1887F"
            text-color="#EFEBE9"
            size="xs"
          >
            # {{ n }} 번
          </v-chip>
        </div>
      </v-card-item>
    </div>
    <v-img
      :aspect-ratio="4 / 3"
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

const ratingToPercent = (score) => {
  return score * 20 + 1.5;
};

const set_color = (level) => {
  if (level == "easy") {
    return "green";
  } else if (level == "normal") {
    return "orange";
  } else if (level == "hard") {
    return "red";
  }
};

// const getBufferImage = (buffer) => {
//   if (buffer && buffer.data instanceof Array) {
//     const uint8Array = new Uint8Array(buffer.data);
//     const blob = new Blob([uint8Array], { type: "image/jpeg" });
//     return URL.createObjectURL(blob);
//   }
//   return null;
// };


</script>

<style scoped>
.front-info {
  display: flex;
  margin-bottom: 5px;
}

.front-inner-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.front-inner-profile {
}

.front-inner-recipe {
  text-align: start;
  padding-bottom: 10px;
}

/* 별점 구현 */
.star-ratings {
  color: #aaa9a9;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.9px;
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
