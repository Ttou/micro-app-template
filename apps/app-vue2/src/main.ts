import './public-path'
import './assets/styles'

import Vue from 'vue'

import App from './App.vue'
import { useElementUI, useErrorHandler } from './hooks'
import router from './router'

Vue.config.productionTip = false

useElementUI(Vue)
useErrorHandler(Vue)

let app: Nullable<Vue> = null

window.mount = () => {
  app = new Vue({
    router,
    render: h => h(App)
  })
  // 与官方文档不同
  if (!document.getElementById('app')) {
    const el = document.createElement('div')
    el.id = 'app'
    document.body.appendChild(el)
  }
  app.$mount('#app')
}

window.unmount = () => {
  app!.$destroy()
  // 与官方文档不同
  app!.$el.remove()
  app = null
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
