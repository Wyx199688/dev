<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 09:03:46
 * @LastEditTime: 2021-05-14 00:02:54
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{backgroundImage:'url('+common.background+')'}">
     <div class="option-div">
        <el-row>
            <el-col :span="8" v-for="(item,index) in itemMenuList" :key="index">
                <div class="item" @click.stop="itemClick(item.toLink,item.link)">
                    <div class="img-tab">
                        <img :src="item.imgTab" alt="">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <div class="icon">
                        <div class="icon-img">
                            <img :src="item.iconimg" alt="">
                        </div>
                        {{item.linkText}}
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="dailiText">
		    <div class="left">
    			<h4>代理说明</h4>
    			<p style="text-align: center;">
    				<span>一级 : 40%</span>
    				<span>二级 : 4%</span>
    				<span>三级 : 3%</span>
    				<span>四级 : 2%</span>
    				<span>五级 : 1%</span>
    			</p>
			</div>
			<div class="right">
    			<h4>推广三步骤:</h4>
    			<p>
    				1.点击推广二维码,获取您的专属二维码
    			</p>
    			<p>
    				2.让好友扫码进入平台即可自动绑定推荐关系
    			</p>
    			<p>
    				3.让好友参与游戏您可以获得奖励且可直接体现
    			</p>
    		</div>
		</div>
     </div>
  </div>
</template>

