<template>
  <div style="display: fixed;">
    <RouterLink :to="{ name: 'get-start' }">main</RouterLink> |
    <RouterLink :to="{ name: 'mobile-home' }">home</RouterLink> |
    <RouterLink :to="{ name: 'member' }">member</RouterLink> |
    <RouterLink :to="{ name: 'my-profile' }">my-profile</RouterLink> |
    <RouterLink :to="{ name: 'create-member' }">servey</RouterLink> 
  </div>
  <div style="width: 360px;">
    <PhoneNumberForm v-if="currentFormIndex === 0" :show-next="showNextForm" :show-back="showbackForm"/>
    <NewLoginForm v-if="currentFormIndex === 1" :show-next="showNextForm" :show-back="showbackForm"/>
    <EmailForm v-if="currentFormIndex === 2" :show-next="showNextForm" :show-back="showbackForm"/>
    <BasicForm v-if="currentFormIndex === 3" :show-next="showNextForm" :show-back="showbackForm"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PhoneNumberForm from "@/components/auth/PhoneNumberForm.vue";
import NewLoginForm from "@/components/auth/NewLoginForm.vue";
import EmailForm from "@/components/auth/EmailForm.vue";
import BasicForm from "@/components/auth/BasicForm.vue";
const currentFormIndex = ref(0);

const showNextForm = () => {
  currentFormIndex.value += 1;
};

const showbackForm = () => {
  currentFormIndex.value -= 1;
};
</script>

<style scoped>

</style>