import { useRouter } from 'vue-router'

function getPushOptions(data: Record<string, any>) {
  if (data.path) {
    data.path = data.path.replace('/#', '')
  }

  return data
}

export function useDataListener() {
  const router = useRouter()

  window.microApp?.addDataListener(data => {
    switch (data.type) {
      case 'route-change':
        router.push(getPushOptions(data.payload))
        break
      default:
        break
    }
  }, true)
}
