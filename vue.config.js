const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
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
