<template>
  <div class="prefer_center">
    <prefer-center-menu></prefer-center-menu>
  </div>
</template>

<script>


    import PreferCenterMenu from "../prefer-all/prefer-center-menu";
    export default {
        name: "prefer-others-center",
      components: {PreferCenterMenu}
    }
</script>

<style scoped>
.prefer_center{
  background: #f5f5f5;
  flex: 1;
  overflow-y: scroll;
}
</style>
