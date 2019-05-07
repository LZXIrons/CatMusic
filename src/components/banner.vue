<template>
  <swiper v-if="bannerlist.length" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in bannerlist" :key="item.id"> 
      <div class="slide-box" >
         <img :src=item.picUrl alt="">
         <div class="wrap-img" :style="{backgroundImage:'url('+item.picUrl+')',backgroundRepeat:'no-repeat',backgroundPosition:'center center',backgroundSize: 'contain'}"></div>
      </div>
    </swiper-slide>
  
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
  
</template>

<script>
  import $http from "@/api/api.js";
  export default {
    data(){
        return{
            bannerlist:[],
            swiperOption:{
              loop:true,
              autoplay: true,
              pagination: {
                el:'.swiper-pagination',
              },
              // navigation: {
              //   nextEl: '.swiper-button-next',
              //   prevEl: '.swiper-button-prev',
              // },
            }
        }
    },

    mounted() {
      this.initBanner();
    },
    methods:{
        initBanner(){
          $http.getBanner().then(res=>{
            if(res.data.banners){
              let _datas = res.data.banners;
              _datas.forEach(element => {
                this.bannerlist.push(element)
              });
            }
          })
        },
       
    }
  }

</script>

<style lang="stylus" scoped>

.slide-box
  position relative
  height: 3.2rem;
  img 
    width: 90%;
    text-align: center;
    margin-top: .54rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  .wrap-img
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    filter: blur(.7rem);
    z-index: -1;

</style>
<style>
.swiper-pagination-bullet-active{
    background :#fff
}
</style>
