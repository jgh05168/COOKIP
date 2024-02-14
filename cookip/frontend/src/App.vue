<template>
  <div>
    <div style="width: 360px; display: fixed">
      <RouterLink :to="{ name: 'get-start' }">main</RouterLink> |
      <RouterLink :to="{ name: 'mobile-home' }">home</RouterLink> |
      <RouterLink :to="{ name: 'member' }">member</RouterLink> |
      <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
      <RouterLink :to="{ name: 'create-member' }">servey</RouterLink>
    </div>
    <div style="width: 360px; display: fixed">
      <RouterLink :to="{ name: 'main' }">main</RouterLink> |
      <RouterLink :to="{ name: 'home' }">home</RouterLink> |
      <RouterLink :to="{ name: 'member' }">member</RouterLink> |
      <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
      <RouterLink :to="{ name: 'create-member' }">servey</RouterLink>
    </div>
    <div class="screen">
      <!-- <div v-if="motionStore.motion_data=='SwipeUp'"> -->
      <transition :name="motionStore.transition_dir" mode="out-in">
        <RouterView />
      </transition>
    </div>
    <!-- <input v-model="text" type="text" />
    <img :src="qrcode" alt=""> -->
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onBeforeMount, onMounted, onBeforeUnmount, ref } from "vue";
import { useMotionStore } from "@/store/motion";
import { useSttStore } from "@/store/stt";
import { useRecipeStore } from "@/store/recipe";
import accountService from "@/store/mvpApi";
import { useFavoriteStore } from "@/store/favorite";

const Favoritestore = useFavoriteStore();
const recipestore = useRecipeStore();
const socket = new WebSocket("ws://localhost:8002");
const motionStore = useMotionStore();
const sttStore = useSttStore();
const error = ref("");
if (localStorage.getItem("Islogin") === null) {
  localStorage.setItem("Islogin", 0);
}
const get_all_recipes = async () => {
  try {
    const recipeData = await accountService.getUserRecipe();
    recipeData.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    Favoritestore.recipes = recipeData;
    recipestore.recipes = recipeData;
  } catch (err) {
    error.value = err.message;
  }
};


const get_all_ingredients = async () => {
  try {
    const all_ingredients = await accountService.getUseringredient();
    recipestore.user_ingredients = all_ingredients;
  } catch (err) {
    error.value = err.message;
  }
};

const get_all_category = async () => {
  try {
    const categoryData = await accountService.getUsercategory();
    console.log("getgeyget", categoryData);
    recipestore.user_category = categoryData; // 이거 스토어 recipe.js와 같아야함
    console.log("get_확인", recipestore.user_category);
  } catch (err) {
    error.value = err.message;
  }
};

const get_all_recipes_ingredients = async () => {
  try {
    const recipe_ingredientData =
      await accountService.getUserrecipe_ingredient();
    recipe_ingredientData.forEach((ingredient) => {
      const matchingRecipe = recipestore.recipes.find(
        (recipe) => recipe.recipe_id === ingredient.recipe_id
      );
      matchingRecipe.ingredient.push(ingredient.ingredient_id);
    });
    console.log(recipestore.recipes);
  } catch (err) {
    error.value = err.message;
  }
};

const get_useIngredient_recipe = async () => {
  try {
    const useIngredient_recipeData =
      await accountService.getUserrecipe_ingredient_UseRecipe_IngredientId(1);
    useIngredient_recipeData.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    recipestore.useIngredient_recipe = useIngredient_recipeData;
    console.log(recipestore.useIngredient_recipe);
  } catch (err) {
    error.value = err.message;
  }
};

const get_score = async () => {
  try {
    const score_Data = await accountService.getScore();
    score_Data.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    recipestore.score = score_Data;
    console.log(recipestore.score);
  } catch (err) {
    error.value = err.message;
  }
};

const get_Allergy = async () => {
  try {
    const Allergy_Data = await accountService.getAllergy();
    Allergy_Data.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    recipestore.Allergy = Allergy_Data;
    console.log(recipestore.Allergy);
  } catch (err) {
    error.value = err.message;
  }
};

