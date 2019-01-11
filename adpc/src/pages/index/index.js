// index.js文件入口
import "@/less/base.less";
import "swiper/dist/css/swiper.css";
import "@/assets/css/animate.min.css";
import Vue from "vue";
import Index from "./Index.vue";

new Vue({
  render: h => h(Index)
}).$mount("#app");
