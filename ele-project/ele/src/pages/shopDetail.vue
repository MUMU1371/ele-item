<template>
  <div class="section">
    <shop-detail-header></shop-detail-header>
    <shop-detail-center></shop-detail-center>
    <shop-detail-footer></shop-detail-footer>
  </div>

</template>

<script>
    import ShopDetailFooter from "../components/shopDetail/shopDetail-footer";
    import ShopDetailHeader from "../components/shopDetail/shopDetail-header";
    import ShopDetailCenter from "../components/shopDetail/shopDetail-center";
    export default {
        name: "shopdetail",
      components: {ShopDetailCenter, ShopDetailHeader, ShopDetailFooter}
    }
</script>

<style scoped>
  .section{
    display: flex;
    flex-direction: column;
    flex: 1;
    /*overflow-x: scroll;*/
    width: 100%;

  }
</style>
