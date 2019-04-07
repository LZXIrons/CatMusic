<template>
  <div class="common-wrapper">
    <div class="common-top-bar">{{bartext=='isTel'?'手机登陆':'邮箱登陆'}}</div>
    <form class="input-box">
      <input type="text" v-model="username" :placeholder="bartext=='isTel'?'请输入手机号码':'请输入邮箱账号'" value="" />
      <input type="password" v-model="password" placeholder="请输入密码" value="" autocomplete="off" />
    </form>
    <div class="login"  @click.stop="Login">立即登陆</div>
  </div>
</template>

<script>
  import $http from "@/api/http.js";
  import $cookie from "@/api/cookie.js";
  export default {
    data() {
      return {
        bartext: this.$route.query.goto,
        username: '',
        password: '',
      }
    },
    created(){
     
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
        $http.login(`phone=${this.username}&password=${this.password}`).then(res => {
          if(res.data.code == "502"){
            alert(res.data.msg)
          }else if(res.data.account.id){
            localStorage.setItem("accoutid",res.data.account.id);
            this.$router.push("/pages/home") 
          }
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