<template>
  <div id="app">
    <Header active="cooperation"/>
    <div class="banner about">
      <div class="title active">
        <p>成功案例</p>
        <p class="en">SUCCESS PRODUCT</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Index.vue";
import Footer from "@/components/footer/Index.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
