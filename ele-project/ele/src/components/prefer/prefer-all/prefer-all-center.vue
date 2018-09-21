<template>
  <div class="prefer_center">
    <prefer-center-banner></prefer-center-banner>
    <prefer-center-content></prefer-center-content>
    <prefer-center-menu></prefer-center-menu>
  </div>
</template>

<script>
    import PreferCenterBanner from "./prefer-all-center-banner";
    import PreferCenterContent from "./prefer-all-center-content";
    import PreferCenterMenu from "./prefer-center-menu";
    export default {
        name: "prefer-all-center",
      components: {PreferCenterMenu, PreferCenterContent, PreferCenterBanner}
    }
</script>

<style scoped>
.prefer_center{
  background: #f5f5f5;
  flex: 1;
  /*overflow-y: scroll;*/
}
</style>
