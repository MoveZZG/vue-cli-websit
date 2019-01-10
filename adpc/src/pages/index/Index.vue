<template>
  <div id="app">
    <Header class="index-header" :class="[firstPage ? `pg1` : `index` ]"/>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="page-1">
        <video id="index-video" src="@/assets/index-video.mp4" autoplay loop muted poster url="@/assets/phonebg.png" ></video>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap">
          <img alt="Vue logo" src="@/assets/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap odd">
          <img alt="Vue logo" src="@/assets/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap">
          <img alt="Vue logo" src="@/assets/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <Footer/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Header from "@/components/header/Index.vue";
import Footer from "@/components/footer/Index.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  data() {
    return {
      firstPage: true,
      swiperOption: {
        autoplay: false, //禁止自动滚动
        speed: 400,
        direction: "vertical",
        mousewheel: true, //滚轮操作
        pagination: {
          el: ".swiper-pagination",
          clickable: true //点击分页器切换
        },
        simulateTouch: false, //禁止触碰
        on: {
          slideChangeTransitionStart: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let activeIndex = swiper.activeIndex;
            this.firstPage = activeIndex === 0;
            // console.log(activeIndex);
          }
        }
        // breakpoints: {
        //   1140: {
        //     freeMode: true,
        //     slidesPerView: "auto"
        //   }
        // }
      },
      msg: "Hello my first mulit-page websit"
    };
  },
  computed: {},
  mounted() {
    // this.mySwiper
  }
};
</script>

<style lang="less">
.swiper-container {
  height: 100%;
  overflow: hidden;
}
#index-video {
  width: 100%;
}
.sw-wrap {
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background: #000;
  &.odd {
    background: #ccc;
  }
}
</style>
