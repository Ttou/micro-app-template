import { customHtml } from '@ttou/vite-html'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import postcssNested from 'postcss-nested'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    base: './',
    css: {
      postcss: {
        plugins: [autoprefixer(), postcssNested({ preserveEmpty: true })]
      }
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`
        }
      ]
    },
    server: {
      cors: true,
      host: 'localhost',
      port: Number(env.VITE_APP_PORT)
    },
    plugins: [
      vue(),
      vueJsx(),
      components({
        dts: false,
        dirs: [],
        resolvers: [
          ElementPlusResolver({
            importStyle: false
          })
        ]
      }),
      customHtml({
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`
      })
    ],
    optimizeDeps: {
      include: ['element-plus/es']
    },
    build: {
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks: {
            vue: ['vue', 'vue-router'],
            'element-plus': ['element-plus']
          }
        }
      }
    }
  }
})
