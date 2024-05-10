import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  base: '',
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('@/views/dialog/index.vue')
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('@/views/location/index.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/index.vue')
    }
  ]
})
