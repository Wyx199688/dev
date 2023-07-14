<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  margin:0px;
  padding:0px;
  background:#f7f7f7;
}
.el-loading-mask {
    position: absolute;
    z-index: 2000;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    background: rgba(0, 0, 0, 0.7) url(/static/65uxq-z2qeb.gif) no-repeat !important;
    background-size: 100% 5rem !important;
    background-position-y: 48% !important;
}
.el-loading-spinner{
  display:none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[data-dpr="1"] body {
  font-size: 14px !important;
}
.el-message{
  min-width: 90% !important;
  z-index:99999999 !important;
}
.el-message-box{
  width:83%;
}
.el-message-box__wrapper{
  z-index:999999 !important;
}
.v-modal{
  z-index:999998 !important;
}
.el-loading-mask{
  z-index:999999 !important;
}
 #bottom{
    z-index: 99999;
    background: #f8f8f8;
    position: fixed;
    bottom: 0;
    left: 0;
    right: auto;
    width: 100%;
    text-align: center;
 }
 .navbar-div{
   padding: .2826rem .5rem;
 }
 .navbar-div>.img{
    width: .54rem;
    height: .61rem;
    margin: 0 auto .1rem;
 }
 .navbar-div>.img>img{
     margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
 }
 .navbar-div>.title{
   color: #999999;
 }
 .navbar-div>.title.active{
   color:#e45141;
 }
 #bottom>div{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: #ffffff;
    z-index: 2;
 }
