<template>
    <div style="display: fixed;">
    <RouterLink :to="{ name: 'get-start' }">main</RouterLink> |
    <RouterLink :to="{ name: 'mobile-home' }">home</RouterLink> |
    <RouterLink :to="{ name: 'member' }">member</RouterLink> |
    <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
    <RouterLink :to="{ name: 'create-member' }">servey</RouterLink> 
  </div>
  <div>
    <LoginForm/>
  </div>
</template>

<script setup>
import LoginForm from "@/components/auth/LoginForm.vue";

</script>

<style scoped>

</style>