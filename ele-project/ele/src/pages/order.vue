<template>
  <div class="all">
    <ele-order-header></ele-order-header>
    <ele-order-section></ele-order-section>
  </div>
</template>

<script>
    import EleOrderHeader from "../components/order/ele-order-header";
    import EleOrderSection from "../components/order/ele-order-section";
    export default {
        name: "order",
      components: {EleOrderHeader,EleOrderSection}
    }
</script>

<style scoped>
  .all{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }

</style>
