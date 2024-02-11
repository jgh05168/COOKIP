<template>
  <v-card color="basil" class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">FAVORiTE</h1>
    </v-card-title>

    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab v-for="member in authStore.memberList" :key="member.id" :value="1">
        {{ member }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="n in recipeStore.memberList" :key="n" :value="n">
        
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useRecipeStore } from "@/store/recipe";

const authStore = useAuthStore();
const recipeStore = useRecipeStore();

console.log(authStore.memberList.user);

// 내가 멤버리스트 중 가장 앞에 있어야 함

//

const tab = ref(null);
</script>

<style scoped>
.card {
  width: 1920px;
  height: 1080px;
}

/* Helper classes */
.bg-basil {
  background-color: #fdf8ec;
}
.text-basil {
  color: #6d4c41;
}
</style>
