<template>
  <div class="section">
    <prefer-header ref="far" v-on:listenToChildEvent="sendmsg" :sid="id" :change="this.swiperOption.on.slideChangeTransitionStart"  :slideto="slide"></prefer-header>
      <swiper id="swiper_cen":options="swiperOption" ref="mySwiper">
        <swiper-slide class="src" v-scroll="show" ref="far1"><prefer-all-center ></prefer-all-center></swiper-slide>
        <swiper-slide  v-scroll="show"><prefer-others-center></prefer-others-center></swiper-slide>
        <swiper-slide  v-scroll="show"><prefer-others-center></prefer-others-center></swiper-slide>
        <swiper-slide  v-scroll="show"><prefer-others-center></prefer-others-center></swiper-slide>
        <swiper-slide  v-scroll="show"><prefer-others-center></prefer-others-center></swiper-slide>
     </swiper>
    <router-link to=""> <div class="shop">
      <img v-show="temp==1" src="../assets/img/sp_shopping_cart_floating_icon.png"/>
      <img v-show="temp==0" src="../assets/img/sp_shopping_cart_floating_icon_red_point.png"/>
    </div></router-link>

  </div>
</template>

<script>




    import { swiper,swiperSlide } from 'vue-awesome-swiper';
    import PreferHeader from "../components/prefer/prefer-header/prefer-header";
    import PreferAllCenter from "../components/prefer/prefer-all/prefer-all-center";
    import PreferOthersCenter from "../components/prefer/prefer-others/prefer-others-center";

    var myvue={}

    export default {
        name: "prefer",
        components:{PreferOthersCenter, PreferAllCenter, PreferHeader, swiper,swiperSlide},
        data(){

        return {
          top:10,
          temp:1,
          id:0,
          swiperOption: {
            on: {
              slideChangeTransitionStart(swiper){
                    myvue.id =  this.activeIndex

                    myvue.$refs.far.parchange(myvue.id)
              }
            }
          }
        }
      },
      computed:{
           swiper(){
             return this.$refs.mySwiper.swiper
           },

      },
      methods:{

        change(swiper) {
          console.log(swiper.activeIndex)
        },
        cst(){
          console.log(this.$refs.mySwiper);
        },
        sendmsg(data){
         console.log(data)
        },
        slide(a){
          return this.swiper.slideTo(a)
        },
        show(e){
           let top= e.target.scrollTop
          if(top>50){
            for (let i=1 ;i<document.querySelectorAll(".menu_head").length;i++){
              document.querySelectorAll(".menu_head")[i].style.position="fixed"
              document.querySelectorAll(".menu_head")[i].style.top="0rem"
            }
          }
          if(top<=50){
            for (let i=1 ;i<document.querySelectorAll(".menu_head").length;i++){
              document.querySelectorAll(".menu_head")[i].style.position="relative"
              document.querySelectorAll(".menu_head")[i].style.top="0rem"
            }
          }

            console.log(top)
          if(top>20){
            document.querySelector(".shop").style.display='block'
          }
          else {
            document.querySelector(".shop").style.display='none'
          }
          if(top>200){
            document.querySelector("header").style.marginTop="-0.35rem"
          }
          if(top<=200){
            document.querySelector("header").style.marginTop="0rem"
          }
          if(top>=365){
            document.querySelector(".menu_head").style.position="fixed"
            document.querySelector(".menu_head").style.top="0rem"
          }
          if(top<365 && e.target==document.querySelector(".src")){
            document.querySelector(".menu_head").style.position="relative"
          }
          // if(e.target!=document.querySelector(".src")){
          //   document.querySelector(".menu_head").style.position="fixed"
          //   document.querySelector(".menu_head").style.top="0rem"
          // }

        }
      },

        // this.slideTo(this.sendmsg())
    beforeCreate(){
      myvue=this

    },
      created(){

      },
    mounted(){
        // console.log(this.swiper.slideTo)

      },
      updated(){
        document.querySelector("#swiper_cen").onscroll=function () {
          let top= document.querySelector("#swiper_cen").scrollTop
          if(top>20){
            document.querySelector(".shop").style.display='block'
          }
          else {
            document.querySelector(".shop").style.display='none'
          }
        }
      }

    }
</script>

<style scoped>
.section{
  display: flex;
  flex-direction: column;
  flex: 1;
  /*overflow-x: scroll;*/
  width: 100%;

}
#swiper_cen{
  width: 100%;
  flex: 1;
}
#swiper_cen .swiper-slide{
  width: 100%;
  overflow-y: scroll;
}
  .shop {
    width: 0.46rem;
    position: fixed;
    bottom: 0.19rem;
    right:0.18rem ;
    z-index: 900;
    border-radius: 0.23rem;
  }
  .shop img{
    width: 100%;
  }
</style>
