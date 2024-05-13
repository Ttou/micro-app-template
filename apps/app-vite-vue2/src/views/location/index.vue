<template>
  <div class="view">
    <div class="content">
      <h3>1、获取子应用的 location.host 值</h3>
      <blockquote>
        <div>{{ selfHost }}</div>
      </blockquote>
      <h3>2、获取主应用的 location.host 值</h3>
      <blockquote>
        <div>{{ parentHost }}</div>
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useLocation } from '@/hooks'

export default defineComponent({
  setup() {
    const { selfLocation, parentLocation } = useLocation()

    const selfHost = selfLocation.host
    const parentHost =
      typeof parentLocation === 'string' ? parentLocation : parentLocation.host

    return {
      selfHost,
      parentHost
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  .content {
    max-width: 740px;
    margin: 0 auto;

    h3 {
      margin: 20px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaecef;
      font-weight: 600;
    }

    .btnWrap {
      margin-bottom: 20px;
    }
  }
}
</style>
