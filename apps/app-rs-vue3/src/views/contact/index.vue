<template>
  <div class="view">
    <div class="content">
      <h3>1、通过 setGlobalData 触发全局数据变化监听</h3>
      <div class="btnWrap">
        <el-button @click="handleJump"> 点击跳转 vue2 </el-button>
      </div>
      <h3>2、通过 forceSetGlobalData 强制触发全局数据变化监听</h3>
      <div class="btnWrap">
        <el-button @click="handleEmit"> 强制触发 </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useDataTrigger } from '@/hooks'

export default defineComponent({
  name: 'Contact',
  setup() {
    function handleJump() {
      useDataTrigger({
        type: 'route-change',
        payload: {
          name: 'rs-vue2',
          path: '/#/contact'
        }
      })
    }

    function handleEmit() {
      useDataTrigger({
        type: 'click',
        payload: 'rs-vue3',
        force: true
      })
    }

    return {
      handleJump,
      handleEmit
    }
  }
})
</script>

<style scoped>
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
      margin-top: 20px;
    }
  }
}
</style>
