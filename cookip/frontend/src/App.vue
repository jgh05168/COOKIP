<template>
  <div>
    <div>
      <h1>hello, APP.vue</h1>
    </div>
    <RouterLink :to="{ name: 'main' }">main</RouterLink> |
    <RouterLink :to="{ name: 'member' }">member</RouterLink> |
    <RouterLink :to="{ name: 'home' }">home</RouterLink> |
    <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
    <div class="screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onMounted, onBeforeUnmount, onBeforeMount, ref } from "vue";
import { useMotionStore } from "@/store/motion";
import { useSttStore } from "@/store/stt";
import accountService from '@/store/mvpApi';
import { useRecipeStore } from "@/store/recipe"

const recipestore = useRecipeStore()
const socket = new WebSocket("ws://localhost:8002");

const motionStore = useMotionStore();
const sttStore = useSttStore();

const recipes = ref([]);
const error = ref("");
  
  onBeforeMount(async () => {
    try {
      const recipeData = await accountService.getUserRecipe();
      recipes.value = recipeData;
      recipestore.recipes = recipes.value
      console.log(recipes.value)
    } catch (err) {
      error.value = err.message;
    }
  });

  onBeforeMount(async () => {
    try {
      const recipeData = await accountService.getUserRecipe();
      recipes.value = recipeData;
      recipestore.recipes = recipes.value
      console.log(recipes.value)
    } catch (err) {
      error.value = err.message;
    }
  });
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
    }
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  // 컴포넌트가 마운트된 후 실행되는 로직
  console.log("App Mount");

  // 웹소켓 연결 설정
  socket.onopen = () => {
    console.log("웹소켓 연결이 열렸습니다.");
  };

  // 데이터를 수신 받았을 때의 처리
  socket.onmessage = handleWebSocketMessage;

  // 에러가 발생했을 때의 처리
  socket.onerror = (e) => {
    console.error("웹소켓 에러:", e);
  };
});

onBeforeUnmount(() => {
  // 컴포넌트가 파괴되기 전에 웹소켓 연결을 닫음
  socket.close();
  console.log("앱 Unmount");
});
</script>

<style scoped>
.screen {
  width: 1920px;
  height: 1080px;
}
</style>
