<template>
    <div class="content">
        <div class="content_head">
            <h6>大牌特惠</h6>
        </div>
        <div class="content_meau">
          <router-link to="">
              <h4>本地惠吃</h4>
              <h5>大牌立减</h5>
              <img src="../../../assets/img/prefer-section-1.png"/>
          </router-link>
          <router-link to="">
            <h4>品质餐厅</h4>
            <h5>立减20</h5>
            <img src="../../../assets/img/prefer-section-2.png"/>
          </router-link>
          <router-link to="">
            <h4>汉堡节</h4>
            <h5>低至半价</h5>
            <img src="../../../assets/img/prefer-section-3.png"/>
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "prefer-all-content"
    }
</script>

<style scoped>
h6{
  line-height: 0.44rem;
  font-size: 0.13rem;
  text-align: center;
  background: #ffffff;
  width: 0.6rem;
  margin: 0 auto;
  font-weight: bolder;
}
.content{
  background: #ffffff;
  border-bottom: 0.13rem;
  margin-bottom: 0.07rem;
}
.content_head{
  background: url("../../../assets/img/prefer-section-0.png") no-repeat center top;
  -webkit-background-size: 1.28rem;
  background-size: 1.28rem;
}

.content_meau{
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;

}
  a{
    width: 1.17rem;
    background: #fafafa;
    color: #000000;
    display: block;
  }
  h4{
    font-size: 0.16rem;
    text-align: center;
    padding-top: 0.16rem;
    font-weight: bolder;
  }
  h5{
    font-size:0.1rem;
    text-align: center;
    color: #999999;
    line-height: 0.22rem;
    padding-bottom: 0.17rem;

  }
  img{
    width: 0.66rem;
    margin: 0 auto;
  }
</style>
