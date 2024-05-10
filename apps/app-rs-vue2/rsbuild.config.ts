import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import autoprefixer from 'autoprefixer'

const { publicVars } = loadEnv({ prefixes: ['VUE_APP_'] })

export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts'
    },
    define: {
      ...publicVars
    }
  },
  html: {
    title: '无界微前端（Rs Vue2）',
    mountId: 'app'
  },
  plugins: [pluginVue2()],
  tools: {
    sass: {
      implementation: require('sass')
    },
    postcss: {
      postcssOptions: {
        plugins: [autoprefixer()]
      }
    }
  },
  output: {
    assetPrefix: './',
    cleanDistPath: true,
    copy: [
      {
        from: 'public'
      }
    ],
    cssModules: {
      localIdentName: '[local]__[hash]'
    },
    sourceMap: {
      js: false,
      css: false
    },
    legalComments: 'none'
  },
  server: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: 3005
  }
})
