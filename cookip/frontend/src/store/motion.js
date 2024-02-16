import { defineStore } from 'pinia'
import { ref } from 'vue'
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

  const transition_dir = ref('')

  const beforeEnterUp = (el) => {
    el.style.transform = "translateY(100%)";
  };

  const enterUp = (el, done) => {
    el.offsetHeight; // trigger reflow
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateY(0)";
    done();
  };

  const leaveUp = (el, done) => {
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateY(100%)";
    done();
  };

  const beforeEnterDown = (el) => {
    el.style.transform = "translateY(-100%)";
  };

  const enterDown = (el, done) => {
    el.offsetHeight; // trigger reflow
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateY(0)";
    done();
  };

  const leaveDown = (el, done) => {
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateY(-100%)";
    done();
  };

  const beforeEnterLeft = (el) => {
    el.style.transform = "translateX(-100%)";
  };

  const enterLeft = (el, done) => {
    el.offsetHeight; // trigger reflow
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateX(0)";
    done();
  };

  const leaveLeft = (el, done) => {
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateX(-100%)";
    done();
  };

  const beforeEnterRight = (el) => {
    el.style.transform = "translateX(100%)";
  };

  const enterRight = (el, done) => {
    el.offsetHeight; // trigger reflow
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateX(0)";
    done();
  };

  const leaveRight = (el, done) => {
    el.style.transition = "transform 0.5s";
    el.style.transform = "translateX(100%)";
    done();
  };

  return { motion_data, transition_dir, beforeEnterUp, enterUp, leaveUp, beforeEnterDown, enterDown, leaveDown, 
    beforeEnterLeft, enterLeft, leaveLeft, beforeEnterRight, enterRight, leaveRight}
}, { persist: true })
