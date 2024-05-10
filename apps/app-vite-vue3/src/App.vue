<template>
  <Provider>
    <Nav />
    <RouterView />
  </Provider>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Nav, Provider } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Provider
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.path,
      () => {
        window.$wujie?.bus.$emit('sub-route-change', 'vite-vue3', route.path)
      }
    )

    onMounted(() => {
      window.$wujie?.bus.$on('vite-vue3-router-change', (path: any) => {
        router.push(path)
      })
    })
  }
})
</script>
