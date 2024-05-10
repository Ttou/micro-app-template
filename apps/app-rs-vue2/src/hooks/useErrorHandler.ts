import type { VueConstructor } from 'vue'

export function useErrorHandler(Vue: VueConstructor) {
  Vue.config.errorHandler = (err, instance, info) => {
    console.error(err, instance, info)
  }
}
