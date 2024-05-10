<template>
  <micro-app name="rs-vue2" :url="url" />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router/composables'

export default defineComponent({
  setup() {
    const route = useRoute()

    const url = computed(() => {
      return process.env.VUE_APP_RS_VUE2_ENTRY + `#/${route.params.path}`
    })

    watch(
      () => route.params.path,
      () => {
        // wujieVue.bus.$emit('rs-vue2-router-change', `/${route.params.path}`)
      },
      { immediate: true }
    )

    return {
      url
    }
  }
})
</script>
