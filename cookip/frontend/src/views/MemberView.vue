<template>
    <div class="member_background">
        <div style="text-align: center; margin: 100px auto;">
            <h1 class="text">Choose a profile through hand motions</h1>
        </div>
        <MemberList />
        <CreateMemberQR />
        <!-- <RouterLink :to="{name:'home'}">사용자 home 으로 가기</RouterLink> -->
    </div>
</template>

<script setup>
// import { RouterLink } from 'vue-router';
import MemberList from '@/components/member/MemberList.vue';
import CreateMemberQR from '@/components/create/CreateMemberQR.vue';


</script>

<style scoped>
.member_background {
  /* 백그라운드 이미지 설정 */
  background-image: url('@/assets/image/member_background.png'); /* @는 src 경로를 나타냅니다. */
  /* 이미지가 꽉 채우도록 설정 */
  background-size: cover;
  /* 이미지가 반복되지 않도록 설정 */
  background-repeat: no-repeat;
  /* 이미지가 가운데 정렬되도록 설정 */
  background-position: center;
  /* 배경 색상 fallback 설정 (이미지가 로드되지 않을 경우) */
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.text {
    color: #B6A57B; 
    font-size: xx-large;
}
</style>