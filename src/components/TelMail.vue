<template>
  <div class="common-wrapper">
    <div class="common-top-bar">{{bar_text=='isTel'?'手机登陆':'邮箱登陆'}}</div>
    <form class="input-box">
      <input type="text" v-model="username" :placeholder="bar_text=='isTel'?'请输入手机号码':'请输入邮箱账号'" value="" />
      <input type="password" v-model="password" placeholder="请输入密码" value="" autocomplete="off" />
    </form>
    <div class="login" @click="Login">立即登陆</div>
  </div>
</template>

<script>
  import http from "@/api/http.js"
  export default {
    data() {
      return {
        bar_text: this.$route.query.goto,
        username: '',
        password: '',
      }
    },
    created(){
      this.getCookie("MUSIC_U")
    },
    methods: {
      Login() {
        if (!this.username) {
          alert("账号不能为空")
          return
        } else if (!this.password) {
          alert("密码不能为空")
          return
        }
        http.login(`phone=${this.username}&password=${this.password}`).then(res => {

        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .input-box
    padding 0 .1rem
    margin-top 2rem
    box-sizing border-box
    input
      display block;
      width 100%
      height 1rem;
      text-indent .18rem;
      border-bottom .02rem solid  #a0a0a0
  .login
    background: #ffde1f
    width 2.8rem;
    height .8rem;
    margin 1.5rem auto;
    line-height .8rem;
    text-align center;
    color #fff
</style>