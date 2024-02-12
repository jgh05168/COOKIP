import { defineStore } from 'pinia';
import { ref} from 'vue';
import { useAuthStore } from './auth';

export const useFavoriteStore = defineStore('favorite', () => {

    const authStore = useAuthStore()
    // 멤버 별 즐겨찾기 목록
    const member_list = ref(authStore.memberList)
    const member_favorite = ref([
      {favorite_list:[1,2,3]},
      {favorite_list:[1,2,3,4,5,6]},
      {favorite_list:[1,2,3,4,]},
      {favorite_list:[1,2,3,4,]},
    ])

    // user_id 로 즐겨찾기 목록 받아오기
    // 받아온 즐겨찾기 목록 돌면서 멤버별로 분리하기



  return {
  member_list,
    member_favorite,
  };
}, { persist: true });
