import Vue from 'vue'
import Router from 'vue-router'
import Site from './views/Site.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Site
    },
    {
      path: '/users/:id/expenses',
      name: 'expenses',
      component: () => import('./views/Expenses.vue')
    },
    {
      path: '/users/:id/revenues',
      name: 'revenues',
      component: () => import('./views/Revenues.vue')
    },
    {
      path: '/users/:id/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})
