<template>
  <div>
    <ele-set-header></ele-set-header>
    <ele-set-section></ele-set-section>
  </div>
</template>

<script>
  import EleSetHeader from "../components/set/ele-set-header";
  import EleSetSection from "../components/set/ele-set-section"
    export default {
        name: "set",
        components:{EleSetHeader,EleSetSection}
    }
</script>

<style scoped>
body{
  background:#f5f5f5;
}
</style>
