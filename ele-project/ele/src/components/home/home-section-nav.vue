<template>
  <div class="nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="nav_icon">
            <router-link to="">
              <img src="../../assets/img/icon_nav1.png"/>
              <span>美食</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav2.png"/>
              <span>超市便利</span>
            </router-link>
            <router-link to="/fruit">
              <img src="../../assets/img/icon_nav3.png"/>
              <span>水果</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav4.png"/>
              <span>送药上门</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav5.png"/>
              <span>甜品饮品</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav6.png"/>
              <span>跑腿代购</span>
            </router-link>
            <router-link to="/prefer">
              <img src="../../assets/img/icon_nav7.png"/>
              <span>大牌惠吃</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav8.png"/>
              <span>地方美食</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav9.png"/>
              <span>速食简餐</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav10.png"/>
              <span>汉堡披萨</span>
            </router-link>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="nav_icon">
            <router-link to="">
              <img src="../../assets/img/icon_nav11.png"/>
              <span>无辣不欢</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav12.png"/>
              <span>米粉面馆</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav13.png"/>
              <span>包子粥店</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav14.png"/>
              <span>炸鸡炸串</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav15.png"/>
              <span>烧烤海鲜</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav16.png"/>
              <span>厨房生鲜</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav17.png"/>
              <span>浪漫鲜花</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav18.png"/>
              <span>鸭脖卤味</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav19.png"/>
              <span>异国料理</span>
            </router-link>
            <router-link to="">
              <img src="../../assets/img/icon_nav20.png"/>
              <span>麻辣烫</span>
            </router-link>
          </div>
        </div>
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
    mounted() {
      new Swiper('.nav .swiper-container', {
        direction: 'horizontal',
        effect: 'slide',
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }
  }
</script>

<style scoped>
  @import "swiper/dist/css/swiper.css";

  .nav {
    width: 100%;
    height: 1.05rem;
    background: #fff;
  }

  .nav .swiper-container {
    width: 100%;
    position: relative;
    z-index: 1000;
  }

  .nav .swiper-slide {
    width: 100%;
    height: 0.88rem;
    padding-bottom: 1rem;
  }

  .nav_icon span {
    display: block;
  }

  .nav_icon {
    width: 100%;
    height: 1.5rem;
    padding: 0.05rem 0.12rem 0rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }

  .nav_icon a {
    width: 20%;
    height: 0.52rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }

  .nav_icon a img {
    width: 0.42rem;
    height: 0.4rem;
    margin-left: 0.15rem;
    margin-bottom: 0.06rem;
  }

  .nav_icon a span {
    color: #666666;
    font-size: 0.12rem;
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
