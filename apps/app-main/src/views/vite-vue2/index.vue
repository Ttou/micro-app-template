<template>
  <micro-app name="vite-vue2" :url="url" iframe />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_VITE_VUE2_ENTRY
    }
  }
})
</script>
