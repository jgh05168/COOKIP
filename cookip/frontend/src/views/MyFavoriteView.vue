<template>
  <v-card color="basil" class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h1 text-basil">FAVORiTE</h1>
    </v-card-title>
    <!-- 멤버리스트를 나타내는 탭 구성 -->
    <div
      class="d-flex flex-row"
      style="width: 1920px; height: 800px; justify-content: center"
    >
      <v-tabs
        v-model="tab"
        direction="vertical"
        color="white"
        align-tabs="start"
        bg-color="#BCAAA4"
        style="padding: 10px 10px"
      >
        <v-tab
          v-for="profile in profile_list"
          :key="profile.profile_id"
          :value="profile.profile_id"
          style="font-size: 30px; font-weight: bold"
        >
          <!-- {{ profile }} -->
          <div class="d-flex">
            <v-img
              :src="getBufferImage(profile.profile_img)"
              :aspect-ratio="1 / 1"
              style="width: 50px"
            ></v-img>
            <span>{{ profile.profile_nickname }}</span>
          </div>
        </v-tab>
      </v-tabs>
      <!-- 탭과 v-model 로 양방향 바인딩 해주고 -->
      <v-window v-model="tab" style="width: 1600px; height: 800px">
        <!-- 멤버리스트별 레시피 목록들을 돌면서 탭의 멤버와 value로  -->
        <div v-if="members_favorite_list.length > 0">
          <v-window-item
            style="height: 100%"
            v-for="favorite in members_favorite_list"
            :key="favorite.profile_id"
            :value="favorite.profile_id"
          >
            <!-- 멤버 리스트 별로 즐겨찾기 목록을 보여준다 -->
            <FavoriteList :recipe-list="favorite.favorite_list" />
          </v-window-item>
        </div>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useFavoriteStore } from "@/store/favorite";
import FavoriteList from "@/components/home/FavoriteList.vue";
import accountService from "@/store/mvpApi";
import { useRecipeStore } from "@/store/recipe";

const favoriteStore = useFavoriteStore();
const error = ref("");
const tab = ref(0);

const profile_list = JSON.parse(localStorage.getItem("profile")).profile;
const user_id = JSON.parse(localStorage.getItem("user_id"))[0].user_id;
// 현재 사용자 프로필 아이디
const my_profile_id = 2;

// console.log(JSON.parse(localStorage.getItem("user_id"))[0].user_id);
favoriteStore.user_id = user_id;

// 주어진 배열에서 my_profile_id와 일치하는 객체가 가장 앞으로 오도록 정렬
profile_list.sort(function (a, b) {
  if (a.profile_id === my_profile_id) {
    return -1; // a를 먼저 위치하도록 정렬
  } else if (b.profile_id === my_profile_id) {
    return 1; // b를 먼저 위치하도록 정렬
  } else {
    return 0; // 순서를 변경하지 않음
  }
});

console.log("프로필 리스트", profile_list);

// 레시피 아이디 리스트를 가져오는 비동기 함수
const get_Favorite_recipe_id = async (profile_id) => {
  try {
    const Favorite_recipe_id = await accountService.getFavorite_recipe_userid(
      user_id,
      profile_id
    );
    // console.log("즐겨찾기 레시피 정보", Favorite_recipe_id);
    return Favorite_recipe_id;
  } catch (err) {
    error.value = err.message;
    throw err;
  }
};

// 레시피 아이디로 레시피 정보를 가져오는 비동기 함수
// const get_Favorite_recipe = async (recipe_id) => {
//   try {
//     const Favorite_recipe_Data = await accountService.getUserRecipe_RecipeId(
//       recipe_id
//     );
//     // console.log("즐겨찾기 레시피 정보", Favorite_recipe_Data);
//     return Favorite_recipe_Data[0];
//   } catch (err) {
//     error.value = err.message;
//     throw err;
//   }
// };

const members_favorite_list = ref([]);
watch(members_favorite_list, (newValue, oldValue) => {
  // newValue: 변경된 값
  // oldValue: 이전 값

  // 예제: 변경된 값 콘솔에 출력
  console.log("members_favorite_list 변경:", oldValue, newValue);
});

const fetchData = async () => {
  try {
    const memberFavorites = [];

    // profile_list를 돌면서 각 멤버의 즐겨찾기 리스트를 구성
    for (const profile of profile_list) {
      const profile_favorite = {};
      const profile_id = profile.profile_id;

      // 프로필 아이디로 즐겨찾기 레시피 아이디들 받아오기
      const favorite_recipes_id = await get_Favorite_recipe_id(profile_id);
      console.log("dsadadadasd", favorite_recipes_id);
      const favorite_recipes = [];
      // recipe_id 리스트 for 문 돌면서 recipe정보 가져오기
      // for (const recipe_id of favorite_recipes_id) {
      //   const recipe_data = await get_Favorite_recipe(recipe_id.recipe_id);
      //   favorite_recipes.push(recipe_data);
      // }
      for (const recipe_id of favorite_recipes_id) {
        console.log(
          "레시피 데이터 객체로 뽑기",
          recipe_id,
          "ㄱ갳게",
          useRecipeStore.recipes_object
        );
        // favorite_recipes.push(useRecipeStore.recipes_object[recipe_id]);
      }

      // 프로필 아이디 저장
      profile_favorite["profile_id"] = profile_id;
      // 즐겨찾기 레시피들을 해당 멤버의 즐겨찾기 리스트에 추가
      profile_favorite["favorite_list"] = favorite_recipes;

      // 만들어진 객체 전체 리스트에 삽입
      memberFavorites.push(profile_favorite);
    }

    members_favorite_list.value = memberFavorites;
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

onBeforeMount(() => {
  fetchData();
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
