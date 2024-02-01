<template>
  <div>
    <div>
      <!-- <h1>hello, APP.vue</h1> -->
    </div>
    <RouterLink :to="{name:'main'}"></RouterLink>
    <RouterLink :to="{name:'home'}"></RouterLink>
    <RouterLink :to="{name:'CardBack'}"></RouterLink>
    <RouterLink :to="{name:'CardFront'}"></RouterLink>
    <RouterLink :to="{name:'member'}"></RouterLink>
    <RouterLink :to="{name:'my-profile'}"></RouterLink>
    <RouterLink :to="{name:'recipe'}"></RouterLink>
    <RouterLink :to="{name:'subTitle'}"></RouterLink>
    <RouterLink :to="{name:'search'}"></RouterLink>
    <div>
      <RouterView />
    </div>
</div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
// export default {
//   data() {
//     return {
//       dynamicRecipeId: 'yourDynamicRecipeId', // 여기에 동적으로 결정되는 값 설정
//     };
//   },
// };
</script>

<style scoped>

</style>