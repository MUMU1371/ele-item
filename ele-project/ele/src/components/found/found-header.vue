<template>
  <header>
    <h3>这! 就是灌篮</h3>
    <span class="hea_icon">分享</span >
  </header>
</template>

<script>
    export default {
        name: "found-header"
    }
</script>

<style scoped>
  header {
    width: 100%;
    color: #fff;
    display: flex;
    height: 0.48rem;
    margin-top: -0.48rem;
    align-items: center;
    justify-content: flex-end;
    background: url(../../assets/img/found_header_bg.jpg) repeat-y;
  }

  header h3 {
    font-size: 0.16rem;
    margin-right: 0.85rem;
    font-weight: bold;
  }
  .hea_icon {
    color: #fff;
    display: block;
    font-size: 0.14rem;
    margin-right: 0.15rem;
  }
</style>
