<template>
  <div class="center">
    <div class="qi">
      <span>当前订单</span>
    </div>
    <div class="pic">
      <router-link to="" class="my"><img src="../../assets/img/order_rest.png" /></router-link>
      <div class="suifeng">
        <div class="word">
          <p>米多面多城市便当（鱼化寨...</p>
        </div>
        <div class="number">
          <span>土豆牛肉+鸡腿套餐 等2件商品 ￥42.6</span>
        </div>
      </div>
      <router-link to="" class="myb"><img src="../../assets/img/my_right.png" /></router-link>
    </div>
    <div class="map">
      <router-link to="">
        <img src="../../assets/img/order_map.png" />
      </router-link>
    </div>
    <div class="pay">
      <p>去支付</p>
      <span>历史订单</span>
    </div>
    <div class="wode">
      <div class="pic">
        <router-link to="" class="my"><img src="../../assets/img/order_meat.png" /></router-link>
        <div class="suifeng">
          <div class="meat">
            <p>叁宝烤肉(丈八北路店)</p>
          </div>
          <div class="time">
            <span>2018-09-18 12:00</span>
          </div>
        </div>
        <router-link to="" class="myb"><img src="../../assets/img/my_right.png" /></router-link>
        <div class="suifeng">
          <div class="quxiao">
            <router-link to="">订单已取消</router-link>
          </div>
          <div class="chaoshi">
            <router-link to="">订单超时未支付</router-link>
          </div>
        </div>
      </div>
      <div class="pro">
        <span>烤肉筋(10串/份) -...等3件商品</span>
        <p>￥25.6</p>
      </div>
    </div>
    <div class="wode">
      <div class="pic">
        <router-link to="" class="my"><img src="../../assets/img/order_m.png" /></router-link>
        <div class="suifeng">
          <div class="meat">
            <p>西安麦当劳高万达餐厅</p>
          </div>
          <div class="time">
            <span>2018-09-18 12:00</span>
          </div>
        </div>
        <router-link to="" class="myb"><img src="../../assets/img/my_right.png" /></router-link>
        <div class="suifeng">
          <div class="quxiao">
            <router-link to="">订单已取消</router-link>
          </div>
          <div class="chaoshi">
            <router-link to="">订单超时未支付</router-link>
          </div>
        </div>
      </div>
      <div class="pro">
        <span>烤肉筋(10串/份) -...等3件商品</span>
        <p>￥25.6</p>
      </div>
    </div>
    <div class="wode">
      <div class="pic">
        <router-link to="" class="my"><img src="../../assets/img/order_rest.png" /></router-link>
        <div class="suifeng">
          <div class="meat">
            <p>米多面多西安城市餐厅</p>
          </div>
          <div class="time">
            <span>2018-09-18 12:00</span>
          </div>
        </div>
        <router-link to="" class="myb"><img src="../../assets/img/my_right.png" /></router-link>
        <div class="suifeng">
          <div class="quxiao">
            <router-link to="">订单已取消</router-link>
          </div>
          <div class="chaoshi">
            <router-link to="">订单超时未支付</router-link>
          </div>
        </div>
      </div>
      <div class="pro">
        <span>烤肉筋(10串/份) -...等3件商品</span>
        <p>￥42.5</p>
      </div>
    </div>
    <div class="wode">
      <div class="pic">
        <router-link to="" class="my"><img src="../../assets/img/order_m.png" /></router-link>
        <div class="suifeng">
          <div class="meat">
            <p>叁宝烤肉(丈八北路店)</p>
          </div>
          <div class="time">
            <span>2018-09-18 12:00</span>
          </div>
        </div>
        <router-link to="" class="myb"><img src="../../assets/img/my_right.png" /></router-link>
        <div class="suifeng">
          <div class="quxiao">
            <router-link to="">订单已取消</router-link>
          </div>
          <div class="chaoshi">
            <router-link to="">订单超时未支付</router-link>
          </div>
        </div>
      </div>
      <div class="pro">
        <span>烤肉筋(10串/份) -...等3件商品</span>
        <p>￥85.5</p>
      </div>
    </div>
    <div class="dan">
      <p>再来一单</p>
    </div>
    <div class="cha">
      <p>查看三个月前的外卖订单</p><img src="../../assets/img/ap_city_location_arrow_down.png" />
    </div>
  </div>
</template>

<script>
    export default {
        name: "ele-order-section"
    }
</script>

