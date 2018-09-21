<template>
  <footer>
    <router-link to="/home">
      <i class="home_img"></i>
      <p>外卖</p>
    </router-link>
    <router-link to="/found">
      <i class="found_img"></i>
      <p>这! 就是灌篮</p>
    </router-link>
    <router-link to="/order">
      <i class="order_img"></i>
      <p>订单</p>
    </router-link>
    <router-link to="/mine">
      <i class="person_img"></i>
      <p>我的</p>
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: "public-footer",
      watch: {
        "$route": "getPath"
      },
      methods: {
        getPath() {}
      }
    }
</script>

<style scoped>
  footer {
    width: 100%;
    display: flex;
    height: 0.48rem;
    background: #fff;
    -webkit-align-items: center;
    -webkit-justify-content: center;
  }

  footer a {
    flex: 1;
    text-align: center;
  }

  footer i {
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.01rem 0 0.02rem 0.36rem;
    background-size: 100%;
  }

  footer p {
    color: #8b8b8b;
    font-size: 0.1rem;
  }

  .home_img {
    background-image: url("../../assets/img/icon_home.png");
  }

  .found_img {
    background-image: url("../../assets/img/icon_found.png");
  }

  .order_img {
    background-image: url("../../assets/img/icon_order.png");
  }

  .person_img {
    background-image: url("../../assets/img/icon_person.png");
  }

  /*选中状态*/
  .router-link-active p {
    color: #5c91f0;
  }

  .router-link-active .home_img {
    background-image: url("../../assets/img/icon_home1.png");
  }

  .router-link-active .found_img {
    background-image: url("../../assets/img/icon_found1.png");
  }

  .router-link-active .order_img {
    background-image: url("../../assets/img/icon_order1.png");
  }

  .router-link-active .person_img {
    background-image: url("../../assets/img/icon_person1.png");
  }
</style>
