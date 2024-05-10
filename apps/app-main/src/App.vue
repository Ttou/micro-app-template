<template>
  <div id="app">
    <div id="nav" :class="{ active }" @click="handleClose">
      <router-link to="/home">主应用</router-link>
      <router-link to="/vue2">
        Vue2
        <img
          :class="['main-icon', { active: vue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('vue2')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="vue2Flag" class="sub-menu">
          <router-link to="/vue2-sub/home">首页</router-link>
          <router-link to="/vue2-sub/dialog">弹窗</router-link>
          <router-link to="/vue2-sub/location">路由</router-link>
          <router-link to="/vue2-sub/contact">通信</router-link>
        </div>
      </transition>
      <router-link to="/vue3">
        Vue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: vue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('vue3')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="vue3Flag" class="sub-menu">
          <router-link to="/vue3-sub/home">首页</router-link>
          <router-link to="/vue3-sub/dialog">弹窗</router-link>
          <router-link to="/vue3-sub/location">路由</router-link>
          <router-link to="/vue3-sub/contact">通信</router-link>
          <router-link to="/vue3-sub/state">状态</router-link>
        </div>
      </transition>
      <router-link to="/vite-vue2">
        ViteVue2
        <img
          :class="['main-icon', { active: viteVue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('viteVue2')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="viteVue2Flag" class="sub-menu">
          <router-link to="/vite-vue2-sub/home">首页</router-link>
          <router-link to="/vite-vue2-sub/dialog">弹窗</router-link>
          <router-link to="/vite-vue2-sub/location">路由</router-link>
          <router-link to="/vite-vue2-sub/contact">通信</router-link>
        </div>
      </transition>
      <router-link to="/vite-vue3">
        ViteVue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: viteVue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('viteVue3')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="viteVue3Flag" class="sub-menu">
          <router-link to="/vite-vue3-sub/home">首页</router-link>
          <router-link to="/vite-vue3-sub/dialog">弹窗</router-link>
          <router-link to="/vite-vue3-sub/location">路由</router-link>
          <router-link to="/vite-vue3-sub/contact">通信</router-link>
          <router-link to="/vite-vue3-sub/state">状态</router-link>
        </div>
      </transition>
      <router-link to="/rs-vue2">
        RsVue2
        <img
          :class="['main-icon', { active: rsVue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('rsVue2')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="rsVue2Flag" class="sub-menu">
          <router-link to="/rs-vue2-sub/home">首页</router-link>
          <router-link to="/rs-vue2-sub/dialog">弹窗</router-link>
          <router-link to="/rs-vue2-sub/location">路由</router-link>
          <router-link to="/rs-vue2-sub/contact">通信</router-link>
        </div>
      </transition>
      <router-link to="/rs-vue3">
        RsVue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: rsVue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('rsVue3')"
        />
      </router-link>
      <transition name="fade">
        <div v-show="rsVue3Flag" class="sub-menu">
          <router-link to="/rs-vue3-sub/home">首页</router-link>
          <router-link to="/rs-vue3-sub/dialog">弹窗</router-link>
          <router-link to="/rs-vue3-sub/location">路由</router-link>
          <router-link to="/rs-vue3-sub/contact">通信</router-link>
          <router-link to="/rs-vue3-sub/state">状态</router-link>
        </div>
      </transition>
    </div>
    <div class="content">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router/composables'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      active: false,
      vue2Flag: false,
      vue3Flag: false,
      viteVue2Flag: false,
      viteVue3Flag: false,
      rsVue2Flag: false,
      rsVue3Flag: false
    })

    const route = useRoute()

    function handleClose() {
      if (state.active) {
        state.active = false
      }
    }

    function handleFlag(name: string) {
      // @ts-ignore
      state[name + 'Flag'] = !state[name + 'Flag']
    }

    watch(
      () => route.name,
      val => {
        switch (val) {
          case 'vue2-sub':
            !state.vue2Flag && (state.vue2Flag = true)
            break
          case 'vue3-sub':
            !state.vue3Flag && (state.vue3Flag = true)
            break
          case 'vite-vue2-sub':
            !state.viteVue2Flag && (state.viteVue2Flag = true)
            break
          case 'vite-vue3-sub':
            !state.viteVue3Flag && (state.viteVue3Flag = true)
            break
          case 'rs-vue2-sub':
            !state.rsVue2Flag && (state.rsVue2Flag = true)
            break
          case 'rs-vue3-sub':
            !state.rsVue3Flag && (state.rsVue3Flag = true)
            break
          default:
            break
        }
      }
    )

    return {
      ...toRefs(state),
      handleClose,
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

#nav .menu-icon {
  display: none;
  border: none;
  background: rgb(241 107 95) !important;
}

.main-icon {
  width: 44px;
  padding: 0 10px;
  transition: transform 0.3s ease-in;
}

.main-icon.active {
  transform: rotate(180deg);
}

.sub-menu {
  font-size: 16px;
  padding: 0 10px;
}

@media screen and (width <= 768px) {
  #nav {
    position: absolute;
    box-shadow: none;
    transform: translate(-100%, 0);
  }

  #nav.active {
    transform: translate(0, 0);
    box-shadow: 3px 0 9px 2px #e6e6e6;
  }

  #nav .menu-icon {
    position: absolute;
    left: 100%;
    display: block;
  }
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

#nav a:hover {
  color: rgb(241 107 95);
}

.alive {
  display: inline-block;
  white-space: nowrap;
  background-color: rgb(241 107 95);
  border-radius: 8px;
  margin-left: 4px;
  font-size: 10px;
  vertical-align: top;
  padding: 1px 4px;
  color: white;
}

#nav a.router-link-active {
  color: rgb(241 107 95);
  background: rgb(0 0 0 / 5%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
