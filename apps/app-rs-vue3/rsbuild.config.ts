import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

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
    title: '京东微前端（Rs Vue3）',
    mountId: 'app'
  },
  plugins: [pluginVue()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [autoprefixer(), postcssNested({ preserveEmpty: true })]
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
    port: 3006
  }
})
