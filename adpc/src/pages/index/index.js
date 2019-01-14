// index.js文件入口
import "@/assets/style/animate.min.css";
import "@/assets/style/base.less";
import "swiper/dist/css/swiper.css";
import "./index.less";
import Vue from "vue";
import Index from "./Index.vue";
import { Row, Col, Progress } from "element-ui";
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
// Vue.directive("loadimg", {
//   inserted(el) {
//     //el就是img
//     let src = el.tagName === "VIDEO" ? el.url : el.src;
//     console.log(el);
//     let count = el.count;
//     let img = new Image();
//     img.src = src;
//     if (((img.src = src), img.complete)) return count++;
//     img.onload = function() {
//       count++;
//     };
//   }
// });
new Vue({
  render: h => h(Index)
}).$mount("#app");
