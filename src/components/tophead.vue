<template>
    <div class="top-box">
        <div class="top-head">
            <slot name="left">
                <div class="icon icon-tubiaozhizuomoban"></div>
            </slot>
            <div>
                <slot name="center">“CatMusic,欢迎你回家”</slot>
            </div>
            <slot name="right">
                <div class="icon icon-sousuo"></div>
            </slot>
        </div>
        <div class="bg-color" ref="intophead"></div>
    </div>
</template>

<script>
  export default {

  }

</script>

<style lang="stylus" scoped>
.top-box
  position: fixed;
  height: .5rem;
  width: 6.4rem;
  top: 0;
  z-index: 2;
.top-head
    width: 100%;
    height:.55rem;
    line-height:.55rem;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 .15rem;
    box-sizing: border-box;
.top-box .bg-color
    display block
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background #ffffff
    opacity 0        
.icon-tubiaozhizuomoban,.icon-sousuo
    color #fff
    font-size: .32rem
</style>
