<template>
  <div class="menu">
    <div class="menu_head" @click="">
      <h4>综合排序</h4>
      <router-link to="">甜品饮食</router-link>
      <router-link to="">小吃夜宵</router-link>
      <h4>筛选</h4>
    </div>
    <prefer-menu-single v-for=""></prefer-menu-single>
    <prefer-menu-single v-for=""></prefer-menu-single>
    <prefer-menu-single v-for=""></prefer-menu-single>
  </div>

</template>

<script>
    import PreferMenuSingle from "./prefer-center-menu-single";
    export default {
        name: "prefer-center-menu",
        components: {PreferMenuSingle},
        data(){
          return{
            msg:{

            }
          }
        },
        methods:{
          chan(){

          }
        }
    }
</script>

<style scoped>
  .menu{
    background: #ffffff;
  }
  .menu_head{
    display: flex;
    line-height: 0.39rem;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    background-color: white;
    width: 3.75rem;
    z-index: 999;
  }
  .menu_head a{
    font-size: 0.13rem;
    color: #333333;
    margin: 0 0.05rem;
    line-height: 0.39rem;
  }
  .menu_head .router-link-active{
    border-bottom: 0.02rem solid #ffffff;
  }
  h4{
    font-size: 0.13rem;
    color: #333333;
    margin: 0 0.05rem;
    padding-right: 0.16rem;
  }
  h4:first-child{
    font-weight: bolder;
    background:url("../../../assets/img/sp_grey_triangle_down_icon.png") no-repeat right center;
    background-size: 0.12rem;
  }
  h4:last-child{

    background:url("../../../assets/img/sp_icon_filter.png") no-repeat right center;
    background-size: 0.12rem;
  }
</style>
