<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 09:03:46
 * @LastEditTime: 2021-08-15 07:42:14
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{backgroundImage:'url('+common.background+')'}">
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
      <div id="chaibao">
          <el-row >
            <el-col style="width:20%;margin-bottom: .5rem;" v-for="(item,index) in BaoList" :key="index">
              <div class="onePack" @click.stop="openChaiBao(index)">
                  <div class="crush" v-show="openBao">
                      <div class="money">{{item}}</div>
                  </div>
                  <div class="hb-pack" v-show="!openBao">
                    <div class="line"></div>
                    <img class="hongbao" src="/static/cbhb.png">
                  </div>
              </div>
            </el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name:'open',
  data () {
    return {
      common:{
        background:"http://www.2xxp3a9.cn/uploads/20210418/efd96670ea924797f2ee6002fb3b6fd3.png",
        service_background:"http://www.2xxp3a9.cn/uploads/20210306/45c9a7a00dd078f1665820a4ff79a34b.jpg",
        service_text:"问题反馈备注ID<br>扫码进群，防止失联！"
      },
      BaoList:["","","","","","","","","","","","","","",""],
      openBao:false
    }
  },
  mounted(){
    if(this.$http.getCommon()){
       this.common = this.$http.getCommon();
    }
  },
  methods: {
    openChaiBao(i){
      if(!this.openBao){
        const loading = this.$loading({
            lock: true,
            background: 'rgba(0, 0, 0, 0.7)'
          });
        /***拆红包*/
        setTimeout(() => {
          var _this = this;
          this.$http.post('index/openHongbao',{index:i},res=>{
            loading.close();
            if(res.status == 200){
              if(res.data.code == 1){
                  _this.BaoList = res.data.data.list;
                  var amount = res.data.data.amount;
                  _this.openBao = true;
                  layer.open({
                    title:false,
                    type: 1,
                    skin: 'layui-layer3', //样式类名
                    closeBtn: 0, //不显示关闭按钮
                    anim: 2,
                    shadeClose: true, //开启遮罩关闭
                    area: ['10.8rem', '12.7rem'],
                    content: "<div class='payPrice' style='position: absolute;bottom: 2.8rem;right: 0;left: 0;text-align: center;font-size: 1.2rem;color: #f1400a;'>"+amount+"<span style='font-size: 0.6rem;'>元</span></div>"
                });
              }else{
                  this.$confirm(res.data.msg, '提示', {
                    confirmButtonText: '去充值',
                    cancelButtonText: '取消',
                    type: 'warning'
                  }).then(() => {
                    this.$router.push({path:'/'});
                  }).catch(action => {});
              }
            }
          });
        }, 1000);
      }
    }
  }
}
</script>
<style scoped>
#chaibao{
  position: absolute;
  top: 5.5rem;
}
.crush {
    height: 1.7rem;
    width: 2rem;
    background-position: center center;
    background-repeat: no-repeat,no-repeat,no-repeat;
    background-size: contain;
    background-image: url(/static/openbg.png);
    color: #F44336;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: relative;
}

.crush>.money{
    font-size:0.3rem;
    position: absolute;
    top: 0.24rem;
    font-weight: 600;
    color: #f84f32;
    white-space: nowrap;
}
   .line {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 200%;
    top: 57%;
    left: 48%;
    background-color: #FFC107;
    transform-origin: center center;
    animation-name: flash;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 1;
    transform: scale(1.0);
}
.onePack{
    position: relative;
    transform-origin: center center;
    animation-name: ripple;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.hb-pack .hongbao {
    width: 2rem;
}

@-webkit-keyframes ripple {
  
  25% {-webkit-transform: scale(0.96);}
  50% {-webkit-transform: scale(1.0);}
  75% {-webkit-transform: scale(0.96);}
  100% {-webkit-transform: scale(1.0);}
}
@keyframes ripple {
  
  25% {transform: scale(0.96);}
  50% {transform: scale(1.0);}
  75% {transform: scale(0.96);}
  100% {transform: scale(1.0);}
}

@-webkit-keyframes flash {
  0% { -webkit-transform: scale(1.0) }
  100% {
    -webkit-transform: scale(1.1);
    opacity: 0;
  }
}
@keyframes flash {
  0% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  } 100% {
      transform: scale(5.0);
      -webkit-transform: scale(5.0);
      opacity: 0;
    }
}
</style>
