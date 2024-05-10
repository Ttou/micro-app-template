<template>
  <micro-app name="vue2-sub" :url="url" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router/composables'

export default defineComponent({
  setup() {
    const route = useRoute()

    const url = computed(() => {
      return process.env.VUE_APP_VUE2_ENTRY + `#/${route.params.path}`
    })

    return {
      url
    }
  }
})
</script>
