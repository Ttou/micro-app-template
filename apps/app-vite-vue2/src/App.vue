<template>
  <div id="#app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router/composables'

import { Nav } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav
  },
  setup() {
    const route = useRoute()

    watch(
      () => route.path,
      () => {
        window.$wujie?.bus.$emit('sub-route-change', 'vite-vue2', route.path)
      }
    )
  }
})
</script>
