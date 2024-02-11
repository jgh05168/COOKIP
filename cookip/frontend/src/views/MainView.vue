<template>
  <div v-if="userValid">
    <div class="logo-box">
      <img
        class="logo"
        :src="require(`@/assets/login_image/cookip_logo.png`)"
        alt=""
      />
      <img class="logo-text" :src="require(`@/assets/text.png`)" alt="" />
    </div>
  </div>
  <div v-else>
    <LoginRequired />
  </div>
</template>

<script setup>
import LoginRequired from "@/components/main/LoginRequired.vue";
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
import { ref } from "vue";

const userValid = ref(true);
</script>

<style scoped>
.member_background {
  background-color: #fffbe6;
}

.logo-box {
  padding-top: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.logo {
  width: 400px;
}

.logo-text {
  margin-top: 50px;
}
</style>
