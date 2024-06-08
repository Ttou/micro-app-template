import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import autoprefixer from 'autoprefixer'

const { publicVars, parsed } = loadEnv({ prefixes: ['VUE_APP_'] })

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
    title: '京东微前端（Rs Vue2）',
    mountId: 'app'
  },
  plugins: [
    pluginSass({
      sassLoaderOptions: {
        api: 'legacy',
        implementation: require('sass')
      }
    }),
    pluginVue2()
  ],
  tools: {
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
    port: Number(parsed.VUE_APP_PORT)
  }
})
