<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 09:03:46
 * @LastEditTime: 2021-05-14 11:55:16
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{background:common.background}" v-loading="loading">
    <div class="topback">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
    </div>
    <div class="topdiv">
        <img class="avatar" :src="user.avatar">
        <div class="nickname"></div>
        <div class="nickid">ID:{{user.id}}</div>
    </div>
    <div class="bottom">
		<div class="flex">
		    <div class="item bg1">
				<p>
					总佣金
				</p>
				<h4><span>￥</span>{{statistics.total}}</h4>
			</div>
			<div class="item bg2">
				<p>
					今日佣金
				</p>
				<h4><span>￥</span>{{statistics.today}}</h4>
			</div>
			<div class="item bg3">
				<p>
					昨日佣金
				</p>
				<h4><span>￥</span>{{statistics.yesterday}}</h4>
			</div>
		</div>
	</div>
    <div id="tab-content">
        <el-tabs v-model="TabName" @tab-click="handleClick">
            <el-tab-pane label="分佣记录" name="first">
                <div class="in-list" v-infinite-scroll="load" style="overflow:auto">
                    <table class="table table-center">
                        <thead>
                            <tr class="TH">
                                <th class="one_th">
                                    来源ID
                                </th>
                                <th class="two_th">
                                    分佣金额
                                </th>
                                <th class="three_th">
                                    时间
                                </th>
                            </tr>
                        </thead>
                        <tbody class="datatableTbody">
                            <tr v-for="(item,index) in commiss_list" :key="index">
                                <td class="one_th">
                                    {{item.from_user_id}}
                                </td>
                                <td class="two_th">
                                    {{item.amount}}元
                                </td>
                                <td class="three_th">
                                    {{item.createtime}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="提现记录" name="second">
                <div class="in-list" v-infinite-scroll="load" style="overflow:auto">
                    <table class="table table-center">
                        <thead>
                            <tr class="TH">
                                <th class="one_th">
                                    提现金额
                                </th>
                                <th class="three_th">
                                    时间
                                </th>
                            </tr>
                        </thead>
                        <tbody class="datatableTbody">
                            <tr v-for="(item,index) in withdraw_list" :key="index">
                                <td class="one_th">
                                    {{item.amount}}
                                </td>
                                <td class="three_th">
                                    {{item.createtime}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name:'commission',
  data () {
    return {
      TabName:"first",
      loading:true,
      commiss_list:[],
      withdraw_list:[],
      user:this.$http.getUser(),
      statistics:{
        total:0,
        today:0,
        yesterday:0  
      },
      common:{
        background:"#f7f8fa",
      },
    }
  },
  mounted(){
      this.getList();
  },
  methods: {
      handleClick(){

      },
      getList(){
         /**获取记录*/
         this.$http.post('/User/getCommission',{},res=>{
             this.loading = false;
            if(res.status == 200){
                if(res.data.code == 1){
                    this.statistics = res.data.data.statistics;
                    this.commiss_list = res.data.data.commiss_list;
                    this.withdraw_list = res.data.data.withdraw_list;
                }
            }
        });
      },
      load(){
          
      }
  }
}
</script>
<style scoped>
#tab-content{
    position: relative;
    top: 1rem;
}
#tab-content .in-list{
    height: 10rem;
    padding: 0;
    margin: 0;
    list-style: none;
}
#tab-content .datatableTbody tr {
    color: #5f5d5d;
    font-size: 0.4rem;
    height: 0.75rem;
}
#tab-content table {
    border-width: medium;
    text-align: left;
    margin-left: 2%;
}
#tab-content table .TH>th {
    font-size: 0.35rem;
    font-weight: 400;
    color: #5f5d5d;
}
.one_th {
    width: 20%;
}
.two_th {
    width: 20%;
}
.three_th {
    width: 30%;
}
.body>.topdiv {
    text-align: center;
    position: relative;
    top: 0.9rem;
}
.topdiv>.avatar {
    width: 1.8rem;
    border-radius: 1.8rem;
}
.topdiv>.nickname {
    padding: 0.04rem;
}
.topdiv>.nickid {
    padding-top: 0.06em;
    font-size: 0.38rem;
    font-weight: normal;
}
.bottom{
    position: relative;
    top: 1rem;
    text-align: left;
}
.bottom .flex {
    padding: 0 0.05rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom .flex .item:nth-child(1) {
    background: #5b56e4;
}
.bottom .flex .item:nth-child(2) {
    background: #ff5e92;
}
.bottom .flex .item:nth-child(3) {
    background: #ffac5e;
}
.bottom .flex .item {
    width: 32%;
    border-radius: 0.15rem;
    box-sizing: border-box;
    line-height: 1rem;
    letter-spacing: 1px;
    margin: 2.5%;
}
.bottom .flex .item p {
    color: #ffffff;
    font-size: 0.33rem;
    font-weight: bold;
    border-bottom: 4px solid rgba(255,255,255,0.4);
    padding-left: 0.18rem;
    margin: 0;
}
.flex .item h4 {
    font-size: 0.3rem;
    color: #ffffff;
    font-weight: 500;
    padding-left: 0.18rem;
    line-height: 0.65rem;
    margin:0;
}
.flex .item h4 span {
    font-family: DM;
    font-size: 0.4rem;
        margin: 0;
}
</style>