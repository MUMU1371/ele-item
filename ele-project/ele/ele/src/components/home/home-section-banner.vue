<template>
  <div class="nav_banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/home_banner1.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner2.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner3.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner4.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner5.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner6.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner7.png"></div>
        <div class="swiper-slide"><img src="../../assets/img/home_banner8.png"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"

  export default {
    name: "home-section-banner",
    props: [""],
    mounted() {
      new Swiper('.nav_banner .swiper-container', {
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
  .nav_banner {
    width: 100%;
    height: 1.42rem;
    padding: 0.08rem 0;
  }

  .nav_banner .swiper-container, .nav_banner .swiper-slide {
    width: 3.5rem;
    height: 1.42rem;
    border-radius: 0.1rem;
  }

  .nav_banner .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>
<style>
  @import "swiper/dist/css/swiper.css";
  .nav_banner .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -0.16rem;
    left: 0;
    width: 100%;
  }

  .nav_banner .swiper-pagination-bullet {
    width: 0.08rem;
    height: 0.08rem;
    background: rgba(255, 255, 255, .5);
  }

  .nav_banner .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
