<template>
  <div class="container">
    <div
      class="profile"
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        v-for="(profile, idx) in profile_list"
        :key="idx"
        class="ma-2"
        style="
          width: 150px;
          height: 150px;
          margin: 10px;
          flex: 0 0 calc(50% - 20px);
        "
      >
        <v-img
          aspect-ratio="1 / 1"
          :src="`${ profile.profile_img }`"
          alt=""
          style="border-radius: 30%; width: 150px"
        ></v-img>
      </div>
      <div
        class="ma-2"
        style="
          width: 150px;
          height: 150px;
          margin: 10px;
          flex: 0 0 calc(50% - 20px);
        "
      >
      <v-img 
      v-if="profile_list.length <= 5"
      @click="makeprofile"
        :src="require(`@/assets/profile_create.png`)"
        alt="">
      </v-img>
      </div>
    </div>
    <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      :bg-color="color"
      mode="shift"
    >
      <v-btn width="120px">

        <v-icon>mdi-domain</v-icon>
        <RouterLink :to="{ name: 'get-start' }" style="color: #f18842;">main</RouterLink>
      </v-btn>

      <v-btn width="120px">

        <v-icon>mdi-home-circle</v-icon>
        <RouterLink :to="{ name: 'mobile-home' }" style="color: #f18842;">home</RouterLink>
      </v-btn>

      <v-btn width="120px">

        <v-icon>mdi-face-man-profile</v-icon>
        <RouterLink :to="{ name: 'my-profile' }" style="color: #f18842;">my-profile</RouterLink>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
  </div>
</template>

<script setup>
// import { useAuthStore } from '@/store/auth';
import { useRouter } from "vue-router";

const router = useRouter();

const makeprofile = function () {
  router.push({ name: "mobile-make-profile" });
};

const profile_list = JSON.parse(localStorage.getItem("profile")).profile;
console.log(profile_list)

</script>

<style scoped>
.container {
  width: 360px;
  height: 780px;
}

.profile {
  widows: 360px;
  height: 724px;
  background-color: #a1887f;
}


</style>
