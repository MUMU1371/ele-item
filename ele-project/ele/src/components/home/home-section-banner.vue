<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in banner" :key="i.id"><img :src="i"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
  export default {
    name: "home-section-banner",
    props: ["banner"],
    updated() {
      new Swiper('.banner .swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        speed: 600,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }
  }
</script>

<style scoped>
  @import "swiper/dist/css/swiper.css";

  .banner {
    width: 100%;
    height: 1.05rem;
    background: #fff;
  }
  .banner .swiper-container{
    width: 100%;
  }
  .banner .swiper-slide {
    width: 100%;
    height: 0.88rem;
    padding-bottom: 0.5rem;
  }

  .banner .swiper-slide img {
    width: 3.51rem;
    height: 0.88rem;
    margin: 0 0.12rem;
  }
</style>
<style>
  @import "swiper/dist/css/swiper.css";

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -0.16rem;
    left: 0;
  }

  .swiper-pagination-bullet {
    width: 0.1rem;
    height: 0.02rem;
    border-radius: 0;
    background: #dddddd;
  }

  .swiper-pagination-bullet-active {
    background: #98d3fb;
  }
</style>
