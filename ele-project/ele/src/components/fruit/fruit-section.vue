<template>
  <div class="content">
    <div class="banner">
      <router-link to="" class="banner1"><img src="../../assets/img/fruit_shiliu.png" /></router-link>
      <router-link to="" class="banner2"><img src="../../assets/img/fruit_hongbao.png" /></router-link>
      <router-link to="" class="banner3"><img src="../../assets/img/fruit_1.png" /></router-link>
    </div>
    <div class="menu_head">
      <h4>综合排序</h4>
      <router-link to="">销量最高</router-link>
      <router-link to="">距离最近</router-link>
      <h4>筛选</h4>
    </div>
    <div class="menu_single">
      <div class="menu_pic">
        <img src="../../assets/img/fruit_pic1.png"/>
      </div>
      <div class="menu_inform">
        <div class="menu_inform_len">
          <div class="inform_l">
            <h2>临鲜生活（优果加鲜科技路店）</h2>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <img src="../../assets/img/fruit_star.png"/>
            <span>4.6</span>
            <p>月售157</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <p>￥39起送</p>
            <p>￥6配送</p>
          </div>
          <div class="inform_r">
            <p>37分钟</p>
            <p>1.7km</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <h6>开发票</h6>
            <h6>食安保</h6>
          </div>
        </div>
        <div class="word_all">
          <div class="word">
            <p>减</p>
            <span>满20减11,满39减25,满59减35</span>
            <label>4个活动</label>
          </div>
          <div class="word">
            <p>折</p>
            <span>单品折扣</span>
          </div>
        </div>

      </div>
    </div>
    <div class="menu_single">
      <div class="menu_pic">
        <img src="../../assets/img/fruit_pic2.png"/>
      </div>
      <div class="menu_inform">
        <div class="menu_inform_len">
          <div class="inform_l">
            <h2>爱国者水果便利</h2>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <img src="../../assets/img/fruit_star.png"/>
            <span>4.6</span>
            <p>月售157</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <p>￥39起送</p>
            <p>￥6配送</p>
          </div>
          <div class="inform_r">
            <p>37分钟</p>
            <p>1.7km</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <h6>开发票</h6>
            <h6>食安保</h6>
          </div>
        </div>
        <div class="word_all">
          <div class="word">
            <p>减</p>
            <span>满20减11,满39减25,满59减35</span>
            <label>4个活动</label>
          </div>
          <div class="word">
            <p>折</p>
            <span>单品折扣</span>
          </div>
        </div>

      </div>
    </div>
    <div class="menu_single">
      <div class="menu_pic">
        <img src="../../assets/img/fruit_pic3.png"/>
      </div>
      <div class="menu_inform">
        <div class="menu_inform_len">
          <div class="inform_l">
            <h2>鲜果派(诚信水果超市店)</h2>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <img src="../../assets/img/fruit_star.png"/>
            <span>4.6</span>
            <p>月售157</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <p>￥39起送</p>
            <p>￥6配送</p>
          </div>
          <div class="inform_r">
            <p>37分钟</p>
            <p>1.7km</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <h6>开发票</h6>
            <h6>食安保</h6>
          </div>
        </div>
        <div class="word_all">
          <div class="word">
            <p>减</p>
            <span>满20减11,满39减25,满59减35</span>
            <label>4个活动</label>
          </div>
          <div class="word">
            <p>折</p>
            <span>单品折扣</span>
          </div>
        </div>

      </div>
    </div>
    <div class="car">
      <router-link to=""><img src="../../assets/img/sp_shopping_cart_floating_icon.png" /></router-link>
    </div>
  </div>


</template>

<script>
    export default {
        name: "fruit-section"
    }
</script>

