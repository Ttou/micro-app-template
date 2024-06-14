import './assets/styles'

import { type App as IApp, createApp } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouterHistory
} from 'vue-router'

import App from './App.vue'
import { useElementPlus, useErrorHandler } from './hooks'
import { routes } from './router'

let app: Nullable<IApp> = null
let router: Nullable<Router> = null
let history: Nullable<RouterHistory> = null

window.mount = () => {
  app = createApp(App)
  history = createWebHashHistory('')
  router = createRouter({
    history,
    routes
  })

  useElementPlus(app)
  useErrorHandler(app)

  app.use(router)
  app.mount('#app')
}

window.unmount = () => {
  app?.unmount()
  history?.destroy()

  app = null
  router = null
  history = null
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
