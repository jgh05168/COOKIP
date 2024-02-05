<template>
    <div class="app">
      <div v-if="state.account.id">
        <p>안녕하세요? {{ state.account.name }}님!</p>
        <button @click="logout()">로그아웃</button>
      </div>
      <div v-else>
        <label for="loginId">
          <span>아이디</span>
          <input type="text" id="loginId" v-model="state.form.loginId" />
        </label>
        <label for="loginPw">
          <span>패스워드</span>
          <input type="password" id="loginPw" v-model="state.form.loginPw" />
        </label>
        <hr />
        <button @click="submit()">로그인</button>
      </div>
    </div>
  </template>
  
  <script setup>
    import { reactive, onBeforeMount, ref } from "vue";
    import { useUserStore } from "@/store/auth";
    import UserService from '@/store/auth';
    const error = ref("");
    const userstore = useUserStore();

const get_users = async () => {
  try {
    const userdata = await UserService.getUser();
    userstore.users = userdata

  } catch (err) {
    error.value = err.message;
  }
};

onBeforeMount( async () => {
    await get_users()
})

const state = reactive({
    account: {
        id: null,
        name: "",
    },
    form: {
        loginId: "",
        loginPw: "",
    },
});

    
</script>