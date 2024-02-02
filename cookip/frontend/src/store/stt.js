import { defineStore } from 'pinia'
import { ref} from 'vue'
// import axios from 'axios'

export const useSttStore = defineStore('stt', () => {
    const stt_data = ref({

    })
    


    return {stt_data}
  }, { persist: true })
  