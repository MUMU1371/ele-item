<template>
  <div class="all">
    <found-header></found-header>
    <found-section :section1="found1" :section2="found2"></found-section>
  </div>
</template>

<script>
    import $ from 'jquery'
    import FoundHeader from "../components/found/found-header";
    import FoundSection from "../components/found/found-section";
    export default {
        name: "found",
      components: {FoundSection, FoundHeader},
      data(){
        return {
          found1:[],
          found2:[]
        }
      },
      created () {
        this.$http.get('/api/found').then(response => {
          this.found1=response.data.data.tips;
          this.found2=response.data.data.persons;
        }, response => {
          console.log('数据加载失败')
        })
      },
      mounted() {
        $(function () {
          console.log($("section").scrollTop())
          $("section").scroll(function(){
            if ($("section").scrollTop()>100){
              $("header").css("margin-top",0);
            }
            else
            {
              $("header").css("margin-top",-48);
            }
          })
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
}
</style>
