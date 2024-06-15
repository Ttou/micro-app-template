import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx'
import autoprefixer from 'autoprefixer'

const { publicVars, parsed } = loadEnv({ prefixes: ['VUE_APP_'] })

export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts'
    },
    define: {
      ...publicVars
    },
    alias: {
      // 重定向，以防报错
      'core-js/library/fn': 'core-js/features'
    }
  },
  html: {
    title: parsed.VUE_APP_TITLE,
    mountId: 'app'
  },
  plugins: [
    pluginSass({
      sassLoaderOptions: {
        api: 'legacy',
        implementation: require('sass')
      }
    }),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: /[\\/]node_modules[\\/]/
    }),
    pluginVue2(),
    pluginVue2Jsx()
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
