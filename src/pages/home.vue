<template>
   <div>
       <banner-part></banner-part>
       <tophead-part ref="headpart">
          <template  v-slot:center v-if="!navshow">
           <div ref="tophead"></div>
          </template>
       </tophead-part>
       <div ref="navtop" :style="{ visibility:navshow?'visible' : 'hidden'}">
          <nav>
            <router-link tag="a" to="#" v-for="item in navlist" :key="item">
              {{item}}
            </router-link>
          </nav>
       </div>
       <div style="height:1500px"></div>
   </div>
</template>

<script>
  
  import $http from "@/api/http.js";
  import BannerPart from "../components/banner.vue";
  import TopheadPart from "../components/Tophead.vue";
  export default {
    data(){
        return{
          navlist:["音乐","电台","节目1","节目2","节目3","节目4"], //栏目
          navshow:true,
          navtemp:'', //栏目模板
        }
    },
    components:{
      BannerPart,
      TopheadPart
    },
    mounted() {
      window.addEventListener('scroll',this.Scrollhead)
    },
    methods:{
      Scrollhead(window,now_scrolltop=0,last_scrolltop=0){
          let _scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _eloffsetTop = this.$refs.navtop.offsetTop;
          let bgcolor = this.$refs.headpart.$refs.intophead.style.opacity
          now_scrolltop = _scrolltop;
          if(now_scrolltop > last_scrolltop){ // 向下滚动
            if(bgcolor >= 0 && bgcolor < 1){
              bgcolor +=.1
            }
          }else{  // 向上滚动
             bgcolor -=.1
          }
          last_scrolltop = now_scrolltop;
          if(_scrolltop >= _eloffsetTop){
            let navtemp = this.$refs.navtop.innerHTML
            this.navshow = false;
            this.$nextTick(function(){
              this.$refs.tophead.innerHTML = navtemp;
            })
            
          }else{
             this.navshow = true;
          }
        }
      },
  }

</script>

<style lang="stylus" scoped>
  nav a
    color #333
</style>
