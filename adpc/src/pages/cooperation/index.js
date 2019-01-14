// index.js文件入口
import "@/assets/style/animate.min.css";
import "@/assets/style/base.less";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import Index from "./Index.vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
new Vue({
  render: h => h(Index)
}).$mount("#app");
