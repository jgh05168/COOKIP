<template>
    <v-card class="vertical-item-card">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ props.backInfo.name }}
          </v-card-title>
  
          <v-card-subtitle>Card_Back</v-card-subtitle>
          <v-card-text>재료 데이터</v-card-text>
          <v-card-actions>
            <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
          </v-card-actions>
        </div>
        <v-img>음식 이미지</v-img>
      </div>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    backInfo: Object,
  });
  console.log(props.backInfo)
  
  </script>
  
  <style scoped></style>
  