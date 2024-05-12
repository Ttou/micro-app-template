<template>
  <div id="app">
    <div id="nav" :class="{ active }" @click="handleClose">
      <router-link to="/home">主应用</router-link>
      <a class="main-menu">
        Vue2
        <img
          :class="['main-icon', { active: vue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('vue2')"
        />
      </a>
      <transition name="fade">
        <div v-show="vue2Flag" class="sub-menu">
          <a
            :class="getLinkClass('?vue2=/#/home')"
            @click="handleJump('vue2', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?vue2=/#/dialog')"
            @click="handleJump('vue2', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?vue2=/#/location')"
            @click="handleJump('vue2', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?vue2=/#/contact')"
            @click="handleJump('vue2', '/#/contact')"
          >
            通信
          </a>
        </div>
      </transition>
      <a class="main-menu">
        Vue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: vue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('vue3')"
        />
      </a>
      <transition name="fade">
        <div v-show="vue3Flag" class="sub-menu">
          <a
            :class="getLinkClass('?vue3=/#/home')"
            @click="handleJump('vue3', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?vue3=/#/dialog')"
            @click="handleJump('vue3', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?vue3=/#/location')"
            @click="handleJump('vue3', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?vue3=/#/contact')"
            @click="handleJump('vue3', '/#/contact')"
          >
            通信
          </a>
          <a
            :class="getLinkClass('?vue3=/#/state')"
            @click="handleJump('vue3', '/#/state')"
          >
            状态
          </a>
        </div>
      </transition>
      <a class="main-menu">
        ViteVue2
        <img
          :class="['main-icon', { active: viteVue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('viteVue2')"
        />
      </a>
      <transition name="fade">
        <div v-show="viteVue2Flag" class="sub-menu">
          <a
            :class="getLinkClass('?vite-vue2=/#/home')"
            @click="handleJump('vite-vue2', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?vite-vue2=/#/dialog')"
            @click="handleJump('vite-vue2', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?vite-vue2=/#/location')"
            @click="handleJump('vite-vue2', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?vite-vue2=/#/contact')"
            @click="handleJump('vite-vue2', '/#/contact')"
          >
            通信
          </a>
        </div>
      </transition>
      <a class="main-menu">
        ViteVue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: viteVue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('viteVue3')"
        />
      </a>
      <transition name="fade">
        <div v-show="viteVue3Flag" class="sub-menu">
          <a
            :class="getLinkClass('?vite-vue3=/#/home')"
            @click="handleJump('vite-vue3', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?vite-vue3=/#/dialog')"
            @click="handleJump('vite-vue3', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?vite-vue3=/#/location')"
            @click="handleJump('vite-vue3', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?vite-vue3=/#/contact')"
            @click="handleJump('vite-vue3', '/#/contact')"
          >
            通信
          </a>
          <a
            :class="getLinkClass('?vite-vue3=/#/state')"
            @click="handleJump('vite-vue3', '/#/state')"
          >
            状态
          </a>
        </div>
      </transition>
      <a class="main-menu">
        RsVue2
        <img
          :class="['main-icon', { active: rsVue2Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('rsVue2')"
        />
      </a>
      <transition name="fade">
        <div v-show="rsVue2Flag" class="sub-menu">
          <a
            :class="getLinkClass('?rs-vue2=/#/home')"
            @click="handleJump('rs-vue2', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?rs-vue2=/#/dialog')"
            @click="handleJump('rs-vue2', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?rs-vue2=/#/location')"
            @click="handleJump('rs-vue2', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?rs-vue2=/#/contact')"
            @click="handleJump('rs-vue2', '/#/contact')"
          >
            通信
          </a>
        </div>
      </transition>
      <a class="main-menu">
        RsVue3
        <span class="alive">保活</span>
        <img
          :class="['main-icon', { active: rsVue3Flag }]"
          src="@/assets/images/up-one.png"
          @click.prevent="handleFlag('rsVue3')"
        />
      </a>
      <transition name="fade">
        <div v-show="rsVue3Flag" class="sub-menu">
          <a
            :class="getLinkClass('?rs-vue3=/#/home')"
            @click="handleJump('rs-vue3', '/#/home')"
          >
            首页
          </a>
          <a
            :class="getLinkClass('?rs-vue3=/#/dialog')"
            @click="handleJump('rs-vue3', '/#/dialog')"
          >
            弹窗
          </a>
          <a
            :class="getLinkClass('?rs-vue3=/#/location')"
            @click="handleJump('rs-vue3', '/#/location')"
          >
            路由
          </a>
          <a
            :class="getLinkClass('?rs-vue3=/#/contact')"
            @click="handleJump('rs-vue3', '/#/contact')"
          >
            通信
          </a>
          <a
            :class="getLinkClass('?rs-vue3=/#/state')"
            @click="handleJump('rs-vue3', '/#/state')"
          >
            状态
          </a>
        </div>
      </transition>
    </div>
    <div class="content">
      <router-view :key="$route.name" />
    </div>
  </div>
</template>

<script lang="ts">
import microApp from '@micro-zoe/micro-app'
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

import { useJumpApp } from '@/hooks'

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
    const router = useRouter()

    function handleClose() {
      if (state.active) {
        state.active = false
      }
    }

    function handleFlag(name: string) {
      // @ts-ignore
      state[name + 'Flag'] = !state[name + 'Flag']
    }

    function handleJump(name: string, path: string) {
      useJumpApp({ name, path }, router)
    }

    function getLinkClass(url: string) {
      return [
        'router-link',
        {
          'router-link-active': microApp.router.decode(location.search) === url
        }
      ]
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
      handleClose,
      handleFlag,
      handleJump,
      getLinkClass
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
  cursor: pointer;
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

#nav .sub-menu a:hover {
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

#nav a.router-link {
  cursor: pointer;
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
