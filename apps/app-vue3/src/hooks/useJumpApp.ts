interface Options {
  type: 'event' | 'router'
  name: string
  path: string
}

export function useJumpApp({ type, name, path }: Options) {
  switch (type) {
    case 'event':
      // 事件方式
      window.microApp?.setGlobalData({
        type: 'route-change',
        payload: { name, path }
      })
      break
    case 'router':
      // 路由方式
      {
        const baseRouter = window.microApp?.router.getBaseAppRouter()
        baseRouter?.push({
          path: `/${name}?${name}=${encodeURIComponent(path)}`
        })
      }
      break
    default:
      break
  }
}
