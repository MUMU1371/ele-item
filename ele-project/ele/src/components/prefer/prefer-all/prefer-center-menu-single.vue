<template>
  <router-link to="">
    <div class="menu_single">
      <div class="menu_pic">
        <img src="../../../assets/img/prefer-meau-1.png"/>
      </div>
      <div class="menu_inform">
        <div class="menu_inform_len">
          <div class="inform_l">
            <h2>十八家子水饺（鱼化寨站）</h2>
          </div>
          <div class="inform_r">
            <img src="../../../assets/img/sp_food_category_overflow.png"/>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <img src="../../../assets/img/od_icon_star_golden.png"/>
            <span>4.6</span>
            <p>月售157</p>
          </div>
          <div class="inform_r">
              <h4>准时达<span>蜂鸟专送</span></h4>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <p>起送￥39</p>
            <p>配送￥6</p>
          </div>
          <div class="inform_r">
            <p>37分钟</p>
            <p>1.7km</p>
          </div>
        </div>
        <div class="menu_inform_len">
          <div class="inform_l">
            <h6>25减10</h6>
            <h6>8元会员红包</h6>
            <h6>8折</h6>
            <h6>食安保</h6>
          </div>
          <div class="inform_r">
            <img class="last" src="../../../assets/img/sp_grey_triangle_down_icon.png"/>
          </div>
        </div>
        <div class="inform_pic">
          <div class="inform_pic_sin">
            <div class="sin_pic">
              <img src="../../../assets/img/prefer-meau-sin-1.png"/>
              <h3 >5折</h3>
            </div>
            <h1>巧克力咖啡...</h1>
            <p>￥27.9<span>￥55.8</span></p>
          </div>
          <div class="inform_pic_sin">
            <div class="sin_pic">
              <img src="../../../assets/img/prefer-meau-sin-1.png"/>
              <h3 >5折</h3>
            </div>
            <h1>巧克力咖啡...</h1>
            <p>￥27.9<span>￥55.8</span></p>
          </div>
          <div class="inform_pic_sin">
            <div class="sin_pic">
              <img src="../../../assets/img/prefer-meau-sin-1.png"/>
              <h3 >5折</h3>
            </div>
            <h1>巧克力咖啡...</h1>
            <p>￥27.9<span>￥55.8</span></p>
          </div>
        </div>
        <i>附近还有两家</i>
      </div>

    </div>
  </router-link>

</template>

<script>
    export default {
        name: "prefer-center-meau-single"
    }
</script>

<style scoped>

  .menu_pic img{
    width: 0.79rem;
    border: 1px solid #e3e2e5;
    border-radius: 0.03rem;
    margin: 0.02rem;
  }
  .menu_single{
    padding: 0.15rem 0.1rem 0;
    display: flex;
  }
  .menu_inform{
    margin-left: 0.07rem;
    flex: 1;
    font-size: 0.11rem;
    border-bottom: 1px solid #edeeee;
    padding-bottom: 0.06rem;
  }
  .menu_inform_len {
    overflow: hidden;
    padding-bottom: 0.08rem;
  }
  .inform_r img{
    width: 0.03rem;

  }
  .inform_l{
    float: left;

  }
  .inform_r{
    float: right;
  }
  a h2{
    font-size: 0.15rem;
    font-weight: bolder;
    color: black;

  }
  .inform_l img{
    width: 0.1rem;
    float: left;
  }
  p{
    float: left;
    color: #7f7f7f;
    padding-right: 0.07rem;
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
    float: left;
    color: #7f7f7f;
    border: 1px solid #7f7f7f;
    border-radius: 2px;
    padding: 0 0.05rem;
    margin-left: 0.04rem;
  }
  h4{
    float: left;
    padding-left: 0.02rem;
    font-size: 0.1rem;
    border: 1px solid #4aa3f8;
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
  .sin_pic img{
    width: 0.84rem;
  }
  .sin_pic{
    position: relative;
    width: 0.84rem;
    height: 0.84rem;
    border: 1px solid #e5e4e5;
    border-radius: 3px;
  }
  .sin_pic h3{
    position: absolute;
    top: 0;
    left: 0.05rem;
    font-size: 0.09rem;
    background: url("../../../assets/img/prefer-meau-sin-bg-1.png");
    background-size: 100% 100%;
    padding: 0.03rem 0.07rem 0.07rem;
    color: white;
  }
  h1{
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 0.8rem;
    font-size: 0.12rem;
  }
  .inform_pic_sin p {
    color: #ec6046;
    font-size: 0.12rem;
  }
  .inform_pic_sin span{
    font-size: 0.09rem;
    text-decoration: line-through;
    float: none;
    color: #a7a7a7;
  }
  .inform_pic{
    display: flex;
    justify-content:space-between;
    padding-bottom: 0.13rem;
    border-bottom: 1px solid #edeeee;
  }
  i{
    color: #969596;
    font-size: 0.12rem;
    padding-top: 0.12rem;
    padding-bottom: 0.08rem;
  }
</style>
