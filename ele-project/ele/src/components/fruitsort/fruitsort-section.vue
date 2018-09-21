<template>
  <div class="section">
    <div class="re">
      <p>热门推荐</p>
    </div>
    <div class="remen_a">
      <router-link to="">
        <img src="../../assets/img/fruit_sortbg.png" />
        <p>热门推荐</p>
        <img src="../../assets/img/fruit_sortbg.png" />
      </router-link>
    </div>
    <div class="msg">
      <ul>
        <li><img src="../../assets/img/fruit_guo.png" /><span>果切</span></li>
        <li><img src="../../assets/img/fruit_xi.png" /><span>西瓜</span></li>
        <li><img src="../../assets/img/fruit_pu.png" /><span>葡萄/提子</span></li>
        <li><img src="../../assets/img/fruit_liu.png" /><span>榴莲</span></li>
        <li><img src="../../assets/img/fruit_qi.png" /><span>奇异果</span></li>
        <li><img src="../../assets/img/fruit_mi.png" /><span>猕猴桃</span></li>
        <li><img src="../../assets/img/fruit_dong.png" /><span>冬枣</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fruitsort-section"
    }
</script>

<style scoped>
  .section{
    width:100%;
    background-color: #fff;
    -webkit-flex: 1;
    overflow-y:scroll;
  }
  .re{
    height: 100%;
    width:25%;
    float:left;
    background: #f9f9f9;
  }
  .re p{
    display:block;
    font-size: 0.13rem;
    color:#4993f7;
    font-weight: 900;
    padding:0.17rem ;
    background:#fff;
    letter-spacing:1px;
  }
  .remen_a{
    height: 100%;
    float:left;
    width:75%;
    height: 0.48rem;
  }
  .remen_a a{
    display:block;
  }
  .remen_a a img{
    display: block;
    width:0.27rem;
    margin: 0.25rem 0 0 0.6rem;
  }
  .remen_a a img:last-child{
    display: block;
    width:0.27rem;
    margin: -0.08rem 0 0 1.7rem;
  }
  .remen_a a p{
    display:block;
    font-size: 0.13rem;
    color:#333;
    font-weight: 900;
    letter-spacing:1px;
    margin: -0.1rem 0 0 1rem;
  }
  .msg{
    height: 100%;
    width: 75%;
    float:left;
  }
  .msg ul{
    display:flex;
    flex:1;
    flex-wrap:wrap;
  }
  .msg ul li{
    margin: 0.15rem 0.16rem;
  }
  .msg ul li img{
    display: block;
    width: 0.6rem;
  }
  .msg ul li span{
    display: block;
    font-size: 0.12rem;
    color:#666;
    text-align: center;
    margin-top: 0.12rem;
  }


</style>
