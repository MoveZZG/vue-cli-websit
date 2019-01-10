module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-multi-spaces": "off",
    "no-irregular-whitespace": "off", //禁止掉空格校验
    "eol-last": "off", //文件末尾不加换行
    "no-multiple-empty-lines": [1, { max: 2 }] //空行不能超过两行
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
