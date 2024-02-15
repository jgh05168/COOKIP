<template>
  <div>
  <div class="step-ingredients-gallery ">
    <Carousel
      :items-to-show="4"
      :wrap-around="true"
      ref="colCarousel"
      class="vertical-carousel"
    >
      <Slide
        class="vertical-carousel-slide sub-img carousel__viewport"
        v-for="index in 5"
        :key="index"
      >
        <!-- <v-img src="../public/image/ingredient/item_9.jpg" /> -->
      </Slide>
    </Carousel>

  </div>
  <div class="my_btns">
      <button @click="nextpage()">다음</button>
      <button @click="prevpage()">이전</button>
    </div></div>
</template>
  
<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const colCarousel = ref(null);

const nextpage = () => {
  colCarousel.value.next();
};

const prevpage = () => {
  colCarousel.value.prev();
};
</script>
  
<style scoped>
div > button {
  margin-right: 0; /* 버튼의 상단 마진을 0으로 설정 */
}
.step-ingredients-gallery {
  overflow: hidden;
  width: 500px;
  height: 500px;
  display: block;
  /* display: inline; */
  flex-direction: column;
  background-color: pink;
}
.vertical-carousel {
  transform: rotate(0.25turn);
  /* display: inline; */
  margin-bottom: 0;
  width: 800px;
  height: 200px;
  background-color: aqua;
  margin-right: 0px;
}
.my_btns{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: red;

}
.carousel__track {
  margin: 0px 0px;
}
.carousel__viewport {
  height: 150px;
  width: 800px;
  gap: 10px;
  margin-right: 100px;
  background-color: red;
}
.vertical-carousel-slide {
  margin-right: 10px;
  transform: rotate(-0.25turn);
}

.sub-img {
  height: 120px;

  width: 120px;
}
</style>
  