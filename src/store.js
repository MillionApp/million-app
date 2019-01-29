import Vue from 'vue'
import Vuex from 'vuex'

import CategoryApi from './data/categories.js'
import EntryApi from './data/entries.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: CategoryApi.getCategories(),
    lastBalances: EntryApi.getLastBalances(),
    expenses: EntryApi.getExpenses(),
    revenues: EntryApi.getRevenues(),
    lastExpenses: EntryApi.lastExpenses(),
    lastRevenues: EntryApi.lastRevenues()
  },
  mutations: {
    addEntry (state, payload) {
      console.log(payload.type)
      console.log(payload.entry)
    }
  },
  actions: {

  },
  getters: {

  }
})
