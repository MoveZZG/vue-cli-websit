<template>
  <div id="perspective" @mousedown="startDrag" @mouseup="stopDrag">
    <div id="wrap" ref="perImg" :style="rolStyle">
      <img v-for="(item, index) in imgs" :src="item" alt="展示" :key="index">
    </div>
    <p></p>
  </div>
</template>

<script>
let roXMax = 20;
export default {
  props: {
    imgs: {
      type: Array,
      required: true
    },
    boxStyle: {
      type: Object
    }
  },
  data() {
    return {
      initialMouseX: 0,
      initialMouseY: 0,
      roY: 0,
      roX: 0,
      timer: "",
      minuseX: 0,
      minuseY: 0
    };
  },
  computed: {
    perImgs() {
      return this.$refs.perImg;
    },
    preImgObj() {
      const oImgs = this.perImgs.getElementsByTagName("img");
      const length = oImgs.length;
      return { imgs: oImgs, length: length, deg: 360 / length };
    },
    rolStyle() {
      return { transform: `rotateX(${this.roX}deg)rotateY(${this.roY}deg)` };
    }
  },
  methods: {
    startDrag(e) {
      e.preventDefault();
      this.initialMouseX = e.pageX;
      this.initialMouseY = e.pageY;
      window.onmousemove = e => {
        this.mouseMoveing(e);
      };
    },
    stopDrag(e) {
      e.preventDefault();
      window.onmousemove = null;
      this.timer = setInterval(() => {
        let mx = this.minuseX,
          my = this.minuseY;
        mx *= 0.95;
        my *= 0.95;
        if (Math.abs(mx) < 0.2 && Math.abs(mx) < 0.1) {
          clearInterval(this.timer);
        }
        this.roY += mx * 0.2;
        this.roX -= my * 0.1;
        this.roX = this.roX <= 0? Math.max(this.roX, -roXMax) : Math.min(this.roX, roXMax);
        this.minuseX = mx;
        this.minuseY = my;
      }, 13);
    },
    mouseMoveing(e) {
      e.preventDefault();
      let targetX = e.pageX,
        targetY = e.pageY,
        lastX = this.initialMouseX,
        lastY = this.initialMouseY,
        mx,
        my;
      clearInterval(this.timer);
      mx = targetX - lastX;
      my = targetY - lastY;
      this.roY += mx * 0.2;
      this.roX -= my * 0.1;
      this.roX = this.roX <= 0? Math.max(this.roX, -roXMax) : Math.min(this.roX, roXMax);      
      // oWrap[0].style.transform = `rotateY(${roY}deg)`;
      this.initialMouseX = targetX;
      this.initialMouseY = targetY;
      this.minuseX = mx;
      this.minuseY = my;
    },
    wrapEnter() {
      let obj = this.preImgObj;
      for (var i = 0; i < obj.length; i++) {
        //分别设置 旋转角度
        obj.imgs[i].style.transform = `rotateY(${i *
          obj.deg}deg)translateZ(350px)`;
        //分别设置设置过渡效果2
        obj.imgs[i].style.transition = `transform 1s ${(obj.length - 1 - i) *
          0.1}s`;
      }
    },
    wrapExit() {
      let obj = this.preImgObj;
      for (var i = 0; i < obj.length; i++) {
        //分别设置 旋转角度
        obj.imgs[i].style.transform = `rotateY(0deg)translateZ(0px)`;
      }
    }
  }
};
</script>

<style scoped lang="less">
#perspective {
  user-select: none;
  height: 100%;
  /*设置景深*/
  perspective: 800px;
  /*设置盛放照片的div*/
  #wrap {
    transition: none;
    width: 120px;
    height: 180px;
    position: relative;
    margin: 0 auto;
    /*创建3D场景*/
    transform-style: preserve-3d;
    /*让照片出现后上下呈现一定的角度*/
    transform: rotateX(-10deg) rotateY(0deg);
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      /*给照片添加圆角和阴影*/
      box-shadow: 0 0 2px pink;
      transform: rotateY(0deg) translateZ(0px);
      // /*倒影:朝向 偏移  遮盖  *//*线性渐变(从哪里开始) 开始时候的颜色  结束时候的颜色*/
      -webkit-box-reflect: below 5px
        linear-gradient(top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.5) 100%);
    }
    p {
      width: 1200px;
      height: 1200px;
      /*径向渐变 (从哪里开始) 扩散程度 开始时候的颜色  结束时候的颜色*/
      background: radial-gradient(
        center center,
        600px 600px,
        rgba(244, 23, 134, 0.2),
        rgba(0, 0, 0, 0)
      );
      border-radius: 100%;
      position: absolute;
      left: 50%;
      top: 102%;
      margin-left: -600px;
      margin-top: -600px;
      transform: rotateX(90deg);
    }
  }
}
</style>