const get_Follow = async () => {
  try {
    const Follow_Data = await accountService.getFollow();
    Follow_Data.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    recipestore.Follow = Follow_Data;
    console.log(recipestore.Follow);
  } catch (err) {
    error.value = err.message;
  }
};

const get_Favorite_category = async () => {
  try {
    const Favorite_category_Data = await accountService.getFavorite_category();
    recipestore.Favorite_category = Favorite_category_Data;
    console.log(recipestore.Favorite_category);
  } catch (err) {
    error.value = err.message;
  }
};

const get_Favorite_ingredient = async () => {
  try {
    const Favorite_ingredient_Data =
      await accountService.getFavorite_ingredient();
    Favorite_ingredient_Data.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    recipestore.Favorite_ingredient = Favorite_ingredient_Data;
    console.log(recipestore.Favorite_ingredient);
  } catch (err) {
    error.value = err.message;
  }
};

const get_Favorite_recipe = async () => {
  try {
    const Favorite_recipe_Data = await accountService.getFavorite_recipe();
    Favorite_recipe_Data.forEach((recipe) => {
      if (!Object.prototype.hasOwnProperty.call(recipe, "ingredient")) {
        recipe.ingredient = [];
      }
    });
    Favoritestore.Favorite_recipe = Favorite_recipe_Data;
    recipestore.Favorite_recipe = Favorite_recipe_Data;
    console.log(recipestore.Favorite_recipe);

  } catch (err) {
    error.value = err.message;
  }
};

const handleWebSocketMessage = async (e) => {
  try {
    if (e !== null && e !== undefined) {
      //   console.log(e.data)
      const result = await JSON.parse(e.data);
      // console.log(result["data"]);
      // 데이터 다음과 같이 받아옴 type 이 뭔지에 따라서 motion, stt store 에 저장
      //   {
      //     "type": "Motion",
      //     "data": {
      //         "swipe": "SwipeRight",
      //         "page": null,
      //         "rating": null,
      //         "zoom": "ZoomIn",
      //         "flip": "Flip"
      //     }
      // }
      if (result["type"] == "Motion") {
        // 만약 "Motion" 타입으로 들어올 경우 데이터를 motion store에 저장
        motionStore.motion_data = result["data"];
      } else {
        // 만약 "STT" 타입으로 들어올 경우 데이터를 motion store에 저장
        sttStore.stt_data = result["data"];
      }
    } else {
      console.log("돌아가");
    }
  } catch (err) {
    console.error(err);
  }
};

onBeforeMount(async () => {
  await get_all_ingredients(),
    await get_all_recipes(),
    await get_all_recipes_ingredients(),
    await get_all_category(),
    await get_useIngredient_recipe(),
    await get_score(),
    await get_Allergy(),
    await get_Follow(),
    await get_Favorite_category(),
    await get_Favorite_ingredient(),
    await get_Favorite_recipe()

});


onMounted(() => {
  // 컴포넌트가 마운트된 후 실행되는 로직
  console.log("App Mount");

  // 웹소켓 연결 설정
  socket.onopen = () => {
    console.log("웹소켓(모션 인식) 연결이 열렸습니다.");
  };

  // 데이터를 수신 받았을 때의 처리
  socket.onmessage = handleWebSocketMessage;

  // 에러가 발생했을 때의 처리
  socket.onerror = (e) => {
    console.error("웹소켓(모션 인식) 에러:", e);
  };
})


onBeforeUnmount(() => {
  // 컴포넌트가 파괴되기 전에 웹소켓 연결을 닫음
  socket.close();
  console.log("앱 Unmount");
});
</script>

<style scoped>
.screen {
  width: 360px;
}

.bar {
  display: absolute;
  height: 30px;
}
.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-down-enter-from {
  transform: translateY(-100%);
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-up-enter-active,
.slide-down-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
  transition: transform 0.5s ease-in-out;
}
</style>
