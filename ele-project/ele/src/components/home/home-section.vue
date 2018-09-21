<template>
  <section>
    <home-section-banner :banner="section1"></home-section-banner>
    <home-section-nav :nav="section2"></home-section-nav>
  </section>
</template>

<script>
  import HomeSectionBanner from "./home-section-banner";
  import HomeSectionNav from "./home-section-nav";

  export default {
    name: "home-section",
    components: {HomeSectionNav, HomeSectionBanner},
    props: ["section1", "section2"]
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
