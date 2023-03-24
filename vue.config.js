const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/gh_bublic/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/variables.scss";'
      }
    }
  }
})
