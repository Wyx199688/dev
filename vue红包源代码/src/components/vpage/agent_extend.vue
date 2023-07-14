<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 09:03:46
 * @LastEditTime: 2021-05-11 21:03:43
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" :style="{background:common.background}" v-loading="loading">
    <div class="topback">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
    </div>
    <img src="/static/tg1c.jpg" @load="loadImage">
  </div>
</template>

<script>
export default {
  name:'agent_extend',
  data () {
    return {
      loading:true,
      common:{
        background:"#f7f7f7",
        service_background:"http://12345.k5ik3yf.cn/uploads/20210306/45c9a7a00dd078f1665820a4ff79a34b.jpg",
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
      loadImage(){
          this.loading = false;
      }
  }
}
</script>