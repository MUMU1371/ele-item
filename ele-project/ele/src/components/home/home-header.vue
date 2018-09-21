<template>
  <header>
    <div class="header_top">
      <router-link to="" class="top_one">

      </router-link>
      <div class="top_two">

      </div>
    </div>
    <div class="header_bottom">
      <router-link to="" class="bott_search">

      </router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "home-header"
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.91rem;
    background: #fff;
  }

  .header_top {
    width: 100%;
    height: 0.54rem;
    padding: 0 0.16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header_bottom {
    width: 100%;
    height: 0.42rem;
    padding: 0 0.12rem;
  }

  .top_one {
    width: 100%;
    height: 0.42rem;
  }

  .top_two {
    width: 100%;
    height: 0.42rem;
  }
</style>
