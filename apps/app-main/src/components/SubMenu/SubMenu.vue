<template>
  <transition name="fade">
    <div v-show="show" class="sub-menu">
      <a
        v-for="item in list"
        :key="item.path"
        :class="getLinkClass(item)"
        @click.prevent="handleJump(item)"
      >
        {{ item.title }}
      </a>
    </div>
  </transition>
</template>

<script lang="ts">
import microApp from '@micro-zoe/micro-app'
import { defineComponent, type PropType, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

import { useJumpApp } from '@/hooks'

import { IListItem } from './SubMenu.define'

export default defineComponent({
  name: 'SubMenu',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array as PropType<IListItem[]>,
      default: () => []
    }
  },
  setup() {
    const state = reactive({
      current: ''
    })

    const route = useRoute()
    const router = useRouter()

    function handleJump({ name, path }: IListItem) {
      useJumpApp({ name, path }, router)
    }

    function getLinkClass({ name, path }: IListItem) {
      return [
        'router-link',
        {
          'router-link-active': `/${name}?${name}=${path}` === state.current
        }
      ]
    }

    watch(
      () => route.fullPath,
      val => {
        const fullPath = microApp.router.decode(route.fullPath)

        state.current = fullPath
      },
      {
        immediate: true
      }
    )

    return {
      handleJump,
      getLinkClass
    }
  }
})
</script>

<style scoped>
.sub-menu {
  font-size: 16px;
  padding: 0 10px;
}

.sub-menu a {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s linear;
}

.sub-menu a:hover {
  color: rgb(241 107 95);
}

.sub-menu a.router-link {
  cursor: pointer;
}

.sub-menu a.router-link-active {
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
