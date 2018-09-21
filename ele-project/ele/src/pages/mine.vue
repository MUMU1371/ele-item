<template>
<div class="all">
  <ele-mine-header></ele-mine-header>
  <ele-mine-section></ele-mine-section>
</div>
</template>

<script>
  import EleMineHeader from "../components/mine/ele-mine-header";
  import EleMineSection from "../components/mine/ele-mine-section"
    export default {
        name: "mine",
        components:{EleMineHeader,EleMineSection}
    }
</script>

<style scoped>
.all{
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
</style>
