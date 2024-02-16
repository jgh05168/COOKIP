<template>
  <div v-show="Islogin == 0">
    <LoginHomeForm />
  </div>
  <div v-show="Islogin == 1">
    <LogoutHomeForm />
  </div>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation v-model="value" bg-color="color" mode="shift">
      <v-btn width="120px">
        <v-icon>mdi-domain</v-icon>
        <RouterLink :to="{ name: 'get-start' }" style="color: #f18842"
          >main</RouterLink
        >
      </v-btn>

      <v-btn width="120px">
        <v-icon>mdi-home-circle</v-icon>
        <RouterLink :to="{ name: 'mobile-home' }" style="color: #f18842"
          >home</RouterLink
        >
      </v-btn>

      <v-btn width="120px">
        <v-icon>mdi-face-man-profile</v-icon>
        <RouterLink :to="{ name: 'my-profile' }" style="color: #f18842"
          >my-profile</RouterLink
        >
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import LoginHomeForm from "@/components/auth/LoginHomeForm.vue";
import LogoutHomeForm from "@/components/auth/LogoutHomeForm.vue";

const Islogin = localStorage["Islogin"];

const value = ref("");
</script>

<style scoped></style>
