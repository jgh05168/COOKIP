<template>
  <Carousel
    v-model="currentSlide"
    ref="fCarousel"
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    class="favorite-carousel"
  >
    <Slide v-for="(recipe, slide) in props.recipeList" :key="slide">
      <v-card class="favorite-card">
        <v-img
          cover
          width="450"
          :aspectRatio="1 / 1"
          :src="recipe.thumbnail"
        ></v-img>

        <v-card-item style="margin-top: 20px; height: 100px; padding-left: ">
          <v-card-title style="text-align: start; height: 70px">
            <p
              style="
                font-size: 40px;
                font-weight: bold;
                color: #2c1915;
                height: 60px;
              "
            >
              {{ recipe.name }}
            </p>
          </v-card-title>

          <v-card-subtitle>
            <span class="me-1"></span>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0" style="">
            <div class="star-ratings" style="scale: 0.8; margin-left: -20px">
              <div
                class="star-ratings-fill space-x-2 text-5xl"
                :style="{
                  width: ratingToPercent(recipe.recipe_score) + '%',
                }"
              >
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
              <div class="star-ratings-base space-x-2 text-5xl">
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
            </div>
            <div>
              <span style="font-size: 30px; color: rgba(128, 128, 128, 0.765)"
                >({{ recipe.recipe_score }})</span
              >
            </div>
          </v-row>

          <div class="my-6 ms-2">
            <div class="d-flex" style="align-items: center">
              <!-- 난이도 -->
              <v-chip
                :color="set_color(recipe.difficulty)"
                :text="recipe.difficulty"
                class="text-uppercase"
                label
                style="
                  padding: 5px 5px;
                  border-radius: 10px;
                  margin-right: 10px;
                  font-size: 25px;
                "
              ></v-chip>

              <!-- 시간 -->
              <div style="font-size: 25px">⌛ {{ recipe.time }} 분</div>
            </div>
          </div>

          <div></div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <button @click="prevpage">prev</button>
          <button @click="nextpage">next</button>
          <v-btn color="" variant="text"> Start </v-btn>
          <v-btn @click="nowRecipe()"> 현재 슬라이드 정보</v-btn>
        </v-card-actions>
      </v-card>
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref, defineProps, watchEffect } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useMotionStore } from "@/store/motion";
import router from "@/router";
// import { useFavoriteStore } from "@/store/favorite";

const props = defineProps({
  recipeList: Array,
  nexttab: Function,
  prevtab: Function,
  tab: Number,
  favoriteList: Array,
  tabIdx: Number,
});
const motionStore = useMotionStore();
// const favoriteStore = useFavoriteStore();

const currentSlide = ref(0);

const fCarousel = ref(null);

const nowRecipe = () => {
  // console.log(fCarousel.value.data.currentSlide.value);
  currentSlide.value = fCarousel.value.data.currentSlide.value;
  console.log(
    "레시피 아이디",
    props.favoriteList[props.tab].favorite_list[currentSlide.value].recipe_id
  );
  return props.favoriteList[props.tab].favorite_list[currentSlide.value]
    .recipe_id;
};

const nextpage = () => {
  if (fCarousel.value !== null) {
    fCarousel.value.next();
  }
};

const prevpage = () => {
  if (fCarousel.value !== null) {
    fCarousel.value.prev();
  }
};

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

watchEffect(() => {
  console.log(motionStore.motion_data);
  if (motionStore.motion_data.swipe !== null) {
    if (motionStore.motion_data.swipe == "SwipeUp") {
      // 다음 멤버로
      props.prevtab();
    } else if (motionStore.motion_data.swipe == "SwipeDown") {
      // 이전 멤버로
      props.nexttab();
    } else if (motionStore.motion_data.swipe == "SwipeLeft") {
      nextpage(); // 다음 레시피
    } else if (motionStore.motion_data.swipe == "SwipeRight") {
      prevpage(); // 이전 레시피
    }
    motionStore.motion_data.swipe = null;
  } else if (motionStore.motion_data.page !== null) {
    if (motionStore.motion_data.page == "PageIn") {
      router.push({
        name: "recipe-detail",
        params: { recipeid: nowRecipe() }, // 현재 가리키는 slide 의 해당하는 레시피의 디테일 페이지로 가기
      });
    } else if (motionStore.motion_data.page == "PageOut") {
      router.push({ name: "home" });
    }
    motionStore.motion_data.page = null;
  }
});
</script>

<style scoped>
.favorite-carousel {
  height: 800px;
}

.favorite-card {
  width: 450px;
  height: 800px;
  margin: 0;
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
