import './assets/styles'

import { createApp } from 'vue'

import App from './App.vue'
import { useElementPlus, useErrorHandler } from './hooks'
import router from './router'

const app = createApp(App)

app.use(router)

useElementPlus(app)
useErrorHandler(app)

app.mount('#app')

window.unmount = () => {
  app.unmount()
}
