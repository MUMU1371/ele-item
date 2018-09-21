<template>
  <div class="option">
    <div class="header_meau">
      <div class="header_meau_sro">
         <h4>请选择分类</h4>
      </div>
      <img @click="show(0)" src="../../assets/img/re_pop_arrow_up.png"/>
    </div>
    <div class="option_center">
      <div class="option_center_l">
          <div class="choice" name="focus">
            <h6>美食</h6>
            <h5>341</h5>
          </div>
        <div class="choice">
          <h6>美食</h6>
          <h5>341</h5>
        </div>
      </div>
      <div class="option_center_r">
         <router-link to="">
           <div class="choice focus" name="focus">
              <img src="../../assets/img/prefer-opt-1.png"/>
              <h6>全部</h6>
              <h5>341</h5>
           </div>
         </router-link>
        <router-link to="">
            <div class="choice">
            <img src="../../assets/img/prefer-opt-1.png"/>
            <h6>全部</h6>
            <h5>341</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "prefer-option",
        props:["show"],
      data(){
          return{
            rec:"",
          }
      },
        methods:{
          name(){
            this.rec="focus";
          }
        }
    }
</script>

<style scoped>
.option{
  width: 100%;
  height: 5.05rem;
  background-color: #ffffff;
  position: absolute;
  top: 0.4rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  /*display: none;*/
}
.header_meau{
  display: flex;
  background: #f3f3f3;
}
.header_meau img{
  padding:0.16rem 0.16rem;
  height: 0.07rem;
  /*box-shadow: -0.03rem 0 0 #3a83ee;*/
}
.header_meau_sro{
  display: flex;
  flex: 1;
  overflow-x: scroll;
  flex-wrap: nowrap;
}
  h4{
    font-size: 0.14rem;
    text-indent: 0.15rem;
    line-height: 0.4rem;
  }
.option_center{
  display: flex;
  flex: 1;
}
  .option_center_l{
    overflow-y: scroll;
    width: 1.29rem;

    vertical-align: center;
  }
  .option_center_r{
    overflow-y: scroll;
    flex: 1;

    vertical-align: center;
    border-top:1px solid #f5f5f5;
    border-bottom:1px solid #f5f5f5;

  }
.option_center_r img{
  width: 0.41rem;
  float: left;
  font-weight: 100;
}
  h6{
     float: left;
    font-size: 0.13rem;
    line-height: 0.19rem;
    color: black;
   }
  .option_center_l h6{
    padding-left: 0.17rem;

  }
.option_center_l .choice[name=focus] h6{
  border-left: 0.03rem solid #4993f7;
  background-color: white;
}
  .option_center_r h6{
    padding-left: 0.08rem;
    margin-top: 0.04rem;
  }
  h5{
    font-size: 0.08rem;
    color: #c3c3c3;
    padding: 0.01rem 0.06rem;
    border: 1px solid #c3c3c3;
    float: right;
    border-radius: 0.1rem;
  }
.option_center_r .choice[name=focus] h5{
  background-color: #4993f7;
  color: white;
  border: 1px solid #ffffff;
}
.option_center_l h5{
  margin-right: 0.1rem;
  margin-top: 0.02rem;
}
.option_center_r h5{
  margin-top: 0.06rem;
}

.option_center_r .choice{
  width: 100%;
  overflow: hidden;
  padding:  0.1rem 0.15rem;
  box-sizing: border-box;
}
.option_center_l .choice{
  width: 100%;
  overflow: hidden;
  padding:  0.14rem 0;
  border-right: 1px solid #f5f5f5;
  box-sizing: border-box;
  background-color: #fcfcfc;
}
.option_center_l .choice[name=focus]{
    background-color: white;
    border-right:0;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }

</style>
