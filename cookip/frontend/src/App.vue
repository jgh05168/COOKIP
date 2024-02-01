<template>
  <div>
    <div>
      <h1>hello, APP.vue</h1>
    </div>
    <RouterLink :to="{ name: 'main' }">main</RouterLink> |
    <RouterLink :to="{ name: 'member' }">member</RouterLink> |
    <RouterLink :to="{ name: 'home' }">home</RouterLink> |
    <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
    <div class="screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped>
.screen {
  width: 1920px;
  height: 1080px;
}

</style>
