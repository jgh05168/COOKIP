<template>
    <div>
        <LoginRequired />
    </div>
  </div>
</template>

<script setup>
import LoginRequired from "@/views/mobile/GetStartView.vue";
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';


// const userValid = localStorage.getItem('Islogin')



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
