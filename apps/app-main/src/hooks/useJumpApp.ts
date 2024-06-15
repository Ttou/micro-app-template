import microApp from '@micro-zoe/micro-app'
import type VueRouter from 'vue-router'

interface Options {
  name: string
  path: string
}

export function useJumpApp({ name, path }: Options, router: VueRouter) {
  if (!microApp.getActiveApps({ excludeHiddenApp: true }).includes(name)) {
    console.log('子应用未激活，需先渲染', name, path)
    router
      .push({ path: `/${name}?${name}=${encodeURIComponent(path)}` })
      .then(() => {
        if (path !== microApp.router.current.get(name)?.fullPath) {
          console.log('子应用已渲染，但路由未匹配，需手动跳转', name, path)
          microApp.setData(name, {
            type: 'route-change',
            payload: { path, replace: true }
          })
        }
      })
  } else {
    console.log('子应用已激活，直接跳转路由', name, path)
    microApp.router.push({ name, path })
  }
}
