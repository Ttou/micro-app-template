import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/micro-app-template/' : '',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
    },
    {
      path: '/vue2',
      name: 'vue2',
      component: () =>
        import(/* webpackChunkName: "Vue2" */ '@/views/vue2/index.vue')
    },
    {
      path: '/vue3',
      name: 'vue3',
      component: () =>
        import(/* webpackChunkName: "Vue3" */ '@/views/vue3/index.vue')
    },
    {
      path: '/vite-vue2',
      name: 'vite-vue2',
      component: () =>
        import(/* webpackChunkName: "ViteVue2" */ '@/views/vite-vue2/index.vue')
    },
    {
      path: '/vite-vue3',
      name: 'vite-vue3',
      component: () =>
        import(/* webpackChunkName: "ViteVue3" */ '@/views/vite-vue3/index.vue')
    },
    {
      path: '/rs-vue2',
      name: 'rs-vue2',
      component: () =>
        import(/* webpackChunkName: "RsVue2" */ '@/views/rs-vue2/index.vue')
    },
    {
      path: '/rs-vue3',
      name: 'rs-vue3',
      component: () =>
        import(/* webpackChunkName: "RsVue3" */ '@/views/rs-vue3/index.vue')
    }
  ]
})
