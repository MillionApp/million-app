import Vue from 'vue'
import Vuex from 'vuex'
import categoryApi from './data/sub_categories.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sub_categories: categoryApi.getSubCategories()

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
