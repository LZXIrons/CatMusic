<template>
  <div class='content'>
    <div class='logo icon icon-Artboard'></div>
    <div class='login-items'>
      <router-link
        tag="div"
        :to="{path:'/pages/login',query:{goto:'isTel'}}"
        class='tel-login'
      >手机登陆</router-link>
      <router-link
        tag="div"
        :to="{path:'/pages/login',query:{goto:'isMail'}}"
        class='register'
      >邮箱登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrance",
  data() {
    return {
     
    };
  },
  methods: {
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.content
  display flex
  justify-content center
  align-items center
  flex-direction column
  margin 0 auto
  height 100%
  position fixed
  width 100%
  left 0
  font-size 0.38rem
.logo
  margin-bottom 0.5rem
  // padding-top 5rem
  font-size 1.25rem
  color #2c2c2c
.register, .tel-login
  height 1rem
  line-height 1rem
  width 6rem
  text-align center
  margin-bottom 0.5rem
  color #2c2c2c
  border 0.01rem solid #2c2c2c
  border-radius 0.69rem
.visitor
  text-align center
  text-decoration underline
</style>

