module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 80
  },
  proxyTable: {
    '/api/*': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'

      },
      "headers":{
        "Access-Control-Allow-Origin":"*"
      }
    },
  },
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },


}
