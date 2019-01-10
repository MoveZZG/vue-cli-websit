// index.js文件入口
import "@/less/base.less";
import "swiper/dist/css/swiper.css";
import Vue from "vue";
import Index from "./Index.vue";
// Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(Index)
}).$mount("#app");
