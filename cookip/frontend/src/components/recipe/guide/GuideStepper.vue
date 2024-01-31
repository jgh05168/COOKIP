<template>
  <VueSlickCarousel @init="onInitCarousel">
    <div><h3>1</h3></div>
    /*...*/
    <template #prevArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>
    /*...*/
    <template #customPaging="page">
      <div class="custom-dot">
        {{ page }}
      </div>
    </template>
  </VueSlickCarousel>
</template>
<script>
export default {
  methods: {
    onInitCarousel() {
      console.log("our carousel is ready");
    },
  },
};
</script>