<template>
  <div class="nav">
    <template v-for="(v, i) in list">
      <template v-if="i !== list.length - 1">
        <router-link :key="v.url" :to="v.url">{{ v.title }} | </router-link>
      </template>
      <router-link v-else :key="v.url" :to="v.url">{{ v.title }}</router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Nav',
  setup() {
    const state = reactive({
      list: [
        {
          title: '首页',
          url: '/home'
        },
        {
          title: '弹窗',
          url: '/dialog'
        },
        {
          title: '路由',
          url: '/location'
        },
        {
          title: '通信',
          url: '/contact'
        },
        {
          title: '状态',
          url: '/state'
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.nav {
  text-align: center;
  padding: 30px;
  font-size: 20px;
  line-height: 1;

  a {
    font-weight: 700;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0239d0;
    }
  }
}
</style>
