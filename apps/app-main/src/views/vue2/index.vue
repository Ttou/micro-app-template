<template>
  <micro-app name="vue2" :url="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_VUE2_ENTRY
    }
  }
})
</script>
