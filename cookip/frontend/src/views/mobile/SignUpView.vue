<template>
  <div style="width: 360px;">
    <PhoneNumberForm v-if="currentFormIndex === 0" :show-next="showNextForm" :show-back="showbackForm"/>
    <NewLoginForm v-if="currentFormIndex === 1" :show-next="showNextForm" :show-back="showbackForm"/>
    <EmailForm v-if="currentFormIndex === 2" :show-next="showNextForm" :show-back="showbackForm"/>
    <BasicForm v-if="currentFormIndex === 3" :show-next="showNextForm" :show-back="showbackForm"/>
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