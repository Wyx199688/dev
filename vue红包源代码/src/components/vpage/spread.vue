<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-11 20:48:57
 * @LastEditTime: 2021-05-12 12:12:31
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{background:common.background}" v-loading="loading">
    <div class="topback">
        <img src="/static/back.png" @click="$router.go(-1)">
    </div>
    <div class="spread-top"></div>
    <div class="spread-bottom">
		<div class="btn" @click="ShowDiaLog()">
			生成我的专属码子
		</div>
		<div class="shuoming">
			佣金说明
		</div>
		<table class="table" cellspacing="0">
		<tbody>
		<tr>
			<td>
				一级佣金
			</td>
			<td>
				{{parseFloat(rate.first) * 100}}%
			</td>
		</tr>
		<tr>
			<td>
				二级佣金
			</td>
			<td>
				{{parseFloat(rate.second) * 100}}%
			</td>
		</tr>
		<tr>
			<td>
				三级佣金
			</td>
			<td>
				{{parseFloat(rate.third) * 100}}%
			</td>
		</tr>
		<tr>
			<td>
				四级佣金
			</td>
			<td>
				{{parseFloat(rate.four) * 100}}%
			</td>
		</tr>
		<tr>
			<td>
				五级佣金
			</td>
			<td>
				{{parseFloat(rate.five) * 100}}%
			</td>
		</tr>
		<tr>
			<td colspan="2">
				干起来啊，下个百万富翁就是你~
			</td>
		</tr>
		</tbody>
		</table>
	</div>
    
    <div id="dialog-spread" @click="DiaLogtoggle()"  v-show="diaLogs" >
		<div class="center">
			<h4>屏幕截图或者长按保存码子，发给好友
                <span id="guanbi"></span>
            </h4>
			<div>
				<img :src="image_qrcode" />
			</div>
		</div>
	</div>

  </div>
</template>

<script>
export default {
  name:'spread',
  data () {
    return {
      diaLogs:false,
      loading:false,
      user:this.$http.getUser(),
      common:{
        background:"#fa8d00",
      },
      rate:{
          first:"0.4",
          second:"0.04",
          third:"0.03",
          four:"0.02",
          five:"0.01"
      },
      image_qrcode:""
    }
  },
  mounted(){
      this.getList();
  },
  methods: {
      ShowDiaLog(){
         this.diaLogs = true;
      },
      DiaLogtoggle(){
         this.diaLogs = this.diaLogs ===  true ? false : true;
      },
      getList(){
        this.$http.get('/User/getSpread',{},res=>{
            if(res.status == 200){
                if(res.data.code == 1){
                    this.image_qrcode = res.data.data.image_qrcode;
                    this.rate         = res.data.data.rate;
                }
            }
        });
      }
  }
}
</script>
<style scoped>
 #dialog-spread {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    z-index: 1000;
}
#dialog-spread .center {
    color: #fff;
    width: 85%;
    position: relative;
    top: 80px;
    margin: 0 auto;
    border: #666;
    opacity: 1;
    z-index: 2000;
    border-radius: 15px;
    padding: 10px 20px;
}
#dialog-spread .center h4 {
    font-size: 12px;
    padding-left: 10px;
}
#dialog-spread .center h4 span {
    display: inline-block;
    float: right;
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
}
.spread-top{
    height: 353px;
    text-align: center;
    padding: 30px;
    color: #fff;
    background-image: url(/static/tuiguang.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
}
.spread-bottom {
    padding: 10px;
}
.spread-bottom .btn {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #cd0a01;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: Bold;
    margin: 10px;
    background: #ffea9e;
    border-radius: 200px;
}
.spread-bottom .shuoming {
    color: #fff;
    font-size: 18px;
    font-weight: Bold;
    text-align: center;
    margin: 5px;
}
.spread-bottom  .table {
    color: #fff;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border-bottom: 1px dashed #fedec9;
}
.spread-bottom .table tr:first-child td:first-child {
    -webkit-border-top-left-radius: 5px;
}
.spread-bottom .table tr:first-child td {
    border-top: 1px dashed #fedec9;
}
.spread-bottom .table tr td:first-child {
    border-left: 1px dashed #fedec9;
}
.spread-bottom .table tr td {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dashed #fedec9;
}
.spread-bottom .table tr:first-child td:last-child {
    -webkit-border-top-right-radius: 5px;
}
.spread-bottom .table tr td:last-child {
    border-right: 1px dashed #fedec9;
    border-left: 1px dashed #fedec9;
}
</style>