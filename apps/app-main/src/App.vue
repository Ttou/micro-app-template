<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">主应用</router-link>
      <MainMenu
        title="Vue2"
        name="vue2"
        :active="vue2Flag"
        @update="handleFlag"
      />
      <SubMenu :show="vue2Flag" :list="vue2List" />
      <MainMenu
        title="Vue3"
        name="vue3"
        :alive="true"
        :active="vue3Flag"
        @update="handleFlag"
      />
      <SubMenu :show="vue3Flag" :list="vue3List" />
      <MainMenu
        title="ViteVue2"
        name="viteVue2"
        :active="viteVue2Flag"
        @update="handleFlag"
      />
      <SubMenu :show="viteVue2Flag" :list="viteVue2List" />
      <MainMenu
        title="ViteVue3"
        name="viteVue3"
        :alive="true"
        :active="viteVue3Flag"
        @update="handleFlag"
      />
      <SubMenu :show="viteVue3Flag" :list="viteVue3List" />
      <MainMenu
        title="RsVue2"
        name="rsVue2"
        :active="rsVue2Flag"
        @update="handleFlag"
      />
      <SubMenu :show="rsVue2Flag" :list="rsVue2List" />
      <MainMenu
        title="RsVue3"
        name="rsVue3"
        :alive="true"
        :active="rsVue3Flag"
        @update="handleFlag"
      />
      <SubMenu :show="rsVue3Flag" :list="rsVue3List" />
    </div>
    <div class="content">
      <router-view :key="$route.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router/composables'

import { IListItem, MainMenu, SubMenu } from '@/components'

const createVue2List = (name: string): IListItem[] =>
  [
    {
      path: '/#/home',
      title: '首页'
    },
    {
      path: '/#/dialog',
      title: '弹窗'
    },
    {
      path: '/#/location',
      title: '路由'
    },
    {
      path: '/#/contact',
      title: '通信'
    }
  ].map(v => ({ name, ...v }))

const createVue3List = (name: string): IListItem[] =>
  [
    {
      path: '/#/home',
      title: '首页'
    },
    {
      path: '/#/dialog',
      title: '弹窗'
    },
    {
      path: '/#/location',
      title: '路由'
    },
    {
      path: '/#/contact',
      title: '通信'
    },
    {
      path: '/#/state',
      title: '状态'
    }
  ].map(v => ({ name, ...v }))

export default defineComponent({
  name: 'App',
  components: {
    MainMenu,
    SubMenu
  },
  setup() {
    const state = reactive({
      vue2Flag: false,
      vue3Flag: false,
      viteVue2Flag: false,
      viteVue3Flag: false,
      rsVue2Flag: false,
      rsVue3Flag: false,
      vue2List: createVue2List('vue2'),
      vue3List: createVue3List('vue3'),
      viteVue2List: createVue2List('vite-vue2'),
      viteVue3List: createVue3List('vite-vue3'),
      rsVue2List: createVue2List('rs-vue2'),
      rsVue3List: createVue3List('rs-vue3')
    })

    const route = useRoute()

    function handleFlag(name: string) {
      // @ts-ignore
      state[name + 'Flag'] = !state[name + 'Flag']
    }

    watch(
      () => route.name,
      val => {
        switch (val) {
          case 'vue2':
            !state.vue2Flag && (state.vue2Flag = true)
            break
          case 'vue3':
            !state.vue3Flag && (state.vue3Flag = true)
            break
          case 'vite-vue2':
            !state.viteVue2Flag && (state.viteVue2Flag = true)
            break
          case 'vite-vue3':
            !state.viteVue3Flag && (state.viteVue3Flag = true)
            break
          case 'rs-vue2':
            !state.rsVue2Flag && (state.rsVue2Flag = true)
            break
          case 'rs-vue3':
            !state.rsVue3Flag && (state.rsVue3Flag = true)
            break
          default:
            break
        }
      }
    )

    return {
      ...toRefs(state),
      handleFlag
    }
  }
})
</script>

<style scoped>
#app {
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
}

#nav {
  background-color: white;
  flex-shrink: 0;
  font-size: 20px;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  padding: 30px 0;
  width: 280px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 3px 0 9px 2px #e6e6e6;
  transition: transform 0.1s linear;
  transform: translate(0, 0);
  overflow: auto;
}

micro-app {
  width: 100%;
  height: 100%;
}

iframe {
  border: none;
}

h3 {
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

.content {
  flex: 1;
  height: 100vh;
  overflow: hidden scroll;
  width: 1px;
}

#nav a {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s linear;
}

#nav a.router-link {
  cursor: pointer;
}

#nav a.router-link-active {
  color: rgb(241 107 95);
  background: rgb(0 0 0 / 5%);
}
</style>
