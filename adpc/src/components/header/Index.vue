<template>
  <header>
    <div class="container clearfix">
      <h1 title="logo" class="logo">
        <a href="/index.html"><img src="@/assets/img/logo.png" alt="LOGO" srcset=""> </a>
      </h1>
      <div class="nav-content">
        <nav>
          <ul>
            <li :class="{active: active === 'index'}">
              <span class="nav-item"> <a href="./index.html">官网首页</a></span>
            </li>
            <li :class="{active: active === 'about'}">
              <span class="nav-item"> <a href="./about.html">关于我们</a></span>
            </li>
            <li :class="{active: active === 'cooperation'}">
              <span class="nav-item"> <a href="./cooperation.html">合作相关</a></span>
            </li>
            <li :class="{active: active === 'dynamic'}">
              <span class="nav-item"> <a href="./dynamic.html">公司动态</a></span>
            </li>
            <li :class="{active: active === 'recruit'}">
              <span class="nav-item"> <a href="./recruit.html">人才招聘</a></span>
            </li>
            <li :class="{active: active === 'contact'}">
              <span class="nav-item"> <a href="./contact.html">联系我们</a></span>
            </li>
          </ul>
        </nav>
        <div class="hd-phone">
          <i>110-112-2222</i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    FX: {
      type: Boolean,
      default: () => true
    },
    active: {
      type: String
    }
  },
  data() {
    return {
      // des: "我是header"
    };
  },
  computed: {
    nIndexHeader: () => {
      return this.props.FX ? "index-header" : "";
    }
  },
  mounted() {
    // console.log(this.FX);
  }
};
</script>

<style scoped lang="less">
@hdHeight: 60px;
header {
  background: #fff;
  height: @hdHeight;
  transition-duration: 0.8s;
  &.index-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.2);
    nav li .nav-item a {
      color: #fff;
    }
    .hd-phone {
      border-color: #fff;
      color: #fff;
    }
  }
  .logo {
    width: 180px;
    float: left;
    height: @hdHeight;
    line-height: @hdHeight;
    img {
      height: 100%;
    }
  }
  .nav-content {
    float: right;
  }
  nav {
    color: #333;
    height: 100%;
    display: inline-block;
    margin-left: 50px;
    li {
      font-size: 16px;
      padding: 21px 15px;
      height: 100%;
      display: inline-block;
      position: relative;
      &:hover {
        color: #ff842f;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 30px;
        height: 2px;
        left: 50%;
        margin-left: -15px;
        background: #ff842f;
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
      }
      &:hover::after,
      &.active::after {
        transform: scaleX(1);
      }
      .nav-item {
        color: #333;
      }
    }
  }
  .hd-phone {
    display: inline-block;
    font-style: italic;
    height: @hdHeight;
    line-height: @hdHeight;
    margin-left: 50px;
    i {
      font-size: 14px;
      border: solid 1px #ccc;
      padding: 9px 15px;
      border-radius: 20px;
    }
  }
  &.pg1 {
    padding: 10px 0;
    background: transparent;
    .nav-item {
      color: #fff;
    }
    .hd-phone {
      border-color: #fff;
      color: #fff;
    }
  }
}
@media screen and (min-width: 992px) {
  header nav {
    margin-left: 0px;
  }
}
</style>
