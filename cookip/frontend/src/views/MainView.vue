<template>
  <div class="main">
    <LoginRequired />
  </div>
</template>

<script setup>
import LoginRequired from "@/components/main/LoginRequired.vue";
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
// import { ref } from "vue";

// const userValid = ref(true);
</script>

<style scoped>
.main {
  position: relative;
  width: 1920px;
  height: 1080px;
  background-color: #fffbe6;
  display: flex;
  justify-content: center;
  align-items: center;
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
