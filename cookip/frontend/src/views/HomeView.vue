<template>
  <div class="container">
    <!-- <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
    <h2>
      추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 사용자 맞춤형
      페이지
    </h2> -->
    <RouterLink class="navigation-link" :to="{ name: 'my-favorite' }">
      즐겨찾기 보러 가기
    </RouterLink>
    <br><br>
    <div class="message-box">
      <div class="message">
        <span class="greeting">레시피님 안녕하세요!</span>
      </div>
      <br>
      <div>
        <RecommendCategory />
        레시피 추천 카테고리 캐로셀 선택된 추천 카테고리를 기준으로 아래 요리
        미리보기 제공
      </div>
    </div>
    <RouterLink class="navigation-link" :to="{ name: 'recipe' }">
      추천 레시피 보러 가기
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RecommendCategory from "@/components/home/RecommendCategory.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #795548; /* 배경색 설정 */
}

.navigation-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.message-box {
  background-color: #ffcc80; /* 새로운 배경색 설정 */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
}

.message {
  margin-bottom: 10px;
}

.greeting {
  font-size: 24px;
  color: #eb4c4c;
}

</style>
