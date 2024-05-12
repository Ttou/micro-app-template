<template>
  <div class="view">
    <div class="content">
      <h3>1、使用 location.host 获取子应用的值</h3>
      <blockquote>
        <div>{{ host }}</div>
      </blockquote>
      <h3>2、使用 window.microApp.location.host 获取主应用的值</h3>
      <blockquote>
        <div>{{ windowHost }}</div>
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const host = location.host
    const windowHost = window.microApp?.location.host || 'microApp 不存在'

    return {
      host,
      windowHost
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
