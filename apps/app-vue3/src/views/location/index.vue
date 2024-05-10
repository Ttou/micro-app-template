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
      <h3>3、修改 window.location.href</h3>
      <el-button class="btnWrap" type="warning" @click="handleClick">
        跳转无极
      </el-button>
      <p>
        子应用修改location.href，会将当前的子应用的shadow删除并且替换成一个iframe
      </p>
      <blockquote>
        <div>如果子应用配置路由同步，浏览器可通过回退回到子应用</div>
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

    function handleClick() {
      // @ts-ignore
      window.$wujie.location.href =
        'https://wujicode.cn/xy/app/prod/official/index'
    }

    return {
      host,
      windowHost,
      handleClick
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
