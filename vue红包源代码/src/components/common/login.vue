<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-08 09:24:37
 * @LastEditTime: 2021-08-21 16:53:22
 * @LastEditors: Mr.Meng
-->
<template>
    <div class="body"  v-loading="loading">
        <div id="login">
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        loading:true
    }
  },
  mounted(){
      /***根据Query参数执行不同方法***/
      this.RouteQuery();
  },
  methods: {
      RouteQuery(){
        if(navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1){
            var param = this.$route.query;
            if (Object.keys(param).length !== 0 && param != "" && typeof(param) == "object") {
                if(typeof(param.code) != "undefined" && param.code.length >= 5){
                    var ajaxForm = param;
                        ajaxForm.action = 2;
                    /***执行登录请求*/
                    this.getUserinfo(ajaxForm);
                }else{
                    var a = param.parent_user_id ? param.parent_user_id : 0;
                    this.getWxloginUri(a);
                }
            }else{
                this.getWxloginUri(0);
            }
        }else{
           this.$message.error("请使用微信打开");
        }
      },
      getWxloginUri(parent_user_id){
          /***请求获取跳转域名***/
            this.$http.post('/User/wxLogin',{action:1,parent_user_id:parent_user_id},res=>{
                if(res.status == 200){
                    if(res.data.code == 1){
                        if(!res.data.data.userinfo){
                            location.href = res.data.data.uri;
                        }
                    }
                }
            });
      },
      getUserinfo(param){
          /***请求获取用户信息*/
           this.$http.post('/User/wxLogin',param,res=>{
                if(res.status == 200){
                    if(res.data.code == 1){
                        if(!res.data.data.userinfo){
                            window.location.href = res.data.data.uri;
                        }else{
                            /****记录用户信息***/
                            window.localStorage.setItem('__dpuser',JSON.stringify(res.data.data.userinfo));
                            window.localStorage.setItem('__dpcommon',JSON.stringify(res.data.data.common));
                            this.$router.push({name:'home'});
                        }
                    }
                }
           });
      }
  }
}
</script>
<style scoped>

</style>
