<template>
    <div>
        <ProfilenicknameForm />
        <ProfilepictureForm />
        <ProfilerealpictureForm />
        <FavoriteingredientForm />
        <FavoritecategoryForm />
        <allergyForm />
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

</script>

<style scoped>

</style>