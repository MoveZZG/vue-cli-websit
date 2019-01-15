<template>
  <div id="app" :class="{loaded:preLoadingStauts}">
    <div class="pre-loading" ref="preLoading">
      <p><img alt="Vue logo" src="@/assets/img/logo.png"></p>
      <h1>Installed CLI Plugins</h1>
      <el-progress class="progress" type="circle" :width="40" :stroke-width="4" :show-text="false" :percentage="progress"></el-progress>
    </div>
    <Header class="index-header" active="index" :class="[firstPage ? `pg1` : `index` ]"/>
    <swiper :options="swiperOptionMain" ref="mySwiper">
      <!-- 楼层一 -->
      <swiper-slide class="page-1">
        <!-- bg-video -->
        <video id="index-video" src="@/assets/media/bgvideo.mp4" autoplay loop muted poster :url="imgs[0]"></video>
        <!-- slider-swiper -->
        <swiper :options="swiperOptionPgOne" ref="mySwiperPgOne">
          <swiper-slide class="page-1-1">
            <div class="panel">
                <p class="title">世宇不凡</p>
                <p class="des">极致互动体验</p>
                <p class="screen">TNT WITH NIMAB</p>
            </div>
          </swiper-slide>
          <swiper-slide class="page-1-2">
            <div class="panel">
                <p class="title">亿万交互</p>
                <p class="des">精准市场投放</p>
            </div>
          </swiper-slide>
          <swiper-slide class="page-1-3">
            <div class="panel">
              <p class="title">撼天动地</p>
              <p class="des">孤儿又成一人</p>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div id="pagination-pg1" class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="down" @click="sliderNext"></div>
      </swiper-slide>
      <swiper-slide class="page-2">
        <canvas id="star"></canvas>
        <div class="yuan-main">
          <div class="yuan yuan-1">
            <img src="@/assets/img/Big_icon1.png" alt="">
          </div>
          <div class="yuan yuan-2">
            <img src="@/assets/img/Big_icon2.png" alt="">
          </div>
          <div class="yuan yuan-3">
            <img src="@/assets/img/Big_icon3.png" alt="">
          </div>
          <div class="yuan yuan-4">
            <img src="@/assets/img/Big_icon4.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="page-3">
         <div class="page-content container">
          <div class="page-title">
            <h3>专业的互动体验</h3>
          </div>
          <el-row :gutter="20" class="pro-content">
            <el-col :md="6" :sm="12" :xs="24">
              <dl>
                <dt><img src="@/assets/img/Big_icon1.png" alt="" srcset=""></dt>
                <dd class="title">我是描述</dd>
                <dd class="des">听我给你说小鸭子的故事，这个故事讲的是很久很久以前有叫个小红帽的丑小鸭...发出了咕咕咕的声音（</dd>
              </dl>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
              <dl>
                <dt><img src="@/assets/img/Big_icon2.png" alt="" srcset=""></dt>
                <dd class="title">我是描述</dd>
                <dd class="des">听我给你说小鸭子的故事，这个故事讲的是很久很久以前有叫个小红帽的丑小鸭...发出了咕咕咕的声音（</dd>
              </dl>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
              <dl>
                <dt><img src="@/assets/img/Big_icon3.png" alt="" srcset=""></dt>
                <dd class="title">我是描述</dd>
                <dd class="des">听我给你说小鸭子的故事，这个故事讲的是很久很久以前有叫个小红帽的丑小鸭...发出了咕咕咕的声音（</dd>
              </dl>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
              <dl>
                <dt><img src="@/assets/img/Big_icon4.png" alt="" srcset=""></dt>
                <dd class="title">我是描述</dd>
                <dd class="des">听我给你说小鸭子的故事，这个故事讲的是很久很久以前有叫个小红帽的丑小鸭...发出了咕咕咕的声音（</dd>
              </dl>
            </el-col>
          </el-row>     
        </div>
      </swiper-slide>
      <swiper-slide class="page-4">
        <div class="container page-content">
          <div class="page-title">
            <h3>最佳的实践案例</h3>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="page-footer">
        <div class="page-content"></div>
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
import canvas from "@/components/cosmos_canvas.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import { TweenMax } from "gsap";
export default {
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgs: [
        require("@/assets/img/bgvideo.jpg"),
        require("@/assets/img/logo.png"),
        require("@/assets/img/phonebg.jpg"),
        require("@/assets/img/Big_icon1.png"),
        require("@/assets/img/Big_icon2.png"),
        require("@/assets/img/Big_icon3.png"),
        require("@/assets/img/Big_icon4.png")
      ],
      preLoadingStauts: false,
      progress: 0, //进度条
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
        delay: 5000,
        loop: true,
        pagination: {
          el: "#pagination-pg1",
          clickable: true //点击分页器切换
        }
      }
    };
  },
  methods: {
    sliderNext() {
      this.swiper.slideNext();
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    preLoader() {
      return this.$refs.preLoading;
    }
  },
  mounted() {
    let that = this;
    let count = 0; //计算要加载的图片资源个数
    for (let l = 0, imgs = this.imgs, length = imgs.length; l < length; l++)
      ((src, callback) => {
        var img = new Image();
        // 如果资源走缓存跳过
        if (((img.src = src), img.complete)) return count++, callback(), !1;
        img.onload = function() {
          count++, callback();
        };
      })(imgs[l], function() {
        that.progress = ~~((count / length) * 100);
        count === length &&
          setTimeout(() => {
            that.preLoadingStauts = true;
          }, 0);
      });
    // 绘制canvas
    canvas("star", 228, 800, 40, 2, 800000, 0.5);
  }
};
</script>
