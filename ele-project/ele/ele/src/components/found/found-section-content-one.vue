<template>
  <div class="content_one">
    <div class="one_head"><h3>每周六22:00更新周榜</h3></div>
    <div class="one_center">
      <div class="center_person" v-for="i in one" :key="i.id">
        <div class="person_base">
          <div class="person_icon"></div>
          <div class="person_num">{{i.num}}</div>
          <img class="person_logo" :src="i.pic"/>
          <div class="person_name">{{i.name}}</div>
          <p class="person_votes">{{(i.weekVotes).toLocaleString('en-US')}}</p>
          <div class="person_call">加油</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "found-section-content-one",
    props: ["one"]
  }
</script>

<style scoped>
  .content_one {
    font-size: 0.12rem;
  }

  .one_head {
    background: #081536 url("../../assets/img/found_tittle3.png") no-repeat;
    height: 1.3rem;
    background-size: 3.49rem 1.14rem;
  }

  .one_head h3 {
    color: #68a0f9;
    font-size: 0.1rem;
    text-align: center;
    padding: 0.98rem 0 0;
    box-sizing: border-box;
  }

  .one_center {
    background-color: #081536;
  }

  .center_person {
    display: inline-block;
    margin: 0 0.1rem 0.25rem 0.16rem;
  }

  .person_base {
    position: relative;
    width: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .person_icon {
    background: url("../../assets/img/icon_win.png");
    background-size: 100% 100%;
    position: absolute;
    top: -0.02rem;
    left: -0.03rem;
    width: 0.28rem;
    height: 0.25rem;
  }

  .person_num {
    position: absolute;
    font-weight: 500;
    color: #fff;
    top: 0.04rem;
    left: 0.03rem;
    font-size: 0.1rem;
    z-index: 100;
    width: 0.2rem;
    text-align: center;
    transform: rotate(-45deg);
  }

  .person_logo {
    height: 0.85rem;
  }

  .person_name {
    background: #2955b8;
    position: absolute;
    bottom: 0.41rem;
    left: 50%;
    transform: translate(-50%);
    white-space: nowrap;
    font-size: 0.1rem;
    color: #fff;
    padding: 0 0.05rem;
    border-radius: 0.02rem;
    height: 0.2rem;
    line-height: 0.2rem;
  }

  .person_votes {
    font-weight: 500;
    font-size: 0.12rem;
    color: #fff;
    margin-top: 0.1rem;
  }

  .person_call {
    font-weight: 500;
    font-size: 0.14rem;
    color: #fff;
    margin-top: 0.05rem;
    background: #e94619;
    padding: 0 0.1rem;
    border-radius: 0.5rem;
    height: 0.18rem;
    line-height: 0.18rem;
  }
</style>
