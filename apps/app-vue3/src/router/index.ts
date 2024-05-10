import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () =>
        import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () =>
        import(/* webpackChunkName: "Dialog" */ '@/views/dialog/index.vue')
    },
    {
      path: '/location',
      name: 'Location',
      component: () =>
        import(/* webpackChunkName: "Location" */ '@/views/location/index.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () =>
        import(/* webpackChunkName: "Contact" */ '@/views/contact/index.vue')
    },
    {
      path: '/state',
      name: 'State',
      component: () =>
        import(/* webpackChunkName: "State" */ '@/views/state/index.vue')
    }
  ]
})
