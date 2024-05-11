<template>
  <Provider>
    <Nav />
    <RouterView />
  </Provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Nav, Provider } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Provider
  }
})
</script>
