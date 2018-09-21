<template>
  <div id="banner">
    <swiper :options="swiperOption">
      <swiper-slide><router-link to=""><img src="../../../assets/img/prefer-banner-1.png"></router-link></swiper-slide>
      <swiper-slide><router-link to=""><img src="../../../assets/img/prefer-banner-2.png"></router-link></swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import { swiper,swiperSlide } from 'vue-awesome-swiper';

    export default {
        name: "prefer-all-banner",
        data(){
          return {
            swiperOption: {

              loop: true,
              autoplay:true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            }
          }
        },
        components:{
        swiper,swiperSlide
        },
        methods:{

      }
    }

</script>

<style scoped>
 #banner{
   width: 100%;
   padding: 0.1rem 0.1rem 0;
   box-sizing: border-box;
   position: relative;
   background: #ffffff;
 }
  #banner img{
    width:100%;
  }
  .swiper-pagination{
    display: flex;
    position: absolute;
    left: 1.75rem;
    top: 1.6rem;
  }
 #banner .swiper-pagination-bullet{opacity:1;background: transparent;}
 #banner .swiper-pagination-bullet-active{background: transparent;}
 #banner .swiper-pagination-bullet-active .spanSame{border:3px solid #fff;}
</style>
