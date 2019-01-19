<template>
  <div id="app" :class="{loaded:preLoadingStauts}">
    <!-- <div class="pre-loading" ref="preLoading">
      <p><img alt="Vue logo" src="@/assets/img/logo.png"></p>
      <h1>Installed CLI Plugins</h1>
      <el-progress class="progress" type="circle" :width="40" :stroke-width="4" :show-text="false" :percentage="progress"></el-progress>
    </div>-->
    <Header class="index-header" active="index" :class="[firstPage ? `pg1` : `index` ]"/>
    <swiper :options="swiperOptionMain" ref="mySwiper">
      <!-- 楼层一 -->
      <swiper-slide class="page-1">
        <!-- bg-video -->
        <video
          id="index-video"
          src="@/assets/media/index-video.mp4"
          autoplay
          loop
          muted
          poster
          :url="imgs[0]"
        ></video>
        <!-- slider-swiper -->
        <swiper :options="swiperOptionPgBanner" ref="mySwiperPgBanner">
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
        <el-row :gutter="20" class="page-content">
          <el-col :md="12" :sm="24" class="left"></el-col>
          <el-col :md="12" :sm="24" class="right">
            <h3 class="title">
              内容标题——关于我们板块
              <span class="line"></span>
            </h3>
            <div class="desc">
              此处内容过于真实，不宜人群（今年行大运者）
              此处内容过于真实，不宜人群（今年行大运者）
              此处内容过于真实，不宜人群（今年行大运者）
              此处内容过于真实，不宜人群（今年行大运者）
              此处内容过于真实，不宜人群（今年行大运者）
            </div>
            <a href="/about1/" class="more">
              <span data-title="了解更多">了解更多</span>
            </a>
          </el-col>
        </el-row>
      </swiper-slide>
      <swiper-slide class="page-3 text-xs-center">
        <div class="page-content container">
          <div class="page-title">
            <h3>合作案例</h3>
          </div>
          <swiper :options="swiperOptionCase" ref="myCaseSwiper" class="case-content">
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>
            <li class="swiper-slide">
              <figure>
                <img src="@/assets/img/case2.jpg" alt="合作案例">
                <figcaption>
                  <h4>案例分析</h4>
                  <p>程序员也敢吃10块钱的便当，做小姐才敢吃20的你就敢要10块的...</p>
                </figcaption>
              </figure>
            </li>

            <div
              class="swiper-button-prev swiper-button-white"
              id="pag-case-pro"
              slot="button-prev"
            ></div>
            <div
              class="swiper-button-next swiper-button-white"
              id="pag-case-next"
              slot="button-next"
            ></div>
          </swiper>
        </div>
      </swiper-slide>
      <swiper-slide class="page-4">
        <div class="page-content container">
          <div class="page-title">
            <h3>产品展示</h3>
          </div>
          <el-row :gutter="20" class="pro-content">
            <swiper :options="swiperOptionPro" ref="mySwiperPgPro">
              <el-col :md="6" :sm="6" :xs="12" class="swiper-slide">
                <dl>
                  <dt>
                    <img src="@/assets/img/home_img2.jpg" alt srcset>
                  </dt>
                  <dd class="title">
                    <p class="title">我是描述</p>
                    <p class="des">发出了咕咕咕的声音</p>
                  </dd>
                </dl>
              </el-col>
              <el-col :md="6" :sm="6" :xs="12" class="swiper-slide">
                <dl>
                  <dt>
                    <img src="@/assets/img/home_img1.jpg" alt srcset>
                  </dt>
                  <dd>
                    <p class="title">我是描述</p>
                    <p class="des">发出了咕咕咕的声音</p>
                  </dd>
                </dl>
              </el-col>
              <el-col :md="6" :sm="6" :xs="12" class="swiper-slide">
                <dl>
                  <dt>
                    <img src="@/assets/img/home_img3.jpg" alt srcset>
                  </dt>
                  <dd>
                    <p class="title">我是描述</p>
                    <p class="des">发出了咕咕咕的声音</p>
                  </dd>
                </dl>
              </el-col>
              <el-col :md="6" :sm="6" :xs="12" class="swiper-slide">
                <dl>
                  <dt>
                    <img src="@/assets/img/home_img2.jpg" alt srcset>
                  </dt>
                  <dd>
                    <p class="title">我是描述</p>
                    <p class="des">发出了咕咕咕的声音</p>
                  </dd>
                </dl>
              </el-col>
              <el-col :md="6" :sm="6" :xs="12" class="swiper-slide">
                <dl>
                  <dt>
                    <img src="@/assets/img/home_img1.jpg" alt srcset>
                  </dt>
                  <dd>
                    <p class="title">我是描述</p>
                    <p class="des">发出了咕咕咕的声音</p>
                  </dd>
                </dl>
              </el-col>
              <div
                class="swiper-button-prev swiper-button-black"
                id="pag-prev-pro"
                slot="button-prev"
              ></div>
              <div
                class="swiper-button-next swiper-button-black"
                id="pag-prev-next"
                slot="button-next"
              ></div>
            </swiper>
          </el-row>
        </div>
      </swiper-slide>
      <swiper-slide class="page-5">
        <div class="container page-content">
          <per-album ref="perAlbum" :imgs="pagImgs2" text="员工风采"></per-album>
        </div>
      </swiper-slide>
      <swiper-slide class="page-footer">
        <div class="contact-cont"></div>
        <div class="contact-text">
          <div class="head">
            <h3 class="title">联系我们
              <span class="line"></span>
            </h3>
            <p class="subtitle">Contact Us</p>
          </div>
          <ul class="details">
            <li>北京市朝阳区华夏永乐</li>
            <li class="mark">ADD：Building B1,No.1,Disheng West Road Beijing</li>
            <li>官方热线：400-0000-0000</li>
            <li>email@email.com</li>
          </ul>
        </div>
        <BaiduMap />
      </swiper-slide>
      <swiper-slide><Footer/></swiper-slide>
      <!-- Optional controls -->
      <!-- <div id="pagination-main" class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import Header from "@/components/header/Index.vue";
