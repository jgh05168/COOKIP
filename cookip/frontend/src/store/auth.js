import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const urlUser = 'http://localhost:5000/User';
const urlUserProfile = 'http://localhost:5000/Users_Profile';

export const useAuthStore = defineStore('auth', () => {
  const memberList = ref([1,2,3,4]);
  const userProfileList = ref([]);
  const login_info = ref(null)
  const profileImage = ref([])
  const cur_profile = ref({
    profile_face:null,
    profile_id:null,
    profile_img:null,
    profile_name:null,
    profile_nickname:null,
    user_id:null
  })
  
  const img = ref();

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
  
  const profile = ref({
    nickname: '',
    realpicture:'',
    picture:'',
  })
  
  const fetchUserData = async () => {
    try {
      const userResponse = await axios.get(urlUser);
      const userProfileResponse = await axios.get(`${urlUserProfile}/${userResponse.user.user_id}`);
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
    signup,
    profile,
    profileImage,
    cur_profile, 
    Islogin,
    img
  };
}, { persist: true });
