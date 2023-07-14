<!--
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-13 09:30:43
 * @LastEditTime: 2021-05-13 10:14:55
 * @LastEditors: Mr.Meng
-->
<template>
  <div class="body" style="background:#ffffff">
      <div class="topback" v-if="type == 1  || type == 2">
        <img src="/static/back.png" @click.stop="$router.go(-1)">
     </div>
        <div class="content" style="position: relative;top: 1rem;height: 90vh;" v-if="type == 1  || type == 2">
            <div class="title" v-if="type == 1">
                请选择投诉该网页的原因:
            </div>
            <div class="title" v-if="type == 2">
                你可以:
            </div>
            <div class="li-list" v-if="type == 1">
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含欺诈信息（如：假红包）
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含色情信息
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含暴力恐怖信息
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含政治敏感信息
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页在手机个人隐私信息（如：钓鱼链接）
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含诱导分享/关注性质的内容
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页可能包含谣言信息
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
                <div class="li-item" @click.stop="next()">
                    <div>
                        网页包含赌博信息
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
            </div>
            <div class="li-list" v-if="type == 2">
                <div class="li-item" @click.stop="next()">
                    <div>
                        提交给微信团队审核
                    </div>
                    <img class="right" src="/static/left.png" alt="">
                </div>
            </div>
            <div class="a-label" v-if="type == 1">
                遇到网页流量被劫持怎么办
            </div>
            <div class="tsxz" v-if="type == 1 || type == 2">
                投诉须知
            </div>
        </div>
        <img src="/static/tousu.png" alt="" v-if="type == 3">
        <button class="close" @click.stop="$router.pash({path:'/'})" v-if="type == 3">关闭</button>
  </div>
</template>

<script>
export default {
  name:'complaint',
  data () {
    return {
        type:1
    }
  },
  mounted(){
    
  },
  methods: {
      next(){
          this.type = this.type + 1;
          if(this.type == 2){
              /***提交投诉*/
              this.$http.get('User/getComplaint',{},res=>{});
          }
      }
  }
}
</script>
<style scoped>
.close {
    background-color: #1DAD17;
    color: #ffffff;
    border: none;
    width: calc(100% - 30px);
    height: 45px;
    line-height: 45px;
    margin: 0 15px;
    border-radius: 5px;
    font-size: 17px;
    margin-top: 20px;
}
.title {
    margin-left: 0.3rem;
    color: #999;
    font-size: 0.38rem;
    position: relative;
    top: 0.6rem;
    text-align: left;
}
.li-list{
    position: relative;
    top: 0.8rem;
}
.li-item{
    height: 1.2rem;
    line-height: 1.2rem;
    background-color: #fff;
    border-bottom: #d8d8d8 1px solid;
}
.li-item div {
    background-color: #fff;
    font-size: 0.34rem;
    padding: 0 0.3rem;
    float: left;
    color: #333;
}
.right {
    width: 0.6rem;
    height: 0.6rem;
    float: right;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
}
.a-label {
       color: #117afe;
    font-size: 0.38rem;
    text-align: left;
    position: relative;
    top: 0.9rem;
    margin-left: 0.3rem;
}
.tsxz {
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    color: #117afe;
    font-size: 0.38rem;
    left:0;
    right:0;
}
</style>