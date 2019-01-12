// index.js文件入口
import "../../assets/css/animate.min.css";
import "../../less/base.less";
import Vue from "vue";
import Index from "./Index.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
new Vue({
  render: h => h(Index)
}).$mount("#app");
