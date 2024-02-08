import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const urlUser = 'http://localhost:5000/User';
const urlUserProfile = 'http://localhost:5000/Users_Profile';

export const useAuthStore = defineStore('auth', () => {
  const memberList = ref([]);
  const userProfileList = ref([]);
  const login_info = ref()
  const profile = ref()
  
  const signup = ref({
    phonenumber:'',
    id:'',
    password:'',
    email:'',
    firstname:'',
    lastname:'',
    birthday:'',
  })

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
    login_info,
    profile,
    signup,
  };
}, { persist: true });
