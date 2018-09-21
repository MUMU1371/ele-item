<template>
<div class="big_box">
  <div class="box">
  <div class="menu_head">
    <h4 id="z">综合排序</h4>
    <router-link to="">销量最高</router-link>
    <router-link to="">距离最近</router-link>
    <h4>筛选</h4>
  </div>
  <div class="menu_s">
    <div class="menu_p">
      <img src="../../assets/img/fruit_pic1.png"/>
    </div>
    <div class="menu_m">
      <div class="menu_len">
        <div class="inform_s">
          <h2>临鲜生活(优果加鲜科...)</h2>
          <span>新用户减15</span>
        </div>
      </div>
      <div class="menu_inform_len">
        <div class="inform_s">
          <p>￥39起送</p>
          <p>配送费￥6</p>
        </div>
        <div class="inform_t">
          <p>37分钟</p>
          <p>1.7km</p>
        </div>
      </div>
    </div>
  </div>
  <div class="menu_tu">
    <div class="menu_a">
      <img src="../../assets/img/fruit_huo.png"/>
    </div>
    <div class="wen">
      <div class="hx"><h5>红心火龙果切300g起</h5></div>
      <div class="yue"><p>月售9份 好评率100%</p></div>
      <div class="mon"><span>￥25.9</span></div>
    </div>
  </div>
  <div class="menu_tu">
    <div class="menu_a">
      <img src="../../assets/img/fruit_huo.png"/>
    </div>
    <div class="wen">
      <div class="hx"><h5>红心火龙果切300g起</h5></div>
      <div class="yue"><p>月售9份 好评率100%</p></div>
      <div class="mon"><span>￥25.9</span></div>
    </div>
  </div>
  <div class="zhan">
    <p>展开同类商品</p>
  </div>
</div>
<div class="box">
<div class="menu_s">
  <div class="menu_p">
    <img src="../../assets/img/fruit_pic2.png"/>
  </div>
  <div class="menu_m">
    <div class="menu_len">
      <div class="inform_s">
        <h2>临鲜生活(优果加鲜科...)</h2>
        <span>新用户减15</span>
      </div>
    </div>
    <div class="menu_inform_len">
      <div class="inform_s">
        <p>￥39起送</p>
        <p>配送费￥6</p>
      </div>
      <div class="inform_t">
        <p>37分钟</p>
        <p>1.7km</p>
      </div>
    </div>
  </div>
</div>
<div class="menu_tu">
  <div class="menu_a">
    <img src="../../assets/img/fruit_xian.png"/>
  </div>
  <div class="wen">
    <div class="hx"><h5>红心火龙果切300g起</h5></div>
    <div class="yue"><p>月售9份 好评率100%</p></div>
    <div class="mon"><span>￥25.9</span></div>
  </div>
</div>
<div class="menu_tu">
  <div class="menu_a">
    <img src="../../assets/img/fruit_xian.png"/>
  </div>
  <div class="wen">
    <div class="hx"><h5>红心火龙果切300g起</h5></div>
    <div class="yue"><p>月售9份 好评率100%</p></div>
    <div class="mon"><span>￥25.9</span></div>
  </div>
</div>
<div class="zhan">
  <p>展开同类商品</p>
</div>
</div>
</div>
</template>

<script>
    export default {
        name: "fruit_guoqie"
    }
</script>

<style scoped>
  .big_box{
    width: 100%;
    -webkit-flex: 1;
    overflow-y: scroll;
     display: none;
  }
  .menu_tu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .menu_a{
    box-sizing: border-box;
  }
  .menu_a img{
    width:0.8rem;
    padding: 0.12rem 0 0.13rem 0.14rem;
  }
  .wen{
    box-sizing: border-box;
    height: 100%;
    margin-left: 0.1rem;
    flex: 1;
    padding-top: 0.3rem;
  }
  .hx{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -0.35rem;
  }
  .hx h5{
    display:block;
    font-size:0.15rem;
    color:#333;
    line-height: 0.28rem;
  }
  .yue{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .yue p{
    display:block;
    font-size:0.12rem;
    color:#666;
    line-height: 0.2rem;
  }
  .mon{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mon span{
    display:block;
    font-size:0.12rem;
    color:#ec6046;
    line-height: 0.24rem;
    margin-top: 0.2rem;
  }
  .zhan{
    box-sizing: border-box;
  }
  .zhan p{
    display: block;
    font-size: 0.13rem;
    color:#666;
    padding: 0.15rem 1.4rem 0.23rem 1.4rem;
    background: url(../../assets/img/sp_selector_grey_triangle.png) no-repeat;
    background-position: 215px 15px;
    background-size: 0.2rem 0.2rem;
  }

</style>
