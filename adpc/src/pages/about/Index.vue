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
export default {
  components: {
    Header,
    Footer
  }
};
</script>
