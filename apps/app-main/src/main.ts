import './assets/styles'

import Vue from 'vue'

import App from './App.vue'
import { useMicroApp } from './hooks'
import router from './router'

Vue.config.productionTip = false

useMicroApp(Vue, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
