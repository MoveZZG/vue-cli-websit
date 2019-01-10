<template>
  <header>
    <div class="container clearfix">
      <h1 title="logo" class="logo">
        <span>LOGO</span>
      </h1>
      <nav>
        <ul>
          <li>
            <span>官网首页</span>
          </li>
          <li>
            <span>关于我们</span>
          </li>
          <li>
            <span>合作相关</span>
          </li>
          <li>
            <span>公司动态</span>
          </li>
          <li>
            <span>人才招聘</span>
          </li>
          <li>
            <span>联系我们</span>
          </li>
        </ul>
      </nav>
      <div class="hd-phone">
        <i>110-112-2222</i>
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
    }
  },
  data() {
    return {
      // des: "我是header"
    };
  },
  // computed: {
  //   nIndexHeader: () => {
  //     return this.props.FX ? "index-header" : "";
  //   }
  // },
  mounted() {
    // console.log(this.FX);
  }
};
</script>

<style scoped lang="less">
@hdHeight: 60px;
header {
  background: #fff;
  color: #333;
  height: @hdHeight;
  &.index-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  &.pg1 {
    color: #fff;
    background: transparent;
  }
  &.index {
    transform: translateY(-@hdHeight);
    // opacity: 0;
    // overflow: hidden;
  }
  .logo {
    width: 180px;
    height: 100%;
    float: left;
    height: @hdHeight;
    line-height: @hdHeight;
  }
  nav {
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
}
</style>
