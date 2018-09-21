<template>
<div>
  <div class="safe">
    <div class="zhanghu">
      <p>账户与安全</p>
      <span>开启小额免密支付</span>
      <router-link to=""><img src="../../assets/img/my_right.png" /></router-link>
    </div>
    <div class="tongyong">
      <p>通用</p>
      <router-link to=""><img src="../../assets/img/my_right.png" /></router-link>
    </div>
  </div>
  <div class="safe">
    <div class="elm">
      <p>关于饿了么</p>
      <router-link to=""><img src="../../assets/img/my_right.png" /></router-link>
    </div>
    <div class="zc">
      <p>用户隐私政策</p>
      <router-link to=""><img src="../../assets/img/my_right.png" /></router-link>
    </div>
  </div>
  <div class="tui">
    <p>退出当前账号</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "ele-set-section"
    }
</script>

<style scoped>
  .safe{
    border-bottom: 30px solid #f5f5f5;
  }
  .zhanghu{
    display:flex;
    border-bottom: 1px solid #eeeeee;
    background:#fff;
  }
  .zhanghu p{
    display:block;
    font-size: 0.14rem;
    color:#080808;
    padding: 0.15rem;
  }
  .zhanghu span{
    display:block;
    font-size: 0.14rem;
    color:#999999;
    padding: 0.17rem 0 0 1rem;
  }
  .zhanghu a{
    display:block;
  }
  .zhanghu a img{
    display: block;
    width: 0.09rem;
    height: 0.15rem;
    padding: 0.21rem 0 0 0.22rem;
  }
  .tongyong{
    display:flex;
    border-bottom: 1px solid #eeeeee;
    background:#fff;
  }
  .tongyong p{
    display:block;
    font-size: 0.14rem;
    color:#080808;
    padding: 0.15rem;
  }
  .tongyong a{
    display:block;
  }
  .tongyong a img{
    display: block;
    width: 0.09rem;
    height: 0.15rem;
    padding: 0.21rem 0 0 2.88rem;
  }

  .elm{
    display:flex;
    border-bottom: 1px solid #eeeeee;
    background:#fff;
  }
  .elm p{
    display:block;
    font-size: 0.14rem;
    color:#080808;
    padding: 0.15rem;
  }
  .elm a{
    display:block;
  }
  .elm a img{
    display: block;
    width: 0.09rem;
    height: 0.15rem;
    padding: 0.2rem 0 0 2.43rem;
  }
  .zc{
    display:flex;
    border-bottom: 1px solid #eeeeee;
    background:#fff;
  }
  .zc p{
    display:block;
    font-size: 0.14rem;
    color:#080808;
    padding: 0.15rem;
  }
  .zc a{
    display:block;
  }
  .zc a img{
    display: block;
    width: 0.09rem;
    height: 0.15rem;
    padding: 0.2rem 0 0 2.29rem;
  }
  .tui{
    display:flex;
    border-bottom:1px solid #eeeeee;;
    border-top:1px solid #eeeeee;;
    background:#fff;
  }
  .tui p{
    display:block;
    font-size:0.14rem;
    color:#df443b;
    padding: 0.2rem 0 0.2rem 1.5rem;
  }

</style>
