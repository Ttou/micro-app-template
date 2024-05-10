<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

import { Nav } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.path,
      () => {
        window.$wujie?.bus.$emit('sub-route-change', 'rs-vue2', route.path)
      }
    )

    onMounted(() => {
      window.$wujie?.bus.$on('rs-vue2-router-change', (path: any) => {
        router.push(path)
      })
    })
  }
})
</script>
