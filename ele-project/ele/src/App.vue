<template>
  <div class="app">
    <router-view></router-view>
    <public-footer v-show="this.$route.meta.show"></public-footer>
  </div>
</template>

<script>
import PublicFooter from "./components/public/public-footer";
export default {
  name: 'App',
  components: {PublicFooter}
}
</script>

<style>
.app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
