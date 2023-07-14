<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-08 09:24:37
 * @LastEditTime: 2021-05-10 20:01:59
 * @LastEditors: Mr.Meng
-->
<template>
  <div id="content">
    <router-view/>
    <div id="bottom">
      <el-row>
        <el-col :span="6" v-for="(item,index) in NavBarList" :key="item.title">
          <div class="navbar-div" @click="toUrl(index)">
            <div class="img">
              <img :src="[ActiveNavBar == index ? item.checkicon : item.icon]"/>
            </div>
            <div class="title" :class="[ActiveNavBar == index ? 'active' : '']">{{item.title}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ActiveNavBar:0,
      NavBarList:[
        {
          title:"抢包包",
          icon:"./static/tab1.png",
          checkicon:"./static/tab1-s.png",
          link:"/"
        },
        {
          title:"代理",
          icon:"./static/tab2.png",
          checkicon:"./static/tab2-s.png",
          link:"/agent"
        },
        {
          title:"客服",
          icon:"./static/tab3.png",
          checkicon:"./static/tab3-s.png",
          link:"/service"
        },
        {
          title:"拆包包",
          icon:"./static/tab4.png",
          checkicon:"./static/tab4-s.png",
          link:"/open"
        },
      ],
    }
  },
  watch:{
     '$route.path': function (newVal, oldVal) {
        this.goRouteActive(newVal);
      }
  },
  mounted(){
    this.goRouteActive(this.$route.path);
  },
  methods: {
    goRouteActive(name){
      var list = this.NavBarList;
      for(var i=0;i<list.length;i++){
        if(list[i].link == name){
            this.ActiveNavBar = i;break;
        }
      }
    },
    toUrl(i){
      this.ActiveNavBar = i;
      this.$router.push({path:this.NavBarList[i].link});
    }
  }
}
</script>
<style scoped>

</style>
