<template>
    <div>
        <h1>여기서는 멤버리스트를 보여줍니다</h1>

        <h2>기본적으로 메인페이지에서 저장된 사용자 프로필이 선택되어있게 표시가 됩니다
            사용자가 프로필을 선택하여 다음화면으로 넘어갈 수 있도록 합니다.
        </h2>
        <h2>아니면 저장된 사용자로 바로 음성검색 및 추천 서비스를 사용할 수 있도록 합니다</h2>
    </div>
    <MemberList />
    <CreateMemberQR />
    <RouterLink :to="{name:'home'}">사용자 home 으로 가기</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import MemberList from '@/components/member/MemberList.vue';
import CreateMemberQR from '@/components/create/CreateMemberQR.vue';


</script>

<style scoped>

</style>