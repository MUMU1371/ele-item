<template>
  <div class="top">
    <div class="top_a">
      <router-link to="/home" class="first"><img src="../../assets/img/ap_backlink_arrow.png"/></router-link>
      <p>水果</p>
    </div>
    <div class="top_input">
      <input type="text" placeholder="输入商家、商品名称">
    </div>
    <div class="menu">
      <router-link to="" class="fruit_you"><span>为你精选</span></router-link>
      <router-link to=""><span @click="show(1)">果切</span></router-link>
      <router-link to=""><span>西瓜</span></router-link>
      <router-link to=""><span>榴莲</span></router-link>
      <router-link to=""><span>奇异果/猕猴桃</span></router-link>
      <router-link to=""><span>葡萄/提子</span></router-link>
      <router-link to=""><span>蜜桔</span></router-link>
      <router-link to=""><span>冬枣</span></router-link>

      <div class="fruit_sort">
        <router-link to="/fruitsort"><img src="../../assets/img/icon_sort.png"/></router-link>
      </div>
    </div>
    <fruit-guoqie v-if="flag==1"></fruit-guoqie>
  </div>
</template>

<script>
  import FruitGuoqie from "./fruit-guoqie"

  export default {
    name: "fruit-header",
    components: {FruitGuoqie},
    data() {
      return {
        flag: 1,
      }
    },
    methods: {
      show(f) {
        this.flag = f;
      }
    },

  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 1.4rem;
    background-image: linear-gradient(90deg, #0af, #48a0f8);
  }
  .top_a {
    display: flex;
    flex: 1;
    margin-bottom: 0.1rem;
  }
  .first {
    padding-left: 0.17rem;
  }
  .first img {
    width: 0.2rem;
    padding-top: 0.1rem;
  }
  .second img {
    width: 0.25rem;
    padding-top: 0.1rem;
  }
  .second {
    padding-left: 1.2rem;
  }
  .top_a p {
    display: block;
    font-size: 0.18rem;
    color: #ffffff;
    padding-left: 1.45rem;
    padding-top: 0.1rem;
    font-weight: 700;
  }
  .top_input {
    background-image: linear-gradient(90deg, #0af, #48a0f8);
    line-height: normal;
    display: flex;
  }
  .top_input input {
    width: 3.4rem;
    height: 0.38rem;
    border-radius: 5px;
    text-align: center;
    margin: 0.05rem 0 0.1rem 0.17rem;
    border: none;
    background: url("../../assets/img/ap_search_icon.png") no-repeat #fff;
    background-size: 0.14rem 0.14rem;
    background-position: 90px 12px;
  }
  .top_input img {
    display: block;
    width: 0.12rem;
    height: 0.12rem;
  }
  .top_input input::-webkit-input-placeholder {
    color: #666;
    font-weight: 700;
  }
  .menu {
    display: flex;
    overflow-y: scroll;
    white-space: nowrap;
    margin: 0 0.55rem 0 0.2rem;
  }

  .menu .fruit_you {
    width: 0.6rem;
  }

  .menu .fruit_you span {
    margin: 0 0 0 -0.2rem;
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
  }

  .menu a span {
    display: block;
  }

  .menu a span:hover {
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
  }

  .menu a span {
    font-size: 0.14rem;
    color: #ffffff;
    padding: 0.1rem 0.1rem 0.2rem 0.2rem;
  }

  .fruit_sort {
    display: flex;
    position: fixed;
    left: 3.22rem;
  }

  .fruit_sort a {
    margin: 0.12rem 0 0 0.2rem;
  }

  .fruit_sort a img {
    width: 0.14rem;
  }
</style>
