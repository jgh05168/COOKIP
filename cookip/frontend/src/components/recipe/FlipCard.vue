<template>
  <VueSlickCarousel ref="carousel">
    <div><h3>1</h3></div>
    /*...*/
  </VueSlickCarousel>
  <button @click="showNext">show me the next</button>
</template>
<script>
  export default {
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script>