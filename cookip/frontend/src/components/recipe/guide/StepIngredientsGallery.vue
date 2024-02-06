<template>
  <div class="step-ingredients-gallery">
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      ref="colCarousel"
      class="vertical-carousel carousel__viewport"
    >
      <Slide
        class="vertical-carousel-slide sub-img"
        v-for="index in 5"
        :key="index"
      >
        <v-img src="@/assets/image/ingredient/item_greenonion.jpg" />
      </Slide>
    </Carousel>
    <div>
      <button @click="nextpage()">다음</button>
      <button @click="prevpage()">이전</button>
    </div>
  </div>
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
.step-ingredients-gallery{
  display: flex;
  flex-direction: column;
}
.vertical-carousel {
  transform: rotate(0.25turn);
  width: 1080px;
  height: 1080px;
}

.carousel__viewport {
  height: 150px;
  width: 800px;
  gap: 10px;
  margin-top: 200px;
}

.vertical-carousel-slide {
  transform: rotate(-0.25turn);
}

.sub-img {
  height: 120px;

  width: 120px;
}
</style>
  