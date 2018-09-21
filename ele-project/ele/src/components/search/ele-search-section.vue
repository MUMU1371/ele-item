<template>
  <section>
    <h3>热门搜索</h3>
    <ul>
      <li class="cai">蔬菜生鲜减20</li>
      <li>黄焖鸡</li>
      <li>冒菜</li>
      <li>汉堡</li>
      <li>披萨</li>
      <li>麻辣香锅</li>
      <li>炸鸡</li>
      <li>面</li>
      <li>香锅</li>
      <li>饺子</li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "ele-search-section"
    }
</script>

<style scoped>
  section {
    flex: 1;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 0.08rem 0.1rem 0;
    height: 100%;
    position: fixed;
    top: 0.48rem;
  }
  section h3{
    display:block;
    font-size:0.14rem;
    color:#373737;
    padding: 0.1rem 0 0 0.1rem;
  }
  section ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  section ul .cai{
    display:block;
    font-size:0.13rem;
    color:#3983f7;
    background:#e3f0fe;
    padding: 0.1rem;
    margin: 0.1rem;
    border-radius: 5px;
  }
  section ul li{
    display:block;
    font-size:0.13rem;
    color:#686868;
    background:#f5f5f5;
    padding: 0.11rem;
    margin: 0.1rem;
    border-radius: 5px;
  }

</style>
