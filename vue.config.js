const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/_color.scss" as *;
          @use "@/assets/styles/_fonts.scss" as *;
        `
      }
    }
  }
})
