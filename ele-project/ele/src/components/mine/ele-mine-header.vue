<template>
  <div class="top">
    <div class="top_a">
      <router-link to="" class="first"><img src="../../assets/img/icon_notice.png" /></router-link>
      <p>我的</p>
      <router-link to="/set" class="second"><img src="../../assets/img/icon_setting.png" /></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mine_header"
    }
</script>

<style scoped>
  .top{
    width:100%;
    height:0.48rem;
    background: url("../../assets/img/mine_top_bg.jpg") repeat-y;
    box-sizing: border-box;
  }
  .top_a{
    display:flex;
    flex:1;
  }

  .top a img{
    height:0.2rem;
    padding-top: 0.13rem;
  }
  .top .first{
    padding-left:0.17rem;
  }
  .top .second{
    padding-left: 1.2rem;
  }
  .top p{
    display:block;
    font-size: 0.18rem;
    color:#ffffff;
    padding-left:1.45rem;
    padding-top: 0.1rem;
  }
</style>
