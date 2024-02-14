<template>
  <div class="container">
    <div style="display: fixed">
      <RouterLink :to="{ name: 'get-start' }">main</RouterLink> |
      <RouterLink :to="{ name: 'mobile-home' }">home</RouterLink> |
      <RouterLink :to="{ name: 'member' }">member</RouterLink> |
      <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
      <RouterLink :to="{ name: 'create-member' }">servey</RouterLink>
    </div>
    <div class="profile">
      <!-- <v-card-group class="text-center">
        <v-card v-for="(profile, idx) in profilelist" :key="idx" class="ma-2" style="width: 150px; height: 150px;">
          <img :src="getBufferImage(profile.profile_img)" alt="">
          {{ profile.profile_name }}
        </v-card>
      </v-card-group> -->
      <img @click="makeprofile" style="display: flex; justify-content: center; align-items: center;" :src="require(`@/assets/profile_create.png`)" alt="" />
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// import { useAuthStore } from '@/store/auth';
import { useRouter } from "vue-router";
const router = useRouter();

const makeprofile = function() {
  router.push({name:'mobile-make-profile'})
}
// const profilelist = ref(localStorage.getItem(`profile`))
// import { onBeforeMount } from 'vue';
// import accountService from "@/store/mvpApi";

// onBeforeMount(async () => {
//     try {
//         useAuthStore.profile = await accountService.getUserProfile(localStorage.getItem("user_id"))
//         console.log(useAuthStore.profile)
//         console.log(localStorage.getItem("user_id"))
//     } catch (error) {
//         console.error("Error fetching user profile:", error.message);
//     }
// })

// const getBufferImage = (buffer) => {
//   console.log(buffer)
//   if (buffer && buffer.data instanceof Array) {
//     const uint8Array = new Uint8Array(buffer.data);
//     const blob = new Blob([uint8Array], { type: "image/jpeg" });
//     return URL.createObjectURL(blob);
//   }
//   return null;
// };
</script>

<style scoped>
.container {
  width: 360px;
  height: 780px;
}

.profile {
  widows: 360px;
  height: 756px;
  background-color: #8d6e63;
}

.text-center {
  display: flex;
  justify-content: space-between;
}
</style>
