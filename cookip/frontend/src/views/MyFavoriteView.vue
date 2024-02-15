<template>
  <v-card color="basil" class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h1 text-basil">FAVORiTE</h1>
    </v-card-title>
    <button @click="prevtab">prevtab</button>
    <button @click="nexttab">nexttab</button>
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
          v-for="(profile, idx) in profile_list"
          :key="profile.profile_id"
          :value="idx"
          style="font-size: 30px; font-weight: bold"
          class="tab"
          :class="{ 'active-tab': tab == idx }"
        >
          <!-- {{ profile }} -->
          <div class="tab-inner d-flex">
            <v-img
              :src="getBufferImage(profile.profile_img)"
              :aspect-ratio="1 / 1"
              style="width: 50px"
              class="profile-thumbnail"
            ></v-img>
            <span class="profile-name">{{ profile.profile_nickname }}</span>
          </div>
        </v-tab>
      </v-tabs>
      <!-- 탭과 v-model 로 양방향 바인딩 해주고 -->
      <v-window
        class="favorite-window"
        v-model="tab"
        style="width: 1600px; height: 100%"
      >
        <!-- 멤버리스트별 레시피 목록들을 돌면서 탭의 멤버와 value로  -->
        <div class="carousel-box" v-if="members_favorite_list.length > 0">
          <v-window-item
            style="height: 800px"
            v-for="(favorite, idx) in members_favorite_list"
            :key="favorite.profile_id"
            :value="idx"
            class="window-item"
            transition="slide-y-transition"
            reverse-transition="slide-y-reverse-transition"
          >
            <!-- 멤버 리스트 별로 즐겨찾기 목록을 보여준다 -->
            <FavoriteList
              :recipe-list="favorite.favorite_list"
              :nexttab="nexttab"
              :prevtab="prevtab"
              :tab="tab"
              :favorite-list="members_favorite_list"
            />
          </v-window-item>
        </div>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import { ref, onBeforeMount, watch, computed } from "vue";
import { useFavoriteStore } from "@/store/favorite";
import FavoriteList from "@/components/home/FavoriteList.vue";
import accountService from "@/store/mvpApi";
import { useRecipeStore } from "@/store/recipe";

const favoriteStore = useFavoriteStore();
const recipeStore = useRecipeStore();
const error = ref("");
const tab = ref(0);

const profile_list = JSON.parse(localStorage.getItem("profile")).profile;
const user_id = JSON.parse(localStorage.getItem("user_id"));
// 현재 사용자 프로필 아이디
// const my_profile_id = JSON.parse(localStorage.getItem("cur_profile")).profile_id;
const my_profile_id = 2;

// console.log(JSON.parse(localStorage.getItem("user_id"))[0].user_id);
favoriteStore.user_id = user_id;

// 탭 조작 함수
const canGoNextPage = computed(() => tab.value < profile_list.length);

const canGoPreviousPage = computed(() => tab.value > 0);

const arrow = ref("next");

const nexttab = () => {
  arrow.value = "next";
  if (canGoNextPage.value) {
    tab.value++;
  }
  // console.log(tab.value);
};

const prevtab = () => {
  arrow.value = "prev";
  if (canGoPreviousPage.value) {
    tab.value--;
  }
  // console.log(tab.value);
};
// 탭 조작 함수 끝

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
    const Favorite_recipe_id =
      await accountService.getFavorite_recipe_userid_profileid(
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

      const favorite_recipes = [];
      // recipe_id 리스트 for 문 돌면서 recipe정보 가져오기
      // for (const recipe_id of favorite_recipes_id) {
      //   const recipe_data = await get_Favorite_recipe(recipe_id.recipe_id);
      //   favorite_recipes.push(recipe_data);
      // }
      for (const recipe_id of favorite_recipes_id) {
        // console.log(
        //   "레시피 데이터 객체로 뽑기",
        //   recipeStore.recipes_object,
        //   recipe_id
        // );
        let id = recipe_id.recipe_id;
        // console.log("객체 접근 확인", recipeStore.recipes_object[id]);
        favorite_recipes.push(recipeStore.recipes_object[id]);
      }

      console.log(profile_id, "님의 즐겨찾기 목록 : ", favorite_recipes);

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

.tab {
  width: 100%;
  margin: 5px auto;
  transition: 0.5s ease-in;
  color: #fdf8ec;
}

.carousel-box {
}

.profile-thumbnail {
  border-radius: 50%;
  margin-right: 10px;
}

/* 활성화된 탭의 배경색과 텍스트 색상을 변경하여 강조 */
.active-tab {
  height: 300px !important;
  background-color: #fdf8ec4b;
  transition: height 0.5s ease-in-out; /* 높이 변경에 대한 트랜지션 설정 */
}
/* 활성화 된 탭의 내용 변경 */
.active-tab .tab-inner {
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10px;
  transition: transform 0.5s ease-in-out; /* 내용 변경에 대한 트랜지션 설정 */
}
/* 황설화된 탭의 내용 중 이미지의 스타일 변경 */
.active-tab .tab-inner .profile-thumbnail {
  width: 200px !important;
  border-radius: 30%;
  transition: width 0.5s ease-in-out; /* 이미지 크기 변경에 대한 트랜지션 설정 */
}

.active-tab .tab-inner .profile-name {
  margin-bottom: 10px;
  color: #32231e;
  font-weight: bold;
  font-size: 40px;
}
.window-item {
  transition: transform 0.5s ease;
}

.move-next {
  transition: transform 0.5s ease-in-out;
}

.move-prev {
  transition: transform 0.5s ease-in-out;
}
.move-next-enter-active,
.move-prev-enter-active {
  transition: transform 0.5s ease-in-out;
}

.move-next-leave-active,
.move-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}

.move-next-enter,
.move-next-leave-to {
  transform: translateY(100%);
}

.move-prev-enter,
.move-prev-leave-to {
  transform: translateY(-100%);
}
</style>
