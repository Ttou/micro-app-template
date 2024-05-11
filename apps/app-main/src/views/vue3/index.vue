<template>
  <micro-app name="vue3" :url="url" keep-alive />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_VUE3_ENTRY
    }
  }
})
</script>
