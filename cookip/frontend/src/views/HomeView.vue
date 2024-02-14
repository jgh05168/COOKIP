<template>
  <div class="container">
    <!-- <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
    <h2>
      추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 사용자 맞춤형
      페이지
    </h2> -->
    <RouterLink class="navigation-link" :to="{ name: 'my-favorite' }">
      <div class="link-container">
        <span class="link-text">즐겨찾기 보러 가기</span>
        <i class="fas fa-bookmark"></i> <!-- Font Awesome 아이콘 사용 -->
      </div>
    </RouterLink>
    <br><br>
    <div class="message-box">
      <div class="message">
        <span class="greeting">레시피님 안녕하세요!</span>
      </div>
      <br>
      <div>
        <RecommendCategory />
      </div>
    </div>
    <RouterLink class="navigation-link" :to="{ name: 'recipe' }">
      <div class="link-container">
        <span class="link-text">추천 레시피 보러 가기</span>
        <i class="fas fa-utensils"></i> <!-- Font Awesome 아이콘 사용 -->
      </div>
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
  font-weight: bold; /* 텍스트를 강조하기 위해 폰트 두껍게 설정 */
  text-transform: uppercase; /* 텍스트를 대문자로 변환하여 강조 */
}

/* 이전 스타일은 그대로 두고 아래에 추가 */
.link-container {
  display: flex;
  align-items: center;
}

.link-text {
  margin-right: 10px;
}

/* Font Awesome 아이콘을 사용하기 위해 CDN 링크를 추가하고 해당 아이콘에 대한 스타일링 */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

</style>
