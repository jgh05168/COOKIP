import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const urlUser = 'http://localhost:5000/User';
const urlUserProfile = 'http://localhost:5000/Users_Profile';

export const useAuthStore = defineStore('auth', () => {
  const memberList = ref([]);
  const userProfileList = ref([]);

  const fetchUserData = async () => {
    try {
      const userResponse = await axios.get(urlUser);
      const userProfileResponse = await axios.get(urlUserProfile);

      memberList.value = userResponse.data;
      userProfileList.value = userProfileResponse.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMounted(() => {
    fetchUserData();
  });

  return {
    memberList,
    userProfileList,
  };
}, { persist: true });
