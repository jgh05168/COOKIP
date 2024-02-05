<!-- components/Modal.vue -->
<template>
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-container">
        <!-- 모달 내용 -->
        <div class="modal-content">
          <!-- 모달 내용이 들어갈 부분 -->
          <p>모달 내용...</p>
        </div>
        <!-- 닫기 버튼 -->
        <button @click="closeModal">닫기</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const visible = ref(false);
  
  const closeModal = () => {
    // 모달을 닫는 메서드
    visible.value = false;
  };
  </script>
  
  <style scoped>
  /* 모달 스타일링 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-container {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .modal-content {
    /* 모달 내용의 스타일링 */
  }
  </style>
  