<template>
    <footer class="footer">
        <div class="container clearfix">
            <div class="top">
                <ul class="footer-nav">
                  <li><a href="./index.html">首页</a></li>
                  <li><a href="./about.html">关于我们</a></li>
                  <li><a href="#">合作相关</a></li>
                  <li><a href="#">公司动态</a></li>
                  <li><a href="#">人才招聘</a></li>
                  <li><a href="#">联系我们</a></li>
                </ul>
            </div>
            <div class="bottom clearfix">
                <div class="fl">
                  <img src="@/assets/img/erweima.jpg" alt="">
                </div>
                <div class="fr">
                  <p class="adress">北京市洛克时代C座7层</p>
                  <p class="phone">400-6522-1233</p>
                </div>
                
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
  font-size: 21px;
  color: #fff;
  padding: 38px 0 30px;
  background: #000;
  a {
    color: #fff;
  }
  .top {
    width: 100%;
    .footer-nav {
      padding-bottom: 63px;
      li {
        line-height: 22px;
        margin-right: 20px;
        display: inline-block;
      }
    }
  }
  .bottom {
    width: 100%;
    font-size: 14px;
    position: relative;
    margin-right: 12px;
    line-height: 40px;
  }
  .line {
    display: block;
    height: 1px;
    background: #fff;
    margin: 10px auto;
  }
  .copyright {
    font-size: 14px;
    text-align: center;
    color: #fff;
  }
}
</style>
