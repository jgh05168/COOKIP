<template>
  <div class="member_background">
    <div style="text-align: center; margin: 100px auto">
      <h1 class="text">Choose a profile through hand motions</h1>
    </div>
    <MemberList />
    <CreateMemberQR />
    <!-- <RouterLink :to="{name:'home'}">사용자 home 으로 가기</RouterLink> -->
  </div>
</template>

<script setup>
// import { RouterLink } from 'vue-router';
import MemberList from "@/components/member/MemberList.vue";
import CreateMemberQR from "@/components/create/CreateMemberQR.vue";
</script>

<style scoped>
.member_background {
  background-color: #fdf8ec;
}

.text {
  color: #b6a57b;
  font-size: xx-large;
}
</style>
