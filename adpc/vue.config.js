// vue.config.js 基于cli扩展
const webpack = require("webpack");
module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  pages: {
    index: {
      //文件入口
      entry: "src/pages/index/index.js",
      //文件模板
      template: "public/index.html",
      filename: "index.html",
      //title 模板文件的标题
      title: "首页",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    about: {
      //文件入口
      entry: "src/pages/about/index.js",
      //文件模板
      template: "public/index.html",
      filename: "about.html",
      //title 模板文件的标题
      title: "关于我们",
      chunks: ["chunk-vendors", "chunk-common", "about"]
    },
    cooperation: {
      //文件入口
      entry: "src/pages/cooperation/index.js",
      //文件模板
      template: "public/index.html",
      filename: "cooperation.html",
      //title 模板文件的标题
      title: "合作相关",
      chunks: ["chunk-vendors", "chunk-common", "cooperation"]
    },
    test: {
      //文件入口
      entry: "src/pages/test/index.js",
      //文件模板
      template: "public/index.html",
      filename: "test.html",
      //title 模板文件的标题
      title: "合作相关",
      chunks: ["chunk-vendors", "chunk-common", "test"]
    }
  },
  configureWebpack: {
    externals: {
      BMap: "BMap"
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  },
  productionSourceMap: process.env.NODE_ENV !== "production",
  css: {
    extract: true,
    sourceMap: true
  }
};
