import Vue from 'vue'
import Router from 'vue-router'
import Site from './views/Site.vue'
import Expenses from './views/Expenses.vue'
import Revenues from './views/Revenues.vue'
import Dashboard from './views/Dashboard.vue'

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
      component: Expenses
    },
    {
      path: '/users/:id/revenues',
      name: 'revenues',
      component: Revenues
    },
    {
      path: '/users/:id/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
