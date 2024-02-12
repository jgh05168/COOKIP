<template>
  <div class="main-background"></div>
</template>

<script setup></script>

<style scoped>
.main-background {
    /* 백그라운드 이미지 설정 */
  background-image: url('@/assets/image/home_background.png');
  /* 이미지가 꽉 채우도록 설정 */
  background-size: cover;
  /* 이미지가 반복되지 않도록 설정 */
  background-repeat: no-repeat;
  /* 이미지가 가운데 정렬되도록 설정 */
  background-position: center;
  /* 배경 색상 fallback 설정 (이미지가 로드되지 않을 경우) */
  width: 1920px;
  height: 1080px;
  overflow: hidden;
}
</style>
