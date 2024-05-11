<template>
  <div class="view">
    <div class="content">
      <p>
        当采用 vite 编译框架时，由于 script 的标签 type 为
        module，所以无法采用闭包的方式将 location 劫持代理，这里将代理的
        location 挂载到 $wujie 上，子应用所有采用 window.location
        的代码需要统一修改成 $wujie.location
      </p>
      <h3>1、获取 window.location.host 的值</h3>
      <blockquote>
        <div>{{ windowHost }}</div>
      </blockquote>
      <h3>2、获取 $wujie.location.host 的值</h3>
      <blockquote>
        <div>{{ wujieHost }}</div>
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const windowHost = window.location.host
    const wujieHost = window?.$wujie?.location?.host || `$wujie不存在`

    return {
      windowHost,
      wujieHost
    }
  }
})
</script>

<style scoped>
.view {
  .content {
    max-width: 740px;
    margin: 0 auto;
  }

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
</style>
