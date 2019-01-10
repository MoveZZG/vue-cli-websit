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
      title: "首页"
      //chunk: ""
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jQuery",
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
