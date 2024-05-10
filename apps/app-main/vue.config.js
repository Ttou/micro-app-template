const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/micro-app-template/' : '/',
  lintOnSave: false,
  chainWebpack: config => {
    // 禁用运行时 ts 类型检查
    config.plugins.delete('fork-ts-checker')

    // 配置应用标题
    config.plugin('html').tap(args => {
      args[0].title = '京东微前端'
      return args
    })

    // 禁用 Prettier
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.prettify = false
        return options
      })
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: '3000',
    open: true
  },
  transpileDependencies: ['sockjs-client']
})
