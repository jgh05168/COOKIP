<template>
  <div>
    <div>
      <h1>hello, APP.vue</h1>
    </div>
    <RouterLink :to="{name:'/'}"></RouterLink>
    <div>
      <RouterView />
    </div>
</div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>

<style scoped>

</style>