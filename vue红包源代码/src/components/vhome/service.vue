<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 09:03:46
 * @LastEditTime: 2021-08-15 07:42:01
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{backgroundImage:'url('+common.background+')'}" style="    position: relative;overflow: hidden;">
     <div id="top-fu">
          <div class="hongbaot fd1">
              <div class="xian"></div>
              <div class="bao"></div>
          </div>
          <div class="hongbaot fd2">
              <div class="xian"></div>
              <div class="bao"></div>
          </div>
          <div class="hongbaot fd4">
              <div class="xian"></div>
              <div class="bao"></div>
          </div>
          <div class="hongbaot fd5">
              <div class="xian"></div>
              <div class="bao"></div>
          </div>
      </div>
      <div id="wtfk" @click.stop="wentFk()">
        <img src="/static/wh.png">
        <div class="text">代理问题反馈</div>
      </div>
      <img src="/static/g1.png" style="position: relative;top: -10rem;height: 12rem;">
      <div class="content" >
        <div class="kefu">
          <div class="one">
            <div class="qqimg">
              <div class="img">
                <img :src="common.service_background" width="100%">
              </div>
              <div class="txt" v-html="common.service_text"></div>
            </div>
            <img src="/static/g2.png" style="position: absolute;top: 4.65rem;left: 0;right: 0;">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'service',
  data () {
    return {
      common:{
        background:"http://www.2xxp3a9.cn/uploads/20210418/efd96670ea924797f2ee6002fb3b6fd3.png",
        service_background:"http://www.2xxp3a9.cn/uploads/20210306/45c9a7a00dd078f1665820a4ff79a34b.jpg",
        service_text:"问题反馈备注ID<br>扫码进群，防止失联！"
      },
    }
  },
  mounted(){
    if(this.$http.getCommon()){
       this.common = this.$http.getCommon();
    }
  },
  methods: {
    wentFk(){
      /***问题反馈*/
      this.$message.error('您还不是代理');
    }
  }
}
</script>
<style scoped>
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 2.5rem;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .kefu{
    height: 9rem;
  }
  .kefu .one {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .kefu .one .qqimg .img {
    margin: 0 auto;
    text-align: center;
    position: relative;
    left: 0;
    right: 0;
    top:2rem;
}
.kefu .one .qqimg img {
    border-radius: 5px;
    width: 4rem;
    max-height: 4.2rem;
}
.kefu .one .qqimg .txt {
    line-height: 0.6rem;
    font-size: 0.38rem;
    text-align: center;
    position: absolute;
    bottom: 0.4rem;
    left: 0;
    right: 0;
    color: #FFFFFF;
}
  .qqimg{
    height: 8rem;
    background:url(/static/kf_bg.png) no-repeat;    
    background-size: 100% 100%;
    width: 6rem;
    border-radius:inherit;
    position: absolute;
    bottom: 1rem;
  }
 
  #wtfk {
    position: absolute;
    right: 0;
    bottom: 30%;
    z-index: 9999;
    border: 1px solid #4c4b4b;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    padding: 0.05rem;
    -webkit-animation: fadeleftIn 1s;
    animation: fadeleftIn 1s;
}
#wtfk>img {
    width: 0.6rem;
    display: inline-block;
    vertical-align: middle;
}
#wtfk>.text {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.36rem;
    font-weight: bold;
}

@keyframes fadeleftIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0);
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    100% {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes fadeleftIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0);
    }
    100% {
        -webkit-transform: none;
    }
}
  @-webkit-keyframes myfirst1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}
  @keyframes myfirst1{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}
  @-webkit-keyframes myfirst2{0%{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}50%{-webkit-transform:rotate(10deg) scale(.8);transform:rotate(10deg) scale(.8)}to{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}}
  @keyframes myfirst2{0%{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}50%{-webkit-transform:rotate(10deg) scale(.8);transform:rotate(10deg) scale(.8)}to{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}}
  @-webkit-keyframes myfirst3{0%{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}50%{-webkit-transform:rotate(10deg) scale(1.2);transform:rotate(10deg) scale(1.2)}to{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}}
  @keyframes myfirst3{0%{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}50%{-webkit-transform:rotate(10deg) scale(1.2);transform:rotate(10deg) scale(1.2)}to{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}}
  @-webkit-keyframes myfirst4{0%{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}50%{-webkit-transform:rotate(10deg) scale(.8);transform:rotate(10deg) scale(.8)}to{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}}
  @keyframes myfirst4{0%{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}50%{-webkit-transform:rotate(10deg) scale(.8);transform:rotate(10deg) scale(.8)}to{-webkit-transform:rotate(0deg) scale(.8);transform:rotate(0deg) scale(.8)}}
  @-webkit-keyframes myfirst5{0%{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}50%{-webkit-transform:rotate(10deg) scale(1.2);transform:rotate(10deg) scale(1.2)}to{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}}
  @keyframes myfirst5{0%{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}50%{-webkit-transform:rotate(10deg) scale(1.2);transform:rotate(10deg) scale(1.2)}to{-webkit-transform:rotate(0deg) scale(1.2);transform:rotate(0deg) scale(1.2)}}
</style>
