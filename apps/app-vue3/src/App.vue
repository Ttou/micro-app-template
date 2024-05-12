<template>
  <Provider>
    <Nav />
    <RouterView />
  </Provider>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import { Nav, Provider } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Provider
  },
  setup() {
    const router = useRouter()

    function handleDataChange(data: Record<string, any>) {
      if (data.type === 'route-change') {
        router.push(data.payload)
      }
    }

    onBeforeMount(() => {
      window.microApp?.addDataListener(handleDataChange, true)
    })

    onBeforeUnmount(() => {
      window.microApp?.removeDataListener(handleDataChange)
    })
  }
})
</script>
