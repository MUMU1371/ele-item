<template>
  <section>
    <home-section-banner></home-section-banner>
    <home-section-nav></home-section-nav>
  </section>
</template>

<script>
  import HomeSectionBanner from "./home-section-banner";
  import HomeSectionNav from "./home-section-nav";

  export default {
    name: "home-section",
    components: {HomeSectionNav, HomeSectionBanner}
  }
</script>

<style scoped>
  section {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background: #fff;
  }
</style>