.body{
    min-height:100vh;
    background-size: 100% 100%;
  }
  .top-div{
    font-size: .28rem;
    color: #FFFFFF;
    overflow: hidden;
    position: absolute;
    top:0;
    white-space: nowrap;
    max-width:100%;
  }
  .top-msg{
    background: rgba(0,0,0,0.3);
    line-height: 0.9rem;
    position: relative;
    height:0.9rem;
  }
  .top-msg span{
    margin-left:.2rem;
    margin-right:.8rem;
    position: relative;
  }
  .zhaopin {
      font-size: .28rem;
      display: block;
      width: 2.3rem;
      height: .7rem;
      line-height: .7rem;
      text-align: center;
      position: fixed;
      top: 1.5rem;
      right: 0;
      color: #ffffff;
      background: rgba(0,0,0,0.3);
      border-top-left-radius: 40rem;
      border-bottom-left-radius: 40rem;
      z-index: 9999;
  }
  .el-tabs__item{
    margin-left:7%;
        padding: 0rem;
    font-size:0.36rem;
  }
  .el-tabs__header{
    margin: 0 0 5px;
  }
  .item .el-progress-bar__outer{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 0;
        background-color: #d6d8dc;
  }
  .item .el-progress-bar__inner{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 0;
  }
  .item .el-progress{
    display: inline-block;
    width: 70%;
  }
  .el-tabs__active-bar{
    margin-left:7%;
    background: url(/static/tab-list.png);
  }
  .el-tabs__item.is-active{
    color:#000;
  }
  .el-tabs__item:hover{
    color:#000;
  }
    .tousu {
      font-size: .28rem;
      display: block;
      width: 1.5rem;
      height: .7rem;
      text-align: center;
      line-height: .7rem;
      position: fixed;
      top: 2.5rem;
      right: 0;
      background: rgba(0,0,0,0.3);
      color: #ffffff;
      border-top-left-radius: 1000px;
      border-bottom-left-radius: 1000px;
      z-index: 9999;
  }
  .userId {
    font-size: .28rem;
    display: block;
    height: .75rem;
    line-height: .75rem;
    text-align: center;
    position: fixed;
    top: 2.8rem;
    left: 0;
    color: #ffffff;
    background: rgba(0,0,0,0.3);
    border-top-right-radius: 40rem;
    border-bottom-right-radius: 40rem;
    padding: 0 .6rem;
    z-index: 9999;
}
.el-tabs__nav-wrap::after{
  display:none;
}
.main{
  position:absolute;
  top:5.5rem;
}
.topback {
    position: absolute;
    top: 0.04rem;
    min-height: 2em;
    overflow: hidden;
    padding-left: 0.05rem;
}
.topback>img {
    width: .9rem;
}
  .hb-div{
    position: relative;
    z-index: 5;
    display: flex;
    padding: 0 .5rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hb-item{
    margin-bottom: .7rem;
    width: 33.333%;
  }

  .hb-item>.img-hb{
    padding-top: 0.1rem;
    margin: 0 auto;
    background-size: 100% 100%;
    text-align: center;
    width: 2.7rem;
    height: 3.05rem;
    animation: shensuo 2s infinite linear;
  }
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
}

  #top-fu{
      background: url(/static/topBg.3cea0a2.png) no-repeat;
      width: 100%;
      height: 6.1rem;
      background-size: 100% 100%;
  }
  .hongbaot {
      width: 1.1rem;
      height: 1.7rem;
      position: absolute;
  }
  .wtfk-top{
    position:relative;
    
  }
  .fd1 {
      top: .9rem;
      left: .6rem;
      animation: myfirst1 ease-in-out 3s infinite alternate;
  }
  .fd2 {
      top: .7rem;
      left: 2.9rem;
      animation: myfirst2 ease-in-out 3s infinite alternate;
  }
  .fd, .fd2 {
      -webkit-transform-origin: center top;
      transform-origin: center top;
  }
  .fd4 {
      top: .6rem;
      left: 5.71rem;
      animation: myfirst4 ease-in-out 3s infinite alternate;
  }
  .fd3, .fd4 {
      -webkit-transform-origin: center top;
      transform-origin: center top;
  }
  .fd5 {
      top: .6rem;
      left: 7.9rem;
      animation: myfirst1 ease-in-out 3s infinite alternate;
  }
  .xian {
      width: 100%;
      height: .9rem;
      background-image: url(/static/x.png);
      background-size: 100%;
  }
  .bao {
      width: 1.3rem;
      height: 1.4rem;
      margin-top: -.1rem;
      margin-left: -.2rem;
      background-image: url(/static/fd1.png);
      background-size: 100% 100%;
      position: absolute;
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
  /***余额提现 */
  .layui-layer2 .layui-layer-content {
    height: 100%!important;
    background-image: url(/static/zh.png);
    background-size: 100% 100%;
    border-radius: .4rem;
}
.layui-layer2 {
    font-size: .32rem;
    color: rgba(0, 0, 0, 0.65);
    background-color: rgba(0,0,0,0)!important;
    border-radius: 2px;
    box-shadow: 0 0 0 rgba(0,0,0,.3)!important;
    background-size: 100% 100%;
    padding: 1rem 1.5rem!important;
    box-sizing: border-box;
    overflow: hidden;
}
.layui-layer2 #loading {
    overflow: hidden;
    margin: 0 auto;
    width: 5.8rem;
    height: 4.6rem;
}
.layui-layer2 #loading .yesBg {
    color: #e8af00;
    background: #fff6da;
}
.layui-layer2 .bottomtx {
    margin: 0 auto;
    width: 2.5rem;
    height: .78rem;
    border-radius: 10rem;
    background: #fbd254;
    color: #7d3000;
    text-align: center;
    line-height: .78rem;
    font-size: 0.35rem;
    font-weight: bold;
    position:relative;
    bottom:0.6rem;
}
.layui-layer2 .loadingFlex {
    height: .92rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .35rem;
    margin-bottom: .1rem;
    border-radius: 10rem;
    border: 1px solid #bcbcbc;
    background: #fff;
}
.layui-layer2 .loadingFlex .activeImg {
    width: .4rem;
    height: .4rem;
}
.layui-layer2 #loading .yesBg .onActive {
    display: block;
}
.layui-layer2 #loading .noBg .onActive {
    display: block;
}
.layui-layer2 .loadingFlex .activeImg .notActive {
    display: block;
}
.layui-layer2 #loading .noBg .onActive {
    display: none;
}
.layui-layer2 #loading .yesBg .notActive {
    display: none;
}
.layui-layer2 .loadingFlex .activeImg .onActive {
    display: none;
}
/***支付*/
.layui-layer1 {
    width: 100%;
    left: 0px !important;
    width: 100% !important;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0rem !important;
    border-radius: 2px;
    background-color: transparent!important;
    background-size: 100% 100%;
    box-shadow: 0 0 0 rgba(0,0,0,.3)!important;
    font-size: .35rem;
}
.layui-layer1 .layui-layer-content {
    background-image: url(/static/chongzhi.png);
    min-width: 7.5rem;
    min-height: 11.4rem;
    overflow: hidden;
    height: 100%!important;
    border-radius: .4rem;
    background-size: 100% 100%;
}
.layui-layer1 #loading {
    overflow: hidden;
    margin: 0 auto;
    width: 7.5rem;
    height: 5.4rem;
}
.layui-layer1 #loading .yesBg {
    box-sizing: border-box;
    border-radius: .47rem;
}
.layui-layer1 .yesBg.loadingFlex {
    background: #ffedd3;
    border: 3px solid #a78f1e;
}
.layui-layer1 .loadingFlex {
    height: 1.3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .35rem;
    margin-bottom: .2rem;
    border-radius: 10rem;
    border: 3px solid #bcbcbc;
    background: #fff;
}
.layui-layer1 #loading .yesBg {
    box-sizing: border-box;
    border-radius: .47rem;
}
.layui-layer1 .loadingFlex .activeImg {
    width: .6rem;
    height: .6rem;
}
.layui-layer1 #loading .yesBg .notActive {
    display: none;
}
.btnFlex {
    height: 2.1rem;
    width: 6.2rem;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.4rem;
}
.payPrice {
    color: #f9ff00;
    float: left;
}
.layui-layer1 .dialogRight{
   font-size:0.36rem;
}
.layui-layer1 .bottom {
    margin: 0 auto;
    margin-top: .2rem;
    width: 2rem;
    height: .78rem;
    border-radius: 10rem;
    background: #fbd254;
    color: #7d3000;
    text-align: center;
    line-height: .78rem;
    font-size: 0.35rem;
    position: absolute;
    right: 0;
    bottom: 1.34rem;
}
.payPrice>span{
  font-size:0.45rem !important;
}
/***拆包提示 */
.layui-layer3 {
    font-size: .3rem;
    background-color: rgba(0,0,0,0)!important;
    border-radius: 2px;
    box-shadow: 0 0 0 rgba(0,0,0,.3)!important;
    background-size: 100% 100%;
    padding: 1rem 1.5rem!important;
    box-sizing: border-box;
    overflow: hidden;
}
.layui-layer3 .layui-layer-content {
    height: 100% !important;
    background-image: url(/static/windowbg.png);
    background-size: 100% 100%;
    border-radius: .4rem;
}
  @keyframes shensuo{
    0%{transform:scale(1);transition:all .3s}
    50%{transform:scale(1.1);transition:all .5s}
    100%{transform:scale(1);transition:all .3s}
  }
  @-o-keyframes shensuo{
    0%{transform:scale(1);transition:all .3s}
    50%{transform:scale(1.1);transition:all .5s}
    100%{transform:scale(1);transition:all .3s}
  }
  @-moz-keyframes shensuo{
    0%{transform:scale(1);transition:all .3s}
    50%{transform:scale(1.1);transition:all .5s}
    100%{transform:scale(1);transition:all .3s}
  }
  @-webkit-keyframes shensuo{
    0%{transform:scale(1);transition:all .3s}
    50%{transform:scale(1.1);transition:all .5s}
    100%{transform:scale(1);transition:all .3s}
  }
</style>
