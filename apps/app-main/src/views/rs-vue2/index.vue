<template>
  <micro-app name="rs-vue2" :url="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      url: process.env.VUE_APP_RS_VUE2_ENTRY
    }
  }
})
</script>
