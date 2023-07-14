<template>
  <div class="body" :style="{background:common.background}" v-loading="loading">
    <div class="topback">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
    </div>
    <div class="in-list team_list" v-infinite-scroll="load" style="overflow:auto">
        <table class="table table-center">
            <thead>
            </thead>
            <tbody class="datatableTbody">
                <tr v-for="(item,index) in list">
                    <td class="img_th">
                        <img :src="item.avatar">
                    </td>
                    <td class="name_th">
                        <div class="name">{{item.nickname}}</div>
                        <div class="id">ID:{{item.id}}</div>
                    </td>
                    <td class="time_th">
                        {{item.createtime}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'team',
  data () {
    return {
      loading:false,
      user:this.$http.getUser(),
      common:{
        background:"#f7f8fa",
      },
      list:[]
    }
  },
  mounted(){
      this.RouteQuery();
  },
  methods: {
      RouteQuery(){
        var param = this.$route.query;
        if (Object.keys(param).length !== 0 && param != "" && typeof(param) == "object") {
            if(typeof(param.g) != "undefined"){
                /***执行返回下级列表*/
                this.getUserList(param.g);
            }else{
                this.getUserList(0);
            }
        }else{
            this.getUserList(0);
        }
      },
      getUserList(g){
        /***返回下级用户*/
        this.$http.post('/User/getReamlist',{g:g},res=>{
            if(res.status == 200){
                if(res.data.code == 1){
                    if(res.data.data.list){
                        this.list = res.data.data.list;
                    }
                }
            }
        });
      }
  }
}
</script>
<style scoped>
.team_list{
    position: relative;
    top: 1rem;
    height: 90vh;
    padding: 0;
    margin: 0;
    list-style: none;
}
.team_list .datatableTbody tr {
    color: #5f5d5d;
    font-size: 0.4rem;
    height:1.5rem;
}
.team_list table {
    text-align: center;
    margin: 2% auto;
    width: 100%;
}
.img_th {
    width: 15%;
}
.img_th>img {
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
}
.name_th {
    width: 35%;
    text-align: left;
    padding-left: 2%;
}
.name_th>.name {
    font-size: 0.45rem;
}
.name_th>.id {
    font-size: 0.32rem;
    color: #adadaf;
    font-weight: bold;
}
.time_th {
    width: 50%;
    color: #c2c2c4;
    font-size: 0.45rem;
}
.team_list table tr{
    font-size: 0.35rem;
    font-weight: 400;
    color: #5f5d5d;
}
</style>