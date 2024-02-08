<template>
    <div v-show="localStorage.loginFlag==0">
        <LoginHomeForm />
    </div>
    <div v-show="localStorage.loginFlag==1">
        <LogoutHomeForm />
    </div>
</template>

<script setup>
import LoginHomeForm from '@/components/auth/LoginHomeForm.vue'
import LogoutHomeForm from '@/components/auth/LogoutHomeForm.vue';
import { ref } from 'vue'
// import LogoutHomeForm from '@/components/auth/LogoutHomeForm.vue';
const loginFlag = ref(localStorage.getItem('loginFlag'))
console.log("모바일 홈뷰",loginFlag.value)
</script>

<style scoped>

</style>