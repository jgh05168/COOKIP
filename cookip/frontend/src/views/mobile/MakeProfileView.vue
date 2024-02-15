<template>
    <div>
    <ProfilenicknameForm v-if="currentFormIndex === 0" :show-next="showNextForm" :show-back="showPreviousForm" />
    <ProfilerealpictureForm v-if="currentFormIndex === 1" :show-next="showNextForm" :show-back="showPreviousForm" />
    <ProfilepictureForm v-if="currentFormIndex === 2" :show-next="showNextForm" :show-back="showPreviousForm" />
    <!-- <FavoriteingredientForm v-if="currentFormIndex === 3" :show-next="showNextForm" :show-back="showPreviousForm" />
    <FavoritecategoryForm v-if="currentFormIndex === 4" :show-next="showNextForm" :show-back="showPreviousForm" />
    <allergyForm v-if="currentFormIndex === 5" :show-next="showNextForm" :show-back="showPreviousForm" /> -->
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
import ProfilenicknameForm from '@/components/auth/ProfilenicknameForm.vue';
import ProfilepictureForm from '@/components/auth/ProfilepictureForm.vue';
import ProfilerealpictureForm from '@/components/auth/ProfilerealpictureForm.vue';
// import FavoriteingredientForm from '@/components/auth/FavoriteingredientForm.vue';
// import FavoritecategoryForm from '@/components/auth/FavoritecategoryForm.vue';
// import allergyForm from '@/components/auth/allergyForm.vue';
import { ref } from 'vue';

const currentFormIndex = ref(0);

const showNextForm = () => {
  if (currentFormIndex.value < 2) {
    currentFormIndex.value += 1;
  }
};

const showPreviousForm = () => {
  if (currentFormIndex.value > 0) {
    currentFormIndex.value -= 1;
  }
};
</script>

<style scoped>

</style>