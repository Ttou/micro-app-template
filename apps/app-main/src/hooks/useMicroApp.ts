import microApp from '@micro-zoe/micro-app'
import type { VueConstructor } from 'vue'

export function useMicroApp(Vue: VueConstructor, router: any) {
  Vue.config.ignoredElements = ['micro-app']

  microApp.start({
    'router-mode': 'search',
    lifeCycles: {
      created(e, appName) {
        console.log(`子应用${appName}被创建`)
      },
      beforemount(e, appName) {
        console.log(`子应用${appName}即将渲染`)
      },
      mounted(e, appName) {
        console.log(`子应用${appName}已经渲染完成`)
      },
      unmount(e, appName) {
        console.log(`子应用${appName}已经卸载`)
      },
      error(e, appName) {
        console.log(`子应用${appName}加载出错`)
      }
    }
  })

  microApp.router.setBaseAppRouter(router)

  microApp.addGlobalDataListener(data => {
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
