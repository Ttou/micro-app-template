<template>
  <micro-app name="rs-vue3" :url="url" />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router/composables'

export default defineComponent({
  setup() {
    const route = useRoute()

    const url = computed(() => {
      return process.env.VUE_APP_RS_VUE3_ENTRY + `#/${route.params.path}`
    })

    watch(
      () => route.params.path,
      () => {
        // wujieVue.bus.$emit('rs-vue3-router-change', `/${route.params.path}`)
      },
      { immediate: true }
    )

    return {
      url
    }
  }
})
</script>
