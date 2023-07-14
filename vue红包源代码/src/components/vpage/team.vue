<template>
  <div class="body" :style="{background:common.background}" v-loading="loading">
    <div class="topback">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
    </div>
    <div class="topdiv-team">
        <img class="avatar" v-if="parent_user" :src="parent_user.avatar">
        <img class="avatar" v-else :src="user.avatar">
        <div class="nickname">
            <div v-if="parent_user">{{parent_user.nickname}}</div>
            <div v-else>{{user.nickname}}</div>
            <div>您的推荐人</div>
        </div>
        <div class="nickid">
            <span class="id">ID</span>
            <span class="text" v-if="parent_user">{{parent_user.id}}</span>
            <span class="text" v-else>{{user.id}}</span>
        </div>
    </div>
    <div class="flex">
        <div class="item" v-for="(item,index) in list" @click.stop="handleClick(index)">
            <div class="left-item" :style="{background:item.background}">{{item.title}}</div>
            <el-progress :text-inside="true" :color="item.background" :stroke-width="19" :percentage="item.percentage"></el-progress>
            <div class="right">
                <img :src="item.img" v-if="item.img != ''">
                <span class="count" :style="{marginLeft:index == 5 ? '1rem' : ''}">{{item.count}}</span>
            </div>
        </div>
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
      parent_user:false,
      common:{
        background:"#f7f8fa",
      },
      list:[
          {
              title:"一级",
              img:"/static/team-1.png",
              background:"#7887fa",
              percentage:0,
              count:0
          },
          {
              title:"二级",
              img:"/static/team-2.png",
              background:"#f8a66e",
              percentage:0,
              count:0
          },
          {
              title:"三级",
              img:"/static/team-3.png",
              background:"#f37777",
              percentage:0,
              count:0
          },
          {
              title:"四级",
              img:"/static/team-4.png",
              background:"#ce85fa",
              percentage:0,
              count:0
          },
          {
              title:"五级",
              img:"/static/team-5.png",
              background:"#facc74",
              percentage:0,
              count:0
          },
          {
              title:"总",
              img:"",
              background:"#424345",
              percentage:100,
              count:0
          },
      ]
    }
  },
  mounted(){
      this.getList();
  },
  methods: {
      handleClick(level){
          var a = level >= 5 ? 0 : level + 1;
          this.$router.push({path:'/team_list',query:{g:a}});
      },
      getList(){
        /***返回团队各占比例*/
        this.$http.get('/User/getReam',{},res=>{
            if(res.status == 200){
                if(res.data.code == 1){
                    if(res.data.data.parent_user){
                        this.parent_user = res.data.data.parent_user;
                    }
                    if(res.data.data.list.length >= 1){
                        var list = res.data.data.list;
                        for(var i=0;i<list.length;i++){
                            this.list[i].percentage = list[i].percentage;
                            this.list[i].count = list[i].count;
                        }
                    }
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
.topdiv-team{
    text-align: left;
    padding-left: 0.2rem;
    position:relative;
    top:1rem;
}
.flex:last-child {
    position:relative;
    top:2rem;
    border-right: 0;
    padding: 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        text-align: left;
}
.flex .item .right {
    display: inline-block;
    position: absolute;
    padding-top: 0.15rem;
    left: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 20%;
}
.flex .item .right>img {
    width: 0.95rem;
}
.flex .item .right>.count {
    line-height: 0.9rem;
    font-weight: bold;
        font-size: 0.44rem;
}
.flex .item {
    width: 100%;
    display: block;
    padding: 5px 0;
    line-height: 20px;
}
.flex .item:nth-child(1) .left-item {
    background: #7887fa;
}
.flex .item>.left-item {
    width: 1.1rem;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    border-radius: 1.1rem;
    font-size: 0.38rem;
    display: inline-block;
    margin-right: -6.25px;
    color: #ffffff;
}
.topdiv-team>.avatar {
    width: 1.85rem;
    border-radius: 1.85rem;
    vertical-align: middle;
}
.topdiv-team>.nickname {
    padding: 0.32rem;
    display: inline-block;
    font-size: 0.38rem;
    font-weight: bold;
    vertical-align: middle;
}
.topdiv-team>.nickid {
    padding: 0.115rem;
    font-size: 0.36rem;
    font-weight: normal;
    text-align: right;
    display: inline-block;
    right: 0.6rem;
    border: 1px solid #757373;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.7rem;
}
.nickid>.id {
    background: #000;
    color: #fff;
    padding: 0.03rem;
    margin: 0.05rem;
    border-radius: 0.07rem;
}
</style>