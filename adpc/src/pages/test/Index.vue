<template>
  <div>
        <per-album :imgs="pagImgs2"></per-album>
  </div>
</template>

<script>
  import PerAlbum from "@/components/common/PerAlbum.vue";

  export default {
    components:{
      PerAlbum
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
      }
    }
  }
</script>

<style scoped>

</style>