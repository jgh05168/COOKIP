import { defineStore } from 'pinia'
import {ref} from 'vue'
// import axios from 'axios'


export const useMotionStore = defineStore('motion', () => {
  // 다음과 같이 데이터를 전달 받음
  // swipe : SwipeDown, SwipeLeft, SwipeRight, SwipeUp
  // page : PageIn, PageOut
  // rating : 0, 1, 2, 3, 4, 5
  // zoom : ZoomIn, ZoomOut
  // flip : Flip
  const motion_data = ref({
    swipe: null,
    page: null,
    rating: null,
    zoom: null,
    flip: null,
  })

   
  return {motion_data}
  }, { persist: true })
  