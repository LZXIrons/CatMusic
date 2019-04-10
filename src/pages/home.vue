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
          // nowscrolltop:0,
          // lastscrolltop:0,
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
      Scrollhead(){
          let _scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let _eloffsetTop = this.$refs.navtop.offsetTop;
          if( _scrolltop >0 && _scrolltop <= _eloffsetTop){
           let opa = _scrolltop*1.4/_eloffsetTop<0.1?'0':_scrolltop*1.4/_eloffsetTop;
           this.$refs.headpart.$refs.intophead.style.background = "rgba(255, 255, 255, "+ opa +")"
          }
          // // let _bgcolor = 0;
          // let  _nowscrolltop = this.nowscrolltop =_scrolltop;
          // let  _lastscrolltop = this.lastscrolltop;
          // _nowscrolltop = _scrolltop;
          // if(_nowscrolltop > _lastscrolltop){ // 向下滚动
          // console.log("向下滚动");
          //     _bgcolor +=.1;if( _bgcolor > 1 ) return
          //     this.$refs.headpart.$refs.intophead.style.opacity = String( _bgcolor )
          // }else{  // 向上滚动
          // console.log("向上滚动");
          //    _bgcolor -=.1;if( _bgcolor < 0 ) return
          //    this.$refs.headpart.$refs.intophead.style.opacity = String( _bgcolor )
          // }
          // this.lastscrolltop = _nowscrolltop;
          if(_scrolltop >= _eloffsetTop){
            let navtemp = this.$refs.navtop.innerHTML
            this.navshow = false;
            this.$refs.headpart.$refs.intophead.style.color = "#666"
            this.$nextTick(function(){
              this.$refs.tophead.innerHTML = navtemp;
            })
            
          }else{
             this.navshow = true;
             this.$refs.headpart.$refs.intophead.style.color = "#fff"
          }
        }
      },
  }

</script>

<style lang="stylus" scoped>
  nav a
    color #666
</style>
