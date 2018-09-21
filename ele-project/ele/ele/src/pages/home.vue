<template>
  <div class="all">
    <home-header></home-header>
    <home-section></home-section>
  </div>
</template>

<script>
  import HomeHeader from "../components/home/home-header";
  import HomeSection from "../components/home/home-section";
  export default {
    name: "home",
    components: {HomeSection, HomeHeader}
  }
</script>

<style scoped>
  .all{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
</style>
