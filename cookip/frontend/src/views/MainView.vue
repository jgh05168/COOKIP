<template>
    <div>
<<<<<<< HEAD
        <!-- <h1>기본페이지입니다</h1>
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
        <div>
          <div>
            <LoginRequired />
          </div>
      </div>
=======
        <LoginRequired />
>>>>>>> 948b9a80053738f8743274a2feb3fac138c74839
    </div>
  </div>
</template>

<script setup>
import LoginRequired from "@/views/mobile/GetStartView.vue";
// import SignedIn from '@/components/main/SignedIn.vue'
// import router from '@/router';
<<<<<<< HEAD
=======


// const userValid = localStorage.getItem('Islogin')


>>>>>>> 948b9a80053738f8743274a2feb3fac138c74839

const userValid = ref(true);
</script>

<style scoped>
.member_background {
  background-color: #fffbe6;
}

.logo-box {
  padding-top: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.logo {
  width: 400px;
}

.logo-text {
  margin-top: 50px;
}
</style>
