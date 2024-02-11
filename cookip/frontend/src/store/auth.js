import { defineStore } from 'pinia';
import { ref } from 'vue';



export const useAuthStore = defineStore('auth', () => {
  const urlUser = 'http://localhost:5000/User';
  const urlUserProfile = 'http://localhost:5000/Users_Profile';
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


  return {
    memberList,
    userProfileList,
    login_info,
    profile,
    signup,
    urlUser, urlUserProfile,
  };
}, { persist: true });
