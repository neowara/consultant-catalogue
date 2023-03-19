const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Load the global scss file
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/styles.scss";
        `
      }
    }
  }
})