<script>
export default {
  name:'agent',
  data () {
    return {
      common:{
        background:"http://12345.k5ik3yf.cn/uploads/20210418/efd96670ea924797f2ee6002fb3b6fd3.png",
        service_background:""
      },
      itemMenuList:[
          {
              imgTab:"/static/ag-1.png",
              title:"分佣明细",
              iconimg:"/static/c-top.png",
              toLink:true,
              linkText:"总佣金0元",
              link:"/commission"
          },
          {
              imgTab:"/static/ag-2.png",
              title:"我的账户",
              iconimg:"/static/c-top.png",
              toLink:false,
              linkText:"提现",
              link:"this.openTx()"
          },
          {
              imgTab:"/static/ag-5.png",
              title:"推广教程",
              iconimg:"/static/c-top.png",
              toLink:true,
              linkText:"查看",
              link:"/agent_extend"
          },
          {
              imgTab:"/static/ag-3.png",
              title:"我的团队",
              iconimg:"/static/c-top.png",
              toLink:true,
              linkText:"查看",
              link:"/team"
          },
          {
              imgTab:"/static/ag-6.png",
              title:"申请包赔",
              iconimg:"/static/c-top.png",
              toLink:false,
              linkText:"申请",
              link:"this.openBaoPei()"
          },
          {
              imgTab:"/static/ag-4.png",
              title:"推广二维码",
              iconimg:"/static/c-top.png",
              toLink:true,
              linkText:"赚钱",
              link:"/spread"
          },
      ],
      bodyBg:"http://12345.k5ik3yf.cn/uploads/20210418/efd96670ea924797f2ee6002fb3b6fd3.png",
      user:this.$http.getUser(),
      TxConfig:[
        {
          title:"拆包余额",
          type:"hb_balance",
          balance:"0.00"
        },
        { 
          title:"佣金余额",
          type:"yj_balance",
          balance:"0.00"
        }
      ]
    }
  },
  mounted(){
      if(this.$http.getCommon()){
        this.common = this.$http.getCommon();
      }
      $(document).on("click",".loadingFlex",function(){
        $(".loadingFlex").removeClass("yesBg");
         $(this).removeClass("noBg");
         $(this).addClass("yesBg");
      })

      var _this = this;
      $(document).on("click",".bottomtx",function(){
        var tx = $("#loading .yesBg .dialogRight").attr("id");
        var txtype = '';
        if (tx == 'hb_balance') {
            txtype = "yewithdraw"; 
        }else{
            txtype = "yjwithdraw"; 
        }

        _this.$http.post('/User/withdraw',{txtype:txtype},res=>{
            if(res.status == 200){
                if(res.data.code == 1){
                  window.localStorage.setItem('__dpuser',JSON.stringify(res.data.data.userinfo));
                  _this.$message({message:res.data.msg,type: 'success'});
                }else{
                  _this.$message.error(res.data.msg);
                }
            }
        });
      });
      
      this.$once('hook:beforeDestroy', () => {
        $(document).off("click", "loadingFlex"); 
        $(document).off("click", ".bottomtx");   
        layer.closeAll();      
      })

      this.getUserMoney();
  },
  methods: {
      getUserMoney(){
         /**获取用户余额*/
         this.$http.post('/User/getUserPrice',{},res=>{
            if(res.status == 200){
               this.user.amount = res.data.data.amount;
               this.user.balance = res.data.data.balance;
               this.TxConfig[0].balance = this.user.balance;
               this.TxConfig[1].balance = this.user.amount;
               this.itemMenuList[0].linkText = "总佣金"+ this.user.amount+"元";
            }
        });
      },
      openBaoPei(){
         /***申请包赔*/
          this.$confirm("你暂无资格领取赔偿，请充值后重试", '提示', {
                  confirmButtonText: '去充值',
                  cancelButtonText: '取消',
                  type: 'warning'
          }).then(() => {
            this.$router.push({path:"/"});  
          }).catch(action => {});
      },
      openTx(){
         /***申请提现***/
          var html = "";
          for(var i=0; i<this.TxConfig.length; i++){
              var s = "";
              html +="<div class='"+s+" loadingFlex'> <div class='dialogRight' id="+this.TxConfig[i]['type'] + ">"+this.TxConfig[i]['title']+"<span style='margin-left:0.09rem;color:red;font-weight:500;font-size:0.3rem'>￥<span style='font-size:0.38rem'>"+this.TxConfig[i]['balance']+"</span></span></div><div class='activeImg'><img class='notActive' src='/static/dui.png' /><img class='onActive' src='/static/dui-s.png' /></div></div>"
          }
          layer.open({
              title:false,
              type: 1,
              skin: 'layui-layer2', //样式类名
              closeBtn: 0, //不显示关闭按钮
              anim: 2,
              shadeClose: true, //开启遮罩关闭
              area: ['11.9rem', '12.5rem'],
              content: "<div style='position: absolute;bottom: 0px;left: 0;right: 0;    overflow: hidden;'><div id='loading'>"+html+"<div class='btnFlex'><div class='payPrice'><span></span></div><div class='bottomtx'>去提现</div></div>"
          });
      },
      itemClick(to,link){
          if(to){
              this.$router.push({path:link});
          }else{
              eval(link);
          }
      },
  }
}
</script>
<style scoped>
  .body{
    overflow:hidden;
  }
  .option-div{
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    z-index: 5;
    top: .5rem;
  }
  .item{
    margin: .2rem;
    padding: .4rem;
    background: rgba(255,255,255,0.4);
    border-radius: .06rem;
    -webkit-box-shadow: 0 0 1px #353535;
    box-shadow: 0 0 1px #353535;
  }
  .item>.img-tab{
    width: 1.2078rem;
    height: 1.2078rem;
    margin: 0 auto;
    margin-bottom: .1rem;
  }
  .item>.title{
    font-size: .28rem;
    color: #333;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .2rem 0;
  }
  .item>.icon{
    width: 100%;
    height: auto;
    margin: 0;
    text-align: center;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fe8448;
  }
  .icon>.icon-img{
    margin: 0;
    width: .3rem;
    height: .3rem;
    margin-right: .05rem;
  }
  .icon-img>img{
    width: 0.25rem;
  }
  .dailiText {
    color: #232323;
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
    background: rgba(255,255,255,.4);
    border-radius: .06rem;
    box-shadow: 0 0 1px #000;
 }
 .dailiText .left {
    float: left;
    width: 40%;
    border-right: 1px dashed #6d6d6d;
}
.dailiText .right {
    float: left;
    width: calc(60% - 1px);
}
.dailiText h4 {
    font-size: .45rem;
    text-align: center;
    margin: 0rem;
    margin-top: .2rem;
}
.dailiText p {
    font-size: .28rem;
    padding: .1rem .2rem;
    margin: 0px;
    text-align: left;
}
.dailiText p span {
    text-align: center;
    width: 100%;
    display: block;
    font-size: .28rem;
    padding: .08rem;
}
</style>
