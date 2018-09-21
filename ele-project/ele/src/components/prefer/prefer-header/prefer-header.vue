<template>
    <header>
      <div class="header_logo">
        <router-link to=""><img src="../../../assets/img/od_icon_back_white.png"/> </router-link>
        <p>大牌惠吃</p>
        <router-link to=""><img src="../../../assets/img/sp_shop_detail_action_search.png"/> </router-link>
      </div>
      <div class="header_meau">
        <div class="header_meau_sro" ref="menu" @click="menuchange">
          <a name="focus">全部</a>
          <a>甜品饮食</a>
          <a>小吃夜宵</a>
          <a>异国料理</a>
          <a>特色菜系</a>
        </div>
        <img @click="show(1)" src="../../../assets/img/sp_cate_icon_sort.png"/>
      </div>
      <prefer-option v-if="flag == 1" :show="show"></prefer-option>
    </header>
</template>

<script>
    import PreferOption from "../prefer-option";
    import { swiper,swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "prefer-header",
        components: {PreferOption,swiper,swiperSlide},
        props:["sid","slideto"],
      data(){
          return{
            flag:0,
            index:0,

            swiperOption:{

          }
        }

      },
      methods:{
        show(f){
          this.flag = f;

        },
        // add(){
        //   vm.$refs.menu.children.name="";
        //   vm.$refs.menu.children[key].name="focus";
        // },

          menuchange(e){
            e.preventDefault()
            if (e.target.tagName.toLocaleLowerCase()=="a") {
             for (let i=0;i<this.$refs.menu.children.length; i++) {
               this.$refs.menu.children[i].name="a";
               if(e.target==this.$refs.menu.children[i]){
                 this.index=i
                 this.sendmsg()
                 this.slideto(this.index)
               }
             }
              e.target.name="focus";

            }
        },

        sendmsg(){
          this.$emit("listenToChildEvent",this.index)
        },
    //     docyment.querySelectorAll(".tabs a").on('click', function(e) {
    //       e.preventDefault()
    //     docyment.querySelectorAll(".tabs .active").removeClass('active')
    //     docyment.querySelectorAll(this).addClass('active')
    //     tabsSwiper.slideTo($(this).index())
    // })
        parchange(a){
          for (let i=0;i<this.$refs.menu.children.length; i++) {
            this.$refs.menu.children[i].name="a";
          }
          this.$refs.menu.children[a].name="focus";
        }

    },
      mounted(){
        this.parchange(this.sid)
      },

    updated(){
          this.add
    }
    }
</script>

<style scoped>
  header{
    background: #4090f7;
    width: 100%;
    height: 0.8rem;
    box-sizing: border-box;
  }
 header .header_logo{
    height: 0.43rem;
    width: 100%;
    display: flex;
    font-size: 0.18rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.54rem;
    justify-content: space-between;
    padding: 0 0.1rem;
   box-sizing: border-box;
  }

  header img {
    height: 0.19rem;
    padding-left: 0.07rem;
    padding-top: 0.12rem;
  }
  .header_meau{
    display: flex;
    position: relative;
  }
  .header_meau a{
    font-size: 0.13rem;
    color: #bee2fc;
    margin: 0 0.15rem;
    line-height: 0.27rem;
    padding-top: 0.01rem;
    white-space: nowrap;
  }
  /*.header_meau .router-link-active{*/
    /*border-bottom: 0.02rem solid #ffffff;*/
  /*}*/
  .header_meau a[name=focus]{
    border-bottom: 0.02rem solid #ffffff;
  }
  .header_meau img{
    padding:0.1rem 0.03rem 0.06rem 0.13rem;
    box-shadow: -0.03rem 0 0 #3a83ee;
  }
  .header_meau_sro{
    display: flex;
    flex: 1;
    overflow-x: scroll;
    flex-wrap: nowrap;
  }

  .header_meau_sro::-webkit-scrollbar/*整体部分*/
  {
    width: 0px;
    height: 0px;
  }

  .header_meau_sro::-webkit-scrollbar-track/*滑动轨道*/
  {
    -webkit-box-shadow: inset 0 0  0px rgba(0,0,0,0.2);
    border-radius: 0px;
    background: #12fafd /*rgba(0,0,0,0.1)*/;
  }

  .header_meau_sro::-webkit-scrollbar-thumb/*滑块*/
  {
    border-radius:  0px;
    -webkit-box-shadow: inset 0 0  0px rgba(0,0,0,0.2);
    background: #12a7fd /*rgba(0,0,0,0.2)*/;
  }

  .header_meau_sro::-webkit-scrollbar-thumb:hover/*滑块效果*/
  {
    border-radius: 0px;
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
    background: #39fd70 /*rgba(0,0,0,0.4)*/;
  }
</style>
<!--var tabsSwiper = new Swiper('#tabs-container', {-->
<!--speed: 500,-->
<!--on: {-->
<!--slideChangeTransitionStart: function() {-->
<!--$(".tabs .active").removeClass('active');-->
<!--$(".tabs a").eq(this.activeIndex).addClass('active');-->
<!--}-->
<!--}-->
<!--})-->
<!--$(".tabs a").on('click', function(e) {-->
<!--e.preventDefault()-->
<!--$(".tabs .active").removeClass('active')-->
<!--$(this).addClass('active')-->
<!--tabsSwiper.slideTo($(this).index())-->
<!--})-->
<!--}-->
