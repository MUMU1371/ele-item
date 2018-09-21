<template>
  <div class="all">
    <fruit-header></fruit-header>
    <fruit-section></fruit-section>
    <fruit-guoqie></fruit-guoqie>
  </div>
</template>

<script>
  import FruitHeader from "../components/fruit/fruit-header";
  import FruitSection from "../components/fruit/fruit-section";
  import FruitGuoqie from "../components/fruit/fruit-guoqie";
  export default {
    name: "fruit",
    components: {FruitGuoqie, FruitSection, FruitHeader}
  }
</script>

<style scoped>
  .all{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>

