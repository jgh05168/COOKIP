<template>
  <div class="home">
    <!-- <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
    <h2>
      추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 사용자 맞춤형
      페이지
    </h2> -->
    <div class="go-favorite">
      아래로 스와이프
      <RouterLink :to="{ name: 'my-favorite' }">      
        <div class="link-container">
        <span class="link-text">즐겨찾기 보러 가기</span>
        <i class="fas fa-bookmark"></i> <!-- Font Awesome 아이콘 사용 -->
      </div></RouterLink>
    </div>
    <div class="user-info">안녕하세요! 레시피님</div>
    <div class="divide"></div>
    <div class="recommand">
      <RecommendCategory />
    </div>
    <div class="go-recommand">
      <RouterLink :to="{ name: 'recipe' }">
        <div class="link-container">
        <span class="link-text">위로 스와이프 추천 리스트 전체 보기</span>
        <i class="fas fa-utensils"></i> <!-- Font Awesome 아이콘 사용 -->
      </div></RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RecommendCategory from "@/components/home/RecommendCategory.vue";
</script>

<style scoped>
.home {
  position: relative;
  width: 1920px;
  height: 1080px;
}

.go-favorite {
  position: absolute;
  width: 200px;
  height: 30px;
  color: #efebe9;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  background-color: #8d6e63;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  top: 0px;
  right: 5%;
}
.go-recommand {
  position: absolute;
  width: 300px;
  height: 30px;
  color: #efebe9;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  background-color: #8d6e63;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  bottom: 0px;
  right: 42%;
}
.user-info {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  font-size: 45px;
  font-weight: bolder;
  color: #4e342e;
}

.divide {
  background-color: #795548;
  height: 10px;
  opacity: 0.6;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
}

.recommand {
}

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
