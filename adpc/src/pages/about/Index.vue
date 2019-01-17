<template>
  <div id="app">
    <Header active="about"/>
    <div class="banner about">
      <div class="title active">
        <p>关于我们</p>
        <p class="en">About US</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Index.vue";
import Footer from "@/components/footer/Index.vue";
import PerAlbum from "@/components/common/PerAlbum.vue";

export default {
  components: {
    Header,
    PerAlbum,
    Footer
  },
  data() {
    return {
      pagImgs2: [
        require("@/assets/img/Product_img1.jpg"),
        require("@/assets/img/Product_img2.jpg"),
        require("@/assets/img/Product_img3.jpg"),
        require("@/assets/img/Product_img1.jpg"),
        require("@/assets/img/Product_img2.jpg"),
        require("@/assets/img/Product_img3.jpg"),
        require("@/assets/img/Product_img4.jpg")
      ]
    };
  }
};
</script>
