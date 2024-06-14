import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
  },
  {
    path: '/state',
    name: 'State',
    component: () => import('@/views/state/index.vue')
  }
]
