<template>
    <div>
        <h1>사용자 선택후 넘어가는 기본 페이지 입니다</h1>
        <h2>추천 레시피, 즐겨찾기, 검색 등 다양한 기능을 이용할 수 있는 
            사용자 맞춤형 페이지
        </h2>
        <RouterLink :to="{name:'my-favorite'}">즐겨찾기</RouterLink>

        <div>
            
        </div>


        <RouterLink :to="{name:'recipe'}">레시피</RouterLink>


    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>