import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Entrance',
      component:r => require.ensure([], () => r(require('@/pages/Entrance')), 'Entrance'),
    },
    {
      path: '/pages/login',
      name: 'login',
      component:r => require.ensure([], () => r(require('@/pages/login')), 'login'),
    }
  ]
})
