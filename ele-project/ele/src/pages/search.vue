<template>
<div>
  <ele-search-header></ele-search-header>
  <ele-search-section></ele-search-section>
</div>
</template>

<script>

    import EleSearchHeader from "../components/search/ele-search-header"
    import EleSearchSection from "../components/search/ele-search-section";
    export default {
        name: "search",
        components:{EleSearchHeader,EleSearchSection}
    }
</script>

<style scoped>

</style>
