import microApp from '@micro-zoe/micro-app'
import type { VueConstructor } from 'vue'
import type VueRouter from 'vue-router'

import { useJumpApp } from './useJumpApp'

export function useMicroApp(Vue: VueConstructor, router: VueRouter) {
  Vue.config.ignoredElements = ['micro-app']

  microApp.start({
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

  microApp.addGlobalDataListener(data => {
    switch (data.type) {
      case 'click':
        window.alert(data.payload)
        break
      case 'route-change':
        useJumpApp(data.payload, router)
        break
      default:
        break
    }
  })

  if (window.localStorage.getItem('preload') !== 'false') {
    // 预加载
    microApp.preFetch([
      {
        name: 'vue2',
        url: process.env.VUE_APP_VUE2_ENTRY
      },
      {
        name: 'vue3',
        url: process.env.VUE_APP_VUE3_ENTRY
      },
      {
        name: 'vite-vue2',
        url: process.env.VUE_APP_VITE_VUE2_ENTRY,
        iframe: true
      },
      {
        name: 'vite-vue3',
        url: process.env.VUE_APP_VITE_VUE3_ENTRY,
        iframe: true
      },
      {
        name: 'rs-vue2',
        url: process.env.VUE_APP_RS_VUE2_ENTRY
      },
      {
        name: 'rs-vue3',
        url: process.env.VUE_APP_RS_VUE3_ENTRY
      }
    ])
  }
}
