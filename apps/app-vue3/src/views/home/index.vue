<template>
  <div class="view">
    <el-link type="primary" :href="href" target="_blank">
      在新标签页打开应用
    </el-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      href: process.env.VUE_APP_BASE_URL
    }
  }
})
</script>

<style scoped>
.view {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
