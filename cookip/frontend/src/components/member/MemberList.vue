<template>
  <div>
    <Carousel v-model="currentSlide"
      ref="rowCarousel"
      :itemsToShow="3"
      :wrapAround="true"
      :transition="500"   
    >
      <Slide v-for="(member, slide) in member_list" :key="slide">
        <div>
          <img :src="require(`@/assets/image/${member.name}`)" alt="Member Image" class="profile_img_style">
          <MemberListItem :member = "member"/>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    
    <!-- <div>
      <button @click="nextpage()">Next</button>
      <input type="number" min="0" max="3" v-model="currentSlide" />
      <button @click="prevpage()">Prev</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div> -->
  </div>
  </template>

<script setup>
import { ref,watch} from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import MemberListItem from './MemberListItem.vue';
import { useMotionStore } from '@/store/motion';
import { watchEffect } from 'vue'
import router from '@/router';


const motionStore = useMotionStore()

const member_list = ref([
  {name: "LYH.png"},
  {name: "JGH.png"},
  {name: "JGM.png"},
  {name: "ICJ.png"},
])

const currentSlide = ref(0);  // 초기 슬라이드 인덱스 설정

watch(currentSlide, (newVal) => {
  console.log('Current Slide Changed:', newVal);
});

const rowCarousel = ref(null);
// const error = ref('');

const nextpage = () => {
  rowCarousel.value.next();
};

const prevpage = () => {
  rowCarousel.value.prev();
};


watchEffect(() => {
  console.log(motionStore.motion_data);
  if (motionStore.motion_data.swipe !== null) {
    if (motionStore.motion_data.swipe == "SwipeLeft") {
      nextpage();
    } else if (motionStore.motion_data.swipe == "SwipeRight") {
      prevpage();
    }
    
  }
  else if (motionStore.motion_data.zoom !== null) {
    console.log(motionStore.motion_data.page);
    if (motionStore.motion_data.zoom == "ZoomIn") {
      router.push({name:"home" ,params : {}, query:{}})
    }
    // name:주소이름 ,params : {주소에 넣어야할 인자명 : 값}, query:{디이터명: 쿼리로 전달하고 싶은 데이터}
    // console.log(motionStore.motion_data)
  }
});


</script>

<style scoped>
.title{
  height: 100px;
  width: 100px;
  color: aliceblue;
  background-color: black;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 1;
  transform: rotateY(-20deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.7);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.7);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.7);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.profile_img_style {
  border-radius: 20%;
  width: 100%;
  height: auto;
  border: 3px black solid;
}
</style>
