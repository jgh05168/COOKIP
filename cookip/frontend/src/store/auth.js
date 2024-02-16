import { defineStore } from 'pinia';

import { ref, computed } from 'vue';



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
