<template>
  <div class="top">
    <div class="top_a">
      <a @click="back"><img src="../../assets/img/ap_backlink_arrow.png" /></a>
      <p>全部品类</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fruitsort-header",
      methods: {
        back() {
          this.$router.go(-1);//返回上一层
        }
      }
    }
</script>

<style scoped>
  .top{
    width:100%;
    height: 0.48rem;
    background-image: linear-gradient(90deg,#0af,#48a0f8);
  }
  .top_a{
    display:flex;
    flex:1;
    margin-bottom: 0.1rem;
  }
  .top_a a{
    padding-left:0.17rem;
  }
  .top_a a img{
    width: 0.2rem;
    padding-top: 0.15rem;
  }
  .top_a p{
    display:block;
    font-size: 0.16rem;
    color:#ffffff;
    padding-left:1.25rem;
    padding-top: 0.13rem;
    font-weight: 700;
  }
</style>
