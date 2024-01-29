<template>
    <div>
        로그인 되어 있을 때 나타나는 컴포넌트 멤버 리스트로 넘어갈 수 있음
    </div>
    <RouterLink :to="{name:'member'}">멤범 선택 리스트</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>