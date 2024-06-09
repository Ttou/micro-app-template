import { customHtml } from '@ttou/vite-html'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import autoprefixer from 'autoprefixer'
import { globbySync } from 'globby'
import { resolve } from 'path'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')
  const optimizeElement = globbySync(['node_modules/element-ui/lib/*.js'], {
    deep: 1
  }).map(v => v.replace('node_modules/', '').replace('.js', ''))

  return {
    base: './',
    css: {
      postcss: {
        plugins: [autoprefixer()]
      }
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`
        },
        {
          find: /^~/,
          replacement: ''
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
          ElementUiResolver({
            importStyle: false
          })
        ]
      }),
      customHtml({
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`
      })
    ],
    optimizeDeps: {
      include: ['vue-router/composables', ...optimizeElement]
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
            'element-ui': ['element-ui']
          }
        }
      }
    }
  }
})