<style scoped>
  .content{
    width:100%;
    background-color: #fff;
    -webkit-flex: 1;
    overflow: auto;
  }
  .banner{
    box-sizing:border-box;
  }
  .banner .banner1 img{
    width:3.75rem;
  }
  .banner .banner2 img{
    width:3.4rem;
    padding:0.15rem;
  }
  .banner .banner3 img{
    width:3.4rem;
    padding:0.15rem;
  }

  .menu_head{
    display: flex;
    line-height: 0.39rem;
    justify-content: space-between;
    padding: 0 0.3rem 0 0.15rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
  }
  .menu_head h4{
    font-size: 0.13rem;
    color: #333333;
    margin: 0 0.05rem;
    padding-right: 0.16rem;
    background:url("../../assets/img/sp_grey_triangle_down_icon.png") no-repeat;
    background-size: 0.13rem 0.13rem;
    background-position: 55px 14px;
  }
  .menu_head h4 img{
    width: 0.1rem;
    margin: 0.17rem 0 0 0.6rem;
    position: fixed;
  }

  .menu_head a{
    font-size: 0.13rem;
    color: #666666;
    margin: 0 0.05rem;
  }
  .menu_head h4:last-child{
    color:#666;
    background:url("../../assets/img/sp_icon_filter.png") no-repeat;
    background-size: 0.12rem 0.12rem;
    background-position: 30px 15px;
  }
  .menu_head a img{
    width: 0.12rem;
    position: fixed;
    margin: -0.24rem 0 0 0.3rem;
  }

  .menu_pic img{
    height: 0.65rem;
    border: 1px solid #e3e2e5;
    border-radius: 0.03rem;
  }
  .menu_single{
    padding: 0.15rem 0.02rem 0 0.1rem;
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .menu_inform{
    height: 100%;
    margin-left: 0.1rem;
    flex: 1;
    font-size: 0.11rem;
    color: #666;
    border-bottom: 1px solid #edeeee;
    padding-bottom: 0.06rem;
  }
  .menu_inform_len {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .inform_r img{
    width: 0.03rem;

  }
  .inform_l{
    display: flex;
    align-items: center;
    height: 0.27rem;
    line-height: 0.27rem;
    vertical-align: center;
  }
  .inform_r{
    float: right;
  }
  a h2{
    font-size: 0.15rem;
    height: 0.17rem;
    margin-bottom:0.07rem;
    font-weight:900;
    color:#333;
    vertical-align:top;
  }
  .inform_l img{
    width: 0.54rem;
    float: left;
  }
  p{
    float: left;
    color: #7f7f7f;
    padding-right: 0.05rem;
  }
  a span{
    color: #ed6d2d;
    float: left;
    padding-right: 0.07rem;
  }
  .inform_r .last{
    width: 0.08rem;
    padding-top: 0.04rem;
  }
  h6{
    color: #333;
    border: 1px solid #7f7f7f;
    border-radius: 2px;
    padding: 0 0.02rem;
    line-height: 0.16rem;
    /*  margin: 0.03rem; */
  }
  h6:first-child{
    margin-right: 0.07rem;
  }
  h4{
    float: left;
    padding-left: 0.02rem;
    font-size: 0.1rem;
    color: #4aa3f8;
    border-radius: 2px ;
  }
  h4 span{
    float: none;
    padding: 0 0.02rem;
    color: white;
    background-color: #4aa3f8;
    margin-left: 0.02rem;
  }
  .word_all{
    box-sizing: border-box;
    padding: 0.1rem 0 0.15rem 0;
  }
  .word{
    overflow: hidden;
    padding-top: 0.02rem;
    padding-bottom: 0.08rem;
    display: flex;
    align-items: center;
  }
  .word p{
    font-size:0.12rem;
    color:#fff;
    background:#e07a77;
    text-align: center;
    padding: 0.02rem;
    border-radius: 2px;

  }
  .word span{
    display: block;
    font-size: 0.12rem;
    color: #666;
    width: 1.85rem;
    margin-left: 0.05rem;
  }
  .word label{
    display: block;
    font-size: 0.12rem;
    color: #999;
    padding: 0 0.14rem 0 0.1rem;
    background:url(../../assets/img/re_store_header_promotion_arrow_down.png) no-repeat right;
    background-size: 0.1rem 0.08rem;
  }
  .car img{
    width: 0.46rem;
    position: fixed;
    bottom: 0.23rem;
    left: 3.15rem;
  }
</style>
