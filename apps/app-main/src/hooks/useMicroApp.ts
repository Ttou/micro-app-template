import microApp from '@micro-zoe/micro-app'
import type { VueConstructor } from 'vue'

export function useMicroApp(Vue: VueConstructor, router: any) {
  Vue.config.ignoredElements = ['micro-app']

  microApp.start({
    'router-mode': 'search'
  })

  microApp.router.setBaseAppRouter(router)

  microApp.addGlobalDataListener(data => {
    console.log('data', data)

    switch (data.type) {
      case 'click':
        window.alert(data.payload)
        break
      default:
        break
    }
  })

  if (window.localStorage.getItem('preload') !== 'false') {
    // 预加载
  }
}
