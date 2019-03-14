<template>
  <div class="common-wrapper">
    <div class="common-top-bar">{{bar_text=='isTel'?'手机登陆':'邮箱登陆'}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bar_text:this.$route.query.goto
      }
    },
   
  }
</script>

<style lang="stylus" scoped>


</style>