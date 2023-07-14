<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 03:07:17
 * @LastEditTime: 2021-05-14 00:01:30
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
     <div class="top-div">
        <marquee ref="topmsg" class="top-msg">
          <span class="text" v-for="(item,index) in userMsgList" :key="index">恭喜用户ID：{{item.userId}}*** 抢到了 {{item.money}} 元红包</span>
        </marquee>
        <!--招聘代理-->
        <div class="zhaopin" @click="$router.push({path:'/recruit'})"> 招聘代理 </div>
        <!--投诉-->
        <div class="tousu" @click.stop="$router.push({path:'/complaint'})"> 投诉 </div>
        <!--用户ID-->
        <div class="userId"> ID:{{user.id}}</div>
     </div>
     <div class="main">
        <div class="hb-div">
          <div class="hb-item" v-if="hbList.length >= 1" v-for="(item,index) in hbList" :key="item.id" @click.stop="openHongBao(item.pay_amount,item.hb_uid)">
        			<div class="img-hb" :style="{backgroundImage:'url('+item.background+')',width:item.width+'rem',height:item.height+'rem'}" />
        	</div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data () {
    return {
      userMsgList:[],
      common:{
        background:"http://12345.k5ik3yf.cn/uploads/20210418/efd96670ea924797f2ee6002fb3b6fd3.png",
        service_background:""
      },
      hbList:[],
      user:this.$http.getUser(),
      setValTime:"",
      payConfig:[
        {
          payway:1,
          title:"微信支付",
          tip:"请尽快完成支付，超时将无法成功到账！",
          min_payment:"10",
          max_payment:"500"
        }
      ]
    }
  },
  created () {
    if(this.$http.getCommon()){
       this.common = this.$http.getCommon();
    }
    this.getUserMsgList();
  },
  mounted(){
    this.getHomeHb();
  },
  methods: {
    randomNum(min = 0, max = 100, len = 0) {
      return Number((min + (max - min) * Math.random()).toFixed(len));
    },
    getUserMsgList(){
       for(var i=0;i<12;i++){
          this.userMsgList.push({userId:this.randomNum(100000,999999,0),money:this.randomNum(20,1000,2)});
       }
    },
    openHongBao(amount,hb_uid){
      const loading = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        this.layerOpenHb(amount,hb_uid);
        var _this = this;
        window.PayChong = function(id){
          layer.closeAll();
          const loading = _this.$loading({
            lock: true,
            background: 'rgba(0, 0, 0, 0.7)'
          });
          var pay_way = 1;
            _this.$http.post('/User/pay',{pay_way:pay_way,hb_type_id:hb_uid},res=>{
              if(res.status == 200){
                if(res.data.code == 1){
                    window.location.href = res.data.data.payUrl;
                }else{
                  loading.close();
                  _this.$confirm(res.data.msg, '温馨提示', {
                    confirmButtonText: '重试',
                    cancelButtonText: '取消',
                    type: 'warning'
                  }).then(() => {
                    _this.layerOpenHb(amount,hb_uid);
                  }).catch(action => {});
                }
              }
            });
        }
        loading.close();
      },1000);
    },
    layerOpenHb(amount,hb_uid){
      var payHtml = "";
        for(var i=0;i<this.payConfig.length;i++){
          var classI = i == 0 ? "yesBg loadingFlex" : "noBg loadingFlex";
          payHtml +="<div class='"+classI+"'> <div style='width: 100%;' class='dialogRight' id="+this.payConfig[i]['payway'] + " tip="+ this.payConfig[i]['tip'] +">"+"<img src='/static/zftype.png' style='width: .6rem !important;height: .55rem!important;margin-right: 0.3rem;'/>"+this.payConfig[i]['title']+"</div><div class='activeImg'><img class='notActive' src='/static/dui.png' /><img class='onActive' src='/static/dui-s.png' /></div>"
        }
        /***打开红包***/
        layer.open({
            title:false,
            type: 1,
            skin: 'layui-layer1', //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            shadeClose: true, //开启遮罩关闭
            content: "<div style='position: absolute;bottom: 0px;left: 0;right: 0;'><div id='loading'>"+payHtml+"</div><div class='btnFlex'><div class='payPrice'>充值金额&nbsp;&nbsp;￥<span style='font-size:0.4rem'>&nbsp;"+amount+"</span></div><div class='bottom' onclick='PayChong("+hb_uid+")'"+">充值</div></div>"
        });
    },
    getHomeHb(){
      /***获取主页红包***/
      this.$http.get('/User/index',{},res=>{
        if(res.status == 200){
          if(res.data.code == 1){
              window.localStorage.setItem('__dphblist',JSON.stringify(res.data.data.list));
              this.hbList = res.data.data.list;
          }
        }
      });
    }
  }
}
</script>
