<template>
  <header>
    <div class="header_logo">
      <router-link to=""><img src="../../assets/img/od_icon_back_white.png"/> </router-link>
      <div class="header_right">
        <router-link to=""><img src="../../assets/img/sp_shop_detail_action_search.png"/> </router-link>
        <router-link to=""><img src="../../assets/img/sp_shop_detail_action_pindan.png"/> </router-link>
        <router-link to=""><img src="../../assets/img/od_icon_detail_more_menu_normal.png"/> </router-link>
      </div>

    </div>
    <img class="logo" src="../../assets/img/prefer-meau-1.png"/>
    <img class="tit_pic" src="../../assets/img/sp_favor_hollow.png"/>
  </header>
</template>

<script>
    export default {
        name: "shopDetail-header"
    }
</script>

<style scoped>
  header{
    background: #958b7f;
    width: 100%;
    height: 1.03rem;
    box-sizing: border-box;
  }
  header .header_logo{
    height: 0.43rem;
    width: 100%;
    display: flex;
    font-size: 0.18rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.54rem;
    justify-content: space-between;
    padding: 0 0 0.1rem;
    box-sizing: border-box;
  }
header a{
  float: left;
}
  .header_logo img {
    height: 0.19rem;
    padding: 0.09rem 0.08rem;

  }
  .logo,.tit_pic{
    position: absolute;
  }
  .logo{
    left: 1.5rem;
    top:0.5rem;
    width: 0.75rem;
    border-radius: 4px;
  }
  .tit_pic{
    left: 3.25rem;
    top:0.85rem;
    width: 0.23rem;
    padding: 0.06rem;
    background-color: white;
    border-radius: 50%;
  }
</style>
