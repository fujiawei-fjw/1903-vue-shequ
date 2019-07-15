module.exports = {
  // 当 vue 的环境处于 puboduction(生产环境)时 将 puboduction 改成 /1903-vue-shequ/ ，开发环境时是 "/"
  publicPath: process.env.NODE_ENV === "production" ? "/1903-vue-shequ/" : "/"
};
