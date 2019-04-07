<template>
  <swiper v-if="bannerlist.length" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in bannerlist" :key="item.id">  <img :src=item.picUrl alt=""></swiper-slide>
  
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
  import $http from "@/api/http.js";
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

<style scoped>
</style>
