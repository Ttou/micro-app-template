const { defineConfig } = require('@vue/cli-service')
const { default: components } = require('unplugin-vue-components/webpack')
const { ElementUiResolver } = require('unplugin-vue-components/resolvers')
const autoprefixer = require('autoprefixer')
const { config } = require('dotenv')

const { parsed } = config({ path: '.env' })

module.exports = defineConfig({
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // 强制使用自身的依赖
        implementation: require('sass'),
        sassOptions: {
          quietDeps: true
        }
      },
      postcss: {
        postcssOptions: {
          plugins: [autoprefixer()]
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      components({
        dts: false,
        dirs: [],
        resolvers: [
          ElementUiResolver({
            importStyle: false
          })
        ]
      })
    ]
  },
  chainWebpack: config => {
    // 禁用运行时 ts 类型检查
    config.plugins.delete('fork-ts-checker')

    // 配置应用标题
    config.plugin('html').tap(args => {
      args[0].title = parsed.VUE_APP_TITLE
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
    port: parsed.VUE_APP_PORT
  },
  transpileDependencies: ['sockjs-client']
})
