<template>
  <div class="view">
    <h2>首页</h2>
    <div class="switchWrap">
      <div class="switchItem">
        <input v-model="preload" type="checkbox" />
        <span>预加载</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      preload: window.localStorage.getItem('preload') !== 'false'
    })

    watch(
      () => state.preload,
      val => {
        window.localStorage.setItem('preload', String(val))
        setTimeout(() => window.location.reload(), 1000)
      }
    )

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  justify-content: center;

  .switchWrap {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    right: 20px;

    .switchItem {
      span {
        margin-left: 8px;
      }
    }
  }
}
</style>
