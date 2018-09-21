<template>
  <div class="box">
    <div class="top">
      <p>其他</p>
      <img src="../../assets/img/order_run.png" class="run"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ele-order-header"
    }
</script>

<style scoped>
  .box{
    width:100%;
    height:0.48rem;
  }
  .top{
    display:block;
  }
  .top p{
    display:block;
    font-size:0.14rem;
    color:#304040;
    font-weight: bold;
    padding: 0.18rem 0 0 3.2rem;
    letter-spacing: 1px;
  }
  .run{
    width: 1.2rem;
    margin-left: 2.3rem;
    display: none;
  }
  .top p:hover +.run{
    display:block;
  }

</style>
