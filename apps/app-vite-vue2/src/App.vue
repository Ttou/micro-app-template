<template>
  <div id="#app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Nav } from './components'

export default defineComponent({
  name: 'App',
  components: {
    Nav
  }
})
</script>
