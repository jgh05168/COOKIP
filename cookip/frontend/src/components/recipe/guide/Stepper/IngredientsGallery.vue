<template>
  <div>
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      ref="colCarousel"
      class="vertical-carousel"
    >
      <Slide
        class="vertical-carousel-slide sub-img"
        v-for="index in 5"
        :key="index"
      >
        <v-img src="@/assets/image/item_green.png" />
      </Slide>
    </Carousel>
  </div>
</template>
  
<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>
  
<style scoped>
.vertical-carousel {
  transform: rotate(0.25turn);
  width: 100%;
}

.vertical-carousel-slide {
  transform: rotate(-0.25turn);
}

.sub-img {
  height: 120px;
  width: 120px;
}
</style>
  