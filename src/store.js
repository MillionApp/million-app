import Vue from 'vue'
import Vuex from 'vuex'

import CategoryApi from './data/categories.js'
import EntryApi from './data/entries.js'

Vue.use(Vuex)

function groupByMonth (entries) {
  return sortedEntries(entries).reduce(function (res, entry) {
    var entryDate = new Date(entry.made_at.split('-'))
    var key = `${(entryDate.getMonth() + 1).toString().padStart(2, '0')}/${entryDate.getFullYear()}`
    if (!res[key]) res[key] = []
    res[key].push(entry)
    return res
  }, {})
}

function concatToSet (ary1 = [], ary2 = []) {
  ary2.forEach(function (key) {
    if (!ary1.includes(key)) ary1.push(key)
  })
  return ary1.sort()
}

// expected params:
//   keys Array[]
//   key's format: '01/2019' => MM/YYYY
function orderKeys (keys) {
  return keys.sort(function (date) {
    return date.split('/').reverse().join('/')
  })
}

function sum (collection, initialValue = 0) {
  return collection.reduce(function (res, entry) {
    res += entry.amount
    return res
  }, initialValue)
}

function sortedEntries (entries) {
  return entries.sort(function (entry) {
    return new Date(entry.made_at.split('-'))
  })
}

function currentMonthKey () {
  var currentDate = new Date()
  return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`
}

function currentEntryAmount (entries) {
  var entriesByMonth = groupByMonth(entries)[currentMonthKey()] || []
  return entriesByMonth.reduce(function (acc, entry) {
    acc += entry.amount
    return acc
  }, 0)
}

function monthlyBalance (state, n = 0) {
  var revs = groupByMonth(state.revenues)
  var exps = groupByMonth(state.expenses)
  var keys = concatToSet(Object.keys(revs), Object.keys(exps))
  var lastKeys = n ? orderKeys(keys).slice(-n) : orderKeys(keys)
  var totalExpenses = {}
  var totalRevenues = {}
  var totalBalance = {}

  lastKeys.forEach(function (key) {
    if (!totalRevenues[key]) totalRevenues[key] = 0
    totalRevenues[key] += sum(revs[key] || [])

    if (!totalExpenses[key]) totalExpenses[key] = 0
    totalExpenses[key] += sum(exps[key] || [])

    if (!totalBalance[key]) totalBalance[key] = 0
    totalBalance[key] += totalRevenues[key] - totalExpenses[key]
  })
  return totalBalance
}

function balance (state) {
  return monthlyBalance(state)[currentMonthKey()] || 0
}

export default new Vuex.Store({
  state: {
    categories: CategoryApi.getCategories(),
    expenses: EntryApi.getExpenses(),
    revenues: EntryApi.getRevenues(),
    balance: balance()
  },
  mutations: {
    addEntry (state, payload) {
      state[payload.operation.concat('s')].push(payload.entry)
      console.log('New entry added')
    }
  },
  actions: {
    createEntry (context, payload) {
      setTimeout(() => {
        context.commit('addEntry', payload)
      }, 1000)
    }
  },
  getters: {
    lastBalances: (state, getters) => (n = 12) => {
      return monthlyBalance(state, n)
    },
    currentExpenses: (state) => {
      return currentEntryAmount(state.expenses)
    },
    currentRevenues: (state) => {
      return currentEntryAmount(state.revenues)
    },
    currentBalance: (state, getters) => {
      return balance(state)
    },
    lastExpenses: (state) => (n = 12) => {
      return sortedEntries(state.expenses).slice(-n)
    },
    lastRevenues: (state) => (n = 12) => {
      return sortedEntries(state.revenues).slice(-n)
    }
  }
})
