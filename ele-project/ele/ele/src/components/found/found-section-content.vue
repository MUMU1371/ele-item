<template>
  <div class="center">
    <div class="center_base">
      <div class="cent_head">
        <div class="head_one">周榜</div>
        <div class="head_two">总排行榜</div>
      </div>
      <found-section-content-one :one="content"></found-section-content-one>
      <found-section-content-two></found-section-content-two>
    </div>
  </div>
</template>

<script>
  import FoundSectionContentOne from "./found-section-content-one";
  import FoundSectionContentTwo from "./found-section-content-two";

  export default {
    name: "found-section-content",
    components: {FoundSectionContentTwo, FoundSectionContentOne},
    props: ["content"]
  }
</script>

<style scoped>
  .center {
    padding: 0.08rem;
  }

  .center_base {
    border: 0.02rem solid #66aff2;
    padding: 0.05rem;
    border-radius: 0.08rem;
  }

  .cent_head {
    background: url("../../assets/img/found_titbg1.png");
    background-size: 100% 100%;
    height: 0.4rem;
    display: flex;;
    align-items: center;
    justify-content: space-around;
    color: #5b81d6;
    font-size: 0.16rem;
  }

  .head_one {
    padding-left: 0.45rem;
    color: #fff;
  }

  .head_two {
    color: #5b81d6;
    padding-left: 0.4rem;
  }
</style>
