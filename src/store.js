import Vue from 'vue'
import Vuex from 'vuex'

import CategoryApi from './data/categories.js'
import EntryApi from './data/entries.js'

Vue.use(Vuex)

const numberOfObjects = 4

export default new Vuex.Store({
  state: {
    categories: CategoryApi.getCategories(),
    expenses: EntryApi.getExpenses(),
    revenues: EntryApi.getRevenues(),
    currentBalance: EntryApi.currentBalance(),
    currentExpenses: EntryApi.currentExpenses(),
    currentRevenues: EntryApi.currentRevenues(),
    lastBalances: EntryApi.lastBalances(numberOfObjects),
    lastExpenses: EntryApi.lastExpenses(numberOfObjects),
    lastRevenues: EntryApi.lastRevenues(numberOfObjects)
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
