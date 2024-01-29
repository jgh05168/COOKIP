<template>
    <div>
        <h1>기본페이지입니다</h1>
        <h2>만약 기기에 로그인 정보가 기록되어 있지 않다면 auth 게정
            설정 관련 QR 코드를 보여주는 페이지를 제시합니다
        </h2>
        <h2>만약 로그인 되어있다면 대표 화면을 보여줍니다.</h2>
        <h1>여기서 사용자 얼굴인식을 통하여 현재 사용자 정보를 저장해 둡니다</h1>
        <h1>여기서는 STT와 모션인식을 통해 다른 화면이나 기능으로 넘어갈 수 있습니다</h1>
        <LoginRequired />
        <SignedIn />
    </div>
</template>

<script setup>
import LoginRequired from '@/components/main/LoginRequired.vue'
import SignedIn from '@/components/main/SignedIn.vue'


</script>

<style scoped>

</style>