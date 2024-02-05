import axios from "axios";
import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'
// import axios from 'axios'
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {

    const user_id = ref([]);
    const state = ref(0);
    const users = ref([]);

    return { user_id, state, users }
  }, { persist: true })

const urluser = "http://localhost:5000/user";

class Userservice {
    static getUser() {
        return axios.get(urluser)
          .then((res) => {
            const data = res.data;
            return data.Recipe.map((guild_owner) => ({ ...guild_owner }));
          })
          .catch((error) => {
            throw new Error(`사용자 데이터를 가져오는 데 실패했습니다: ${error.message}`);
          });
      }
}

export default Userservice;

