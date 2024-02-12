<template>
  <v-card color="basil" class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">FAVORiTE</h1>
    </v-card-title>
    <!-- 멤버리스트를 나타내는 탭 구성 -->
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        color="primary"
        align-tabs="center"
      >
        <v-tab
          v-for="member in authStore.memberList"
          :key="member.id"
          :value="member.id"
        >
          {{ member }}
        </v-tab>
      </v-tabs>
      <!-- 탭과 v-model 로 양방향 바인딩 해주고 -->
      <v-window v-model="tab">
        <!-- 멤버리스트별 레시피 목록들을 돌면서 탭의 멤버와 value로  -->
        <v-window-item v-for="n in recipeStore.memberList" :key="n" :value="n">
          <!-- 멤버 리스트 별로 즐겨찾기 목록을 보여준다 -->
          <Carousel
            v-model="currentSlide"
            ref="fCarousel"
            :itemsToShow="5"
            :wrapAround="true"
            :transition="500"
          >
            <Slide> 
              
            </Slide>
          </Carousel>
          <button @click="prev">prev</button>
          <button @click="next">next</button>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useFavoriteStore } from "@/store/favorite";
import { useRecipeStore } from "@/store/recipe";
import { Carousel, Slide } from "vue3-carousel";

const authStore = useAuthStore();
const favoriteStore = useFavoriteStore();
const recipeStore = useRecipeStore();

console.log(authStore.memberList.user);
console.log(favoriteStore.member_favorite);

const currentSlide = ref(0);

const fCarousel = ref(null);

const next = () => {
  fCarousel.value.next();
};

const prev = () => {
  fCarousel.value.prev();
};

// watch(currentSlide, (newVal) => {
//   console.log("Current item:", newVal);
// });

const tab = ref(null);
</script>

<style scoped>
.card {
  width: 1920px;
  height: 1080px;
}

/* Helper classes */
.bg-basil {
  background-color: #fdf8ec;
}
.text-basil {
  color: #6d4c41;
}
</style>
