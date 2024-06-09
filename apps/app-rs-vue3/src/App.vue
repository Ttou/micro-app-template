<template>
  <Provider>
    <Nav />
    <RouterView />
  </Provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Nav, Provider } from './components'
import { useDataListener } from './hooks'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Provider
  },
  setup() {
    useDataListener()
  }
})
</script>
