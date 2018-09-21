<template>
<div class="all">
  <fruitsort-header></fruitsort-header>
  <fruitsort-section></fruitsort-section>
</div>
</template>

<script>
    import FruitsortSection from "../components/fruitsort/fruitsort-section";
    import FruitsortHeader from "../components/fruitsort/fruitsort-header";
    export default {
        name: "fruitsort",
      components: {FruitsortHeader, FruitsortSection}
    }
</script>

<style scoped>
  .all{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
