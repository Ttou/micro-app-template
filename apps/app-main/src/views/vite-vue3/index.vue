<template>
  <micro-app name="vite-vue3" :url="url" iframe />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_VITE_VUE3_ENTRY
    }
  }
})
</script>
