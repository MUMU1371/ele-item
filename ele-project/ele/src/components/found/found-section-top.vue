<template>
  <div class="top">
    <router-link to="" class="rouler"></router-link>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-no-swiping" v-for="i in top" :key="i.id">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
  export default {
    name: "found-section-top",
    props:["top"],
    updated(){
      new Swiper('.top .swiper-container', {
        direction: 'vertical',
        loop: true,
        noswiping: true,
        effect: 'slide',
        speed: 600,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      });
    }
  }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 2.75rem;
    position: relative;
  }
  .rouler{
    position: absolute;
    top: 0.77rem;
    right: 0;
    width: 0.57rem;
    height: 0.3rem;
    background: url("../../assets/img/icon_rouler.png");
    background-size: 100% 100%;
  }

  .swiper-container {
    width: 2rem;
    height: 0.25rem;
    font-size: 0.12rem;
    color: #fff;
    border-radius: 0.5rem;
    background: rgba(0,0,0,.55);
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 24%;
    text-align: center;
    line-height: 0.25rem;

  }
</style>
