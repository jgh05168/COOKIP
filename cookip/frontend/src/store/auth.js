import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const urlUser = 'http://i10c101.p.ssafy.io:3002/User';
const urlUserProfile = 'http://i10c101.p.ssafy.io:3002/Users_Profile';

export const useAuthStore = defineStore('auth', () => {
  const memberList = ref([1,2,3,4]);
  const userProfileList = ref([]);
  const login_info = ref(null)
  const profile = ref([])
  const profileImage = ref([])
  const cur_user_info = ref(null)
  
  console.log("profile",profile);

  const Islogin = computed(() => {
    const isLogin = !localStorage.getItem('Islogin');
    console.log('Islogin computed value:', isLogin);
    return isLogin;
  });

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
    profileImage,
    cur_user_info, 
    Islogin
  };
}, { persist: true });
