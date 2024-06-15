import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

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
    title: parsed.VUE_APP_TITLE,
    mountId: 'app'
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: /[\\/]node_modules[\\/]/
    }),
    pluginVue(),
    pluginVueJsx()
  ],
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
    port: Number(parsed.VUE_APP_PORT)
  }
})
