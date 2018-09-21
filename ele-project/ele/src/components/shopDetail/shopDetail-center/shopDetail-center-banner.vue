<template>
    <div class="center_banner">
      <h1>十八家子水饺（鱼化寨店）</h1>
      <h6>评价4.6  <span>I</span>  月售1001  <span>I</span>  蜂鸟专送约36分钟</h6>
      <div class="cart_pic">
        <img src="../../../assets/img/shopDetail-banner-1.png"/>
        <img src="../../../assets/img/shopDetail-banner-1.png"/>
      </div>
      <div class="moneyOff">
        <h6><span>满减</span>满25减12，满39减20，满69减30<small>4个优惠</small></h6>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopDetail-center-banner"
    }
</script>

<style scoped>
.center_banner{
  padding-top: 0.3rem;
}
  h1{
    font-size: 0.19rem;
    text-align: center;
  }
  h6{
    font-size: 0.1rem;
    color: #666666;
    text-align: center;
    line-height: 0.4rem;
  }
  h6 span{
    color: #eeeeee;
  }
  .cart_pic{
    display: flex;
    justify-content: center;
  }
  .cart_pic img{
    height: 0.24rem;
    padding: 0 0.04rem;
  }
</style>
