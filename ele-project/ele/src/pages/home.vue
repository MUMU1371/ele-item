<template>
  <div class="all">
    <home-header></home-header>
    <home-section :section1="found1" :section2="found2"></home-section>
  </div>
</template>

<script>
  import HomeHeader from "../components/home/home-header";
  import HomeSection from "../components/home/home-section";
  export default {
    name: "home",
    components: {HomeSection, HomeHeader},
    data(){
      return {
        found1:[],
        found2:[]
      }
    },
    created () {
      this.$http.get('/api/found').then(response => {
        this.found1=response.data.data.banner;
        this.found2=response.data.data.nav;
      }, response => {
        console.log('数据加载失败')
      })
    }
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