<style scoped>
  .center{
    width:100%;
    -webkit-flex: 1;
    overflow-y: scroll;
  }

  .qi{
    display:block;
  }
  .qi span{
    display:block;
    font-size:0.2rem;
    color:#333333;
    padding: 0 0 0 0.15rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .rest img{
    display:block;
    width:0.36rem;
    height:0.36rem;
    border-radius:5px;
  }
  .msg p{
    display:block;
    font-size: 0.14rem;
    color:#333;
  }
  .msg span{
    display:block;
    font-size: 0.12rem;
    color:#b1b1b1;
  }

  .pic{
    display:flex;
    flex:1;
  }
  .pic a{
    display: block;
  }
  .pic .my img{
    width:0.36rem;
    height:0.36rem;
    border-radius: 5px;
    padding: 0.2rem 0 0.2rem 0.11rem;
  }
  .word{
    display:flex;
  }
  .word p{
    font-size: 0.14rem;
    color:#333333;
    padding: 0.2rem 0 0 0.11rem;
    letter-spacing:2px;
  }
  .number{
    display:flex;
  }
  .number span{
    display:block;
    font-size: 0.12rem;
    color:#afafaf;
    padding: 0.02rem 0 0 0.11rem;
    /* letter-spacing: 1px; */
  }
  .pic .myb img{
    width: 0.08rem;
    height: 0.12rem;
    padding-top: 0.2rem;
    padding-left: 0.15rem;
  }
  .map a img{
    width:3.5rem;
    height:1.42rem;
    padding-left: 0.11rem;
    border-radius: 5px;
  }


  .pay{
    display:block;
  }
  .pay p{
    display:block;
    font-size:0.14rem;
    color:#ec6046;
    font-weight: bold;
    margin: 0.15rem 0.15rem 0 2.8rem;
    padding: 0.1rem;
    letter-spacing: 1px;
    border:1px solid #f4b7ac;
    text-align: center;
    border-radius: 5px;
  }
  .pay span{
    display:block;
    font-size:0.2rem;
    color:#333333;
    margin: 0 0 0 0.15rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .rest{
    display:flex;
  }
  .rest img{
    display:block;
    width:0.36rem;
    height:0.36rem;
    border-radius:5px;
  }
  .msg{
    display: flex;
  }
  .msg p{
    display:block;
    font-size: 0.14rem;
    color:#333;
  }
  .msg span{
    display:block;
    font-size: 0.12rem;
    color:#b1b1b1;
  }

  .pic{
    display:flex;
    flex:1;
  }
  .pic a{
    display: block;
  }
  .pic .my img{
    width:0.36rem;
    height:0.36rem;
    border-radius: 5px;
    padding: 0.2rem 0 0.1rem 0.11rem;
  }
  .meat{
    display:flex;
  }
  .meat p{
    font-size: 0.14rem;
    color:#333333;
    padding: 0.2rem 0 0 0.11rem;
    letter-spacing:2px;
  }
  .time{
    display:flex;
  }
  .time span{
    display:block;
    font-size: 0.12rem;
    color:#afafaf;
    padding: 0.02rem 0 0 0.11rem;
  }
  .pic .myb img{
    width: 0.08rem;
    height: 0.12rem;
    padding-top: 0.2rem;
    padding-left: 0.15rem;
  }
  .quxiao{
    display:flex;
  }
  .quxiao a{
    font-size: 0.14rem;
    color: #333333;
    padding: 0.2rem 0 0 0.46rem;
    letter-spacing: 2px;
  }
  .chaoshi{
    display:flex;
  }
  .chaoshi a{
    display:block;
    font-size: 0.12rem;
    color:#afafaf;
    padding: 0.02rem 0 0 0.35rem;
  }

  .pro{
    display:flex;
  }
  .pro span{
    font-size: 0.13rem;
    color: #333333;
    padding: 0.1rem 0 0 0.58rem;
  }
  .pro p{
    display: block;
    font-size: 0.12rem;
    color: #333;
    padding: 0.12rem 0 0 0.7rem;
  }
  .dan{
    display:block;
  }
  .dan p{
    display: block;
    font-size: 0.14rem;
    color: #212121;
    font-weight: bold;
    margin: 0.2rem 0.1rem 0 2.8rem;
    padding: 0.1rem;
    letter-spacing: 1px;
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 5px;
  }
  .cha{
    display: flex;
    width: 3.1rem;
    margin-left: 0.55rem;
    margin-top: 0.15rem;
    border-top: 1px solid #eeedee;
  }
  .cha p{
    font-size: 0.12rem;
    color:#666;
    padding: 0.15rem 0 0 0.5rem;
    letter-spacing: 1px;
  }
  .cha img{
    width: 0.08rem;
    height: 0.12rem;
    padding: 0.18rem 0 0 0.06rem;
  }
</style>
