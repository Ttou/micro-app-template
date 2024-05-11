<template>
  <div class="view">
    <div class="content">
      <p>设置保活模式，切换应用时，子应用的路由和state都可以得到保留</p>
      <h3>1、改动实例的状态，切换到vue2，点击按钮再回来看看</h3>
      <div class="numberContent">
        <el-button @click="count--">-</el-button>
        <span class="number">{{ count }}</span>
        <el-button @click="count++">+</el-button>
      </div>
      <div>
        <el-button @click="handleJump">跳转vue2</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 10
    })

    function handleJump(e: MouseEvent) {
      const baseRouter = window.microApp.router.getBaseAppRouter()
      baseRouter.push({ name: 'vue2', path: '/contact' })
    }

    return {
      ...toRefs(state),
      handleJump
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

    .numberContent {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      .number {
        display: inline-block;
        margin: 0 20px;
        width: 100px;
        text-align: center;
        font-size: 50px;
        font-weight: bold;
        color: #0239d0;
      }
    }
  }
}
</style>
