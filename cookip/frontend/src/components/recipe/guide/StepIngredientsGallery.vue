<template>
  <v-col>
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
      <v-divider></v-divider>
      <button @click="prevpage()">이전</button>
    </div>
  </v-col>
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
.vertical-carousel {
  transform: rotate(0.25turn);
  height: 100px;
}

.carousel__viewport {
  background-color: rgb(4, 255, 255);
  height: 150px;
  width: 800px;
  gap: 10px;
}

.vertical-carousel-slide {
  transform: rotate(-0.25turn);
}

.sub-img {
  height: 120px;
  width: 120px;
}
</style>
  