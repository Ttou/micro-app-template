<template>
  <micro-app name="rs-vue3" :url="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_RS_VUE3_ENTRY
    }
  }
})
</script>
