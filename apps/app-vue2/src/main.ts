import './public-path'
import './assets/styles'

import Vue from 'vue'

import App from './App.vue'
import { useElementUI, useErrorHandler } from './hooks'
import router from './router'

Vue.config.productionTip = false

useElementUI(Vue)
useErrorHandler(Vue)

const app = new Vue({ router, render: h => h(App) })

app.$mount('#app')

window.unmount = () => {
  app.$destroy()
}
