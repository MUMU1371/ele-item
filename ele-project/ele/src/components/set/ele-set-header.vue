<template>
  <div class="top">
    <div class="top_a">
      <router-link to="/mine" class="first"><img src="../../assets/img/ap_backlink_arrow.png" /></router-link>
      <p>设置</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ele-set-header"
    }
</script>

<style scoped>
  .top{
    width:100%;
    height:0.4rem;
    background:#4396f7;
    border-bottom: 20px solid #f5f5f5;
  }
  .top_a{
    display:flex;
    flex:1;
  }
  .top a{
    display: block;
  }
  .top a img{
    width:0.17rem;
    height:0.2rem;
    padding-top: 0.13rem;
  }
  .top .first{
    padding-left:0.17rem;
  }
  .top p{
    display:block;
    font-size: 0.18rem;
    color:#fff;
    padding-left:1.45rem;
    padding-top: 0.1rem;
  }
</style>