import Footer from "@/components/footer/Index.vue";
import PerAlbum from "@/components/common/PerAlbum.vue";
import BaiduMap from "@/components/common/BaiduMap.vue";
import canvas from "@/components/cosmos_canvas.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Header,
    Footer,
    PerAlbum,
    BaiduMap,
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgs: [
        require("@/assets/img/bgvideo.jpg"),
        require("@/assets/img/logo.png")
      ],
      pagImgs2: [
        require("@/assets/img/Product_img1.jpg"),
        require("@/assets/img/Product_img2.jpg"),
        require("@/assets/img/Product_img3.jpg"),
        require("@/assets/img/Product_img1.jpg"),
        require("@/assets/img/Product_img2.jpg"),
        require("@/assets/img/Product_img3.jpg"),
        require("@/assets/img/Product_img4.jpg")
      ],
      preLoadingStauts: false,
      progress: 0, //进度条
      firstPage: true,
      swiperOptionMain: {
        autoplay: false, //禁止自动滚动
        speed: 400,
        // slidesPerView: "auto",
        direction: "vertical",
        mousewheel: true, //滚轮操作
        pagination: {
          // el: "#pagination-main",
          // clickable: true //点击分页器切换
        },
        simulateTouch: false, //禁止触碰
        on: {
          slideChangeTransitionStart: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let activeIndex = swiper.activeIndex; //当前访问的活动单元
            let previousIndex = swiper.previousIndex; //上一个访问活动单元
            let activeIndexType = activeIndex === 0;
            activeIndexType === this.firstPage ||
              (this.firstPage = activeIndexType);
            previousIndex === 4 && this.perAlbum.wrapExit(); //触发组件渲染
          },
          slideChangeTransitionEnd: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let activeIndex = swiper.activeIndex;
            activeIndex === 4 && this.perAlbum.wrapEnter();
          }
        }
        // breakpoints: {
        //   1140: {
        //     freeMode: true,
        //     slidesPerView: "auto"
        //   }
        // }
      },
      swiperOptionPgBanner: {
        autoplay: true,
        delay: 5000,
        loop: true,
        pagination: {
          el: "#pagination-pg1",
          clickable: true //点击分页器切换
        }
      },
      swiperOptionPro: {
        autoplay: false,
        // delay: 5000,
        // loop: true,
        slidesPerView: "auto",
        navigation: {
          nextEl: "#pag-prev-next",
          prevEl: "#pag-prev-pro"
        }
      },
      swiperOptionCase: {
        autoplay: false,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
        slidesPerView: "4",
        navigation: {
          nextEl: "#pag-case-next",
          prevEl: "#pag-case-pro"
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
    perAlbum() {
      return this.$refs.perAlbum;
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
