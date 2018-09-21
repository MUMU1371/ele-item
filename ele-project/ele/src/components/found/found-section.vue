<template>
  <section>
    <div class="section_base">
      <found-section-top :top="section1"></found-section-top>
      <found-section-content :content="section2"></found-section-content>
      <found-section-bottom></found-section-bottom>
    </div>
  </section>
</template>

<script>
  import FoundSectionContent from "./found-section-content";
  import FoundSectionBottom from "./found-section-bottom";
  import FoundSectionTop from "./found-section-top";

  export default {
    name: "found-section",
    components: {FoundSectionTop, FoundSectionBottom, FoundSectionContent},
    props: ["section1", "section2"]
  }
</script>

<style scoped>
  section {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background: #0a0b10;
  }

  .section_base {
    background: url("../../assets/img/found_bg1.jpg"),url("../../assets/img/found_bg2.jpg");
    background-repeat: no-repeat,no-repeat;
    background-position: top,bottom;
    background-size: 100%,100%;
    padding: 0 0 3rem;
  }
</style>
