<template>
    <footer class="footer">
        <div class="container clearfix">
            <div class="left">
                left
            </div>
            <div class="right">
                right
            </div>
        </div>
        <p class="line"></p>
        <p class="copyright">
            京ICP备112003号 Ccpyright@12311 测试备案号显示公司 版权所有
        </p>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  font-size: 12px;
  color: #888888;
  padding: 38px 0 30px;
  background: #3b3b3b;
  a {
    color: #bdbdbd;
  }
  .left {
    width: 50%;
    min-width: 662px;
    background: #000;
    height: 302px;
    float: left;
  }
  .right {
    width: 290px;
    height: 302px;
    position: relative;
    background: #fdfdfd;
    float: right;
    margin-right: 12px;
  }
  .line {
    display: block;
    height: 1px;
    background: #4b4b4b;
    margin: 30px auto;
  }
  .copyright {
    text-align: center;
    color: #5a5a5a;
  }
}
</style>
