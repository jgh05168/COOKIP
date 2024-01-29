<template>
    <div>
        로그인이 안되어 있을 때 나타나는 컴포넌트
        <RouterLink :to="{name:'login'}">login 하러가기</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>

</style>