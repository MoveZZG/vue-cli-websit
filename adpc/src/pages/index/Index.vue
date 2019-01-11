<template>
  <div id="app">
    <Header class="index-header" :class="[firstPage ? `pg1` : `index` ]"/>
    <swiper :options="swiperOptionMain" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="page-1">
        <!-- bg-video -->
          <video id="index-video" src="@/assets/img/index-video.mp4" autoplay loop muted poster url="@/assets/phonebg.png" ></video>
        <!-- slider-swiper -->
        <swiper :options="swiperOptionPgOne" ref="mySwiperPgOne">
          <swiper-slide class="page-1-1">
            <div class="panel">
              <div class="word">
                <p>世宇不凡</p> 
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="page-1-2">
            <div class="panel">
              <div class="word">
                <p>撼天动地</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="page-1-3">
            <div class="panel">
              <div class="word">
                <p>孤儿又成一人</p>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div id="pagination-pg1" class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap">
          <img alt="Vue logo" src="@/assets/img/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap odd">
          <img alt="Vue logo" src="@/assets/img/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sw-wrap">
          <img alt="Vue logo" src="@/assets/img/logo.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <Footer/>
      </swiper-slide>
      <!-- Optional controls -->
      <div id="pagination-main" class="swiper-pagination" slot="pagination"></div>
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
      swiperOptionMain: {
        autoplay: false, //禁止自动滚动
        speed: 400,
        direction: "vertical",
        mousewheel: true, //滚轮操作
        pagination: {
          el: "#pagination-main",
          clickable: true //点击分页器切换
        },
        simulateTouch: false, //禁止触碰
        on: {
          slideChangeTransitionStart: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let activeIndex = swiper.activeIndex;
            this.firstPage = activeIndex === 0;
          }
        }
        // breakpoints: {
        //   1140: {
        //     freeMode: true,
        //     slidesPerView: "auto"
        //   }
        // }
      },
      swiperOptionPgOne: {
        autoplay: true,
        speed: 400,
        loop: true,
        pagination: {
          el: "#pagination-pg1",
          clickable: true //点击分页器切换
        }
      }
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
  width: 100%;
  overflow: hidden;
  .swiper-pagination {
    .swiper-pagination-bullet {
      opacity: 0.2;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
      opacity: 1;
    }
  }
}
// 第一页
.page-1 {
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 28px;
      height: 10px;
      display: inline-block;
      background: #fff;
      opacity: 0.2;
      margin: 0 5px;
      border-radius: 20px;
      transition: opacity 0.5s, background-color 0.5s, width 0.5s;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #ffffff;
      width: 150px;
      transition-delay: 0s;
    }
  }
  #index-video {
    width: 100%;
    position: absolute;
  }
  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    left: 0;
    bottom: 0;
  }
  .panel {
    width: 400px;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-left: -200px;
    text-align: center;
    .word {
      color: #fff;
      font-size: 54px;
      letter-spacing: 10px;
      opacity: 0;
    }
  }
  .swiper-slide-active {
    .word {
      animation: fadeInDown 0.8s linear 0.8s forwards;
    }
  }
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
