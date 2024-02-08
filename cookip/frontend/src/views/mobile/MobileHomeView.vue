<template>
    <div v-show="Islogin == 0">
        <LoginHomeForm />
    </div>
    <div v-show="Islogin == 1">
        <LogoutHomeForm />
    </div>
</template>

<script setup>
import LoginHomeForm from '@/components/auth/LoginHomeForm.vue'
import LogoutHomeForm from '@/components/auth/LogoutHomeForm.vue';


const Islogin = localStorage["Islogin"]
</script>

<style scoped>

</style>