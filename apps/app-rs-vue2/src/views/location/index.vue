<template>
  <div class="view">
    <div class="content">
      <p>
        当用户访问location来获取当前的url时，wujie统一拦截并回填子应用正确的地址
      </p>
      <h3>1、获取 location.host 的值</h3>
      <blockquote>
        <div>{{ host }}</div>
      </blockquote>
      <h3>2、获取 window.location.host 的值</h3>
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
    const windowHost = window.location.host

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
