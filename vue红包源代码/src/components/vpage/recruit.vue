<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-13 09:20:52
 * @LastEditTime: 2021-05-13 09:28:58
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" style="background:#ffffff">
      <div class="topback">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
     </div>
       <div class="content" style="padding: 0.1rem 0.7rem;">
            <div style="text-align: center;">
                <h2 class="h2-title">招聘平台总代理</h2>
            </div>
            <div style="height: 1px;background-color: #eeeeee;width: 100%;"></div>
            <div style="color: #333333;margin-top: 20px;font-size: 0.4rem;text-align: left;">
                    <p>
                        游戏网站仅供测试研究使用
                    </p>
                    <p>
                        不做任何商业用途
                    </p>
                    <p>
                        切勿用于其他用途
                    </p>
                    <p>
                        如有违反与本人无关
                    </p>
                    <p>
                        平台搭建测试QQ：
                    </p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'recruit',
  data () {
    return {
      
    }
  },
  mounted(){
    
  },
  methods: {
  }
}
</script>
<style scoped>
 .h2-title{
     font-size:0.8rem;
 }
</style>