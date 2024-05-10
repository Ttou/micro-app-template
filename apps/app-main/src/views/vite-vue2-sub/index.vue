<template>
  <micro-app name="vite-vue2" :url="url" iframe />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router/composables'

export default defineComponent({
  setup() {
    const route = useRoute()

    const url = computed(() => {
      return process.env.VUE_APP_VITE_VUE2_ENTRY + `#/${route.params.path}`
    })

    return {
      url
    }
  }
})
</script>
