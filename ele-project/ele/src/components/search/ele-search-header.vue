<template>
  <header>
    <form class="h_input">
      <input type="text" placeholder="输入商家或商品名称">
    </form>
    <a class="quxiao" @click="back" >取消</a>
  </header>
</template>

<script>
    export default {
      name: "ele-search-header",
      methods: {
        back() {
          this.$router.go(-1);//返回上一层
        }
      }
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
  }
  .quxiao {
    display: block;
    color: #4a94f7;
    font-size: 0.14rem;
  }

  .h_input input {
    color: #000;
    border: none;
    width: 3rem;
    height: 0.3rem;
    display: block;
    line-height: 0.3rem;
    margin: 0rem 0.2rem 0 0.12rem;
    text-indent: 0.28rem;
    border-radius: 0.5rem;
    background: #efefef url(../../assets/img/search.png) no-repeat 0.1rem center;
    background-size: 0.12rem 0.12rem;
  }
  .h_input input:hover{
    color:#4c6aea;
  }
  ::placeholder {
    color: #bbbabf;
  }

</style>
