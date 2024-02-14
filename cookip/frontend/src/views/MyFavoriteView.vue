<template>
  <v-card color="basil" class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h1 text-basil">FAVORiTE</h1>
    </v-card-title>
    <!-- 멤버리스트를 나타내는 탭 구성 -->
    <div class="d-flex flex-row">
      <v-tabs
        v-model="favoriteStore.now_tab"
        direction="vertical"
        color="white"
        align-tabs="center"
        bg-color="#BCAAA4"
        style="padding: 10px 10px"
      >
        <v-tab
          v-for="member in authStore.memberList"
          :key="member.id"
          :value="member.id"
          style="font-size: 30px; font-weight: bold"
        >
          {{ member }}
        </v-tab>
      </v-tabs>
      <!-- 탭과 v-model 로 양방향 바인딩 해주고 -->
      <v-window v-model="favoriteStore.now_tab">
        <!-- 멤버리스트별 레시피 목록들을 돌면서 탭의 멤버와 value로  -->
        <v-window-item v-for="n in recipeStore.memberList" :key="n" :value="n">
          <!-- 멤버 리스트 별로 즐겨찾기 목록을 보여준다 -->
          <FavoriteList :recipe-list="n" />
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import {} from "vue";
import { useAuthStore } from "@/store/auth";
import { useFavoriteStore } from "@/store/favorite";
import { useRecipeStore } from "@/store/recipe";

import FavoriteList from "@/components/home/FavoriteList.vue";

const authStore = useAuthStore();
const favoriteStore = useFavoriteStore();
const recipeStore = useRecipeStore();

console.log(authStore.memberList.user);
console.log(favoriteStore.member_favorite);
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
