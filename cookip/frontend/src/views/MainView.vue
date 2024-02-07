<template>

    <div>
        <!-- <h1>기본페이지입니다</h1>
=========

        <form action="http://localhost:5000/user/insertUser" method="post">
        <label for="login_id">login_id:</label>
        <input type="text" id="login_id" name="login_id">
        <label for="password">password:</label>
        <input type="text" id="password" name="password">
        <label for="username">username:</label>
        <input type="text" id="username" name="username">
        <label for="email">email:</label>
        <input type="text" id="email" name="email">
        <label for="age">age:</label>
        <input type="text" id="age" name="age">
        <label for="phone_number">phone_number:</label>
        <input type="text" id="phone_number" name="phone_number">
        <button type="submit">Submit</button>
    </form> -->

    <!-- <form action="http://localhost:5000/user/chefFollow" method="post">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <label for="chef_id">chef_id:</label>
        <input type="text" id="chef_id" name="chef_id">
        <button type="submit">Submit</button>
    </form> -->


    <!-- <form action="http://localhost:5000/user/foodFollow" method="post">
        <label for="recipe_id">recipe_id:</label>
        <input type="text" id="recipe_id" name="recipe_id">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <button type="submit">Submit</button>
    </form> -->

    <!-- <form action="http://localhost:5000/user/categoryFollow" method="post">
        <label for="category_id">category_id:</label>
        <input type="text" id="category_id" name="category_id">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <button type="submit">Submit</button>
    </form> -->


    <!-- <form action="http://localhost:5000/user/allergy" method="post">
        <label for="ingredient_id">ingredient_id:</label>
        <input type="text" id="ingredient_id" name="ingredient_id">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="allergy">allergy:</label>
        <input type="text" id="allergy" name="allergy">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <button type="submit">Submit</button>
    </form> -->


    <!-- <form action="http://localhost:5000/user/ingredientFollow" method="post">
        <label for="ingredient_id">ingredient_id:</label>
        <input type="text" id="ingredient_id" name="ingredient_id">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <button type="submit">Submit</button>
    </form> -->

    <form action="http://localhost:5000/user/score" method="post">
        <label for="recipe_id">recipe_id:</label>
        <input type="text" id="recipe_id" name="recipe_id">
        <label for="profile_id">profile_id:</label>
        <input type="text" id="profile_id" name="profile_id">
        <label for="score">score:</label>
        <input type="text" id="score" name="score">
        <label for="user_id">user_id:</label>
        <input type="text" id="user_id" name="user_id">
        <button type="submit">Submit</button>
    </form> -->

        <div>
            <h1>기본페이지입니다</h1>
            <h2>만약 기기에 로그인 정보가 기록되어 있지 않다면 auth 게정
                설정 관련 QR 코드를 보여주는 페이지를 제시합니다
            </h2>
            <h2>만약 로그인 되어있다면 대표 화면을 보여줍니다.</h2>
            <h1>여기서 사용자 얼굴인식을 통하여 현재 사용자 정보를 저장해 둡니다</h1>
            <h1>여기서는 STT와 모션인식을 통해 다른 화면이나 기능으로 넘어갈 수 있습니다</h1>
            <div v-if="userValid">
                <SignedIn />
            </div>
            <div v-else>
                <LoginRequired />
            </div>
        </div>
    </div>
</template>

<script setup>
import LoginRequired from '@/components/main/LoginRequired.vue'
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
import { ref } from 'vue';

const userValid = ref(false)


</script>

<style scoped>



</style>