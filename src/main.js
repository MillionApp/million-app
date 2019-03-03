import 'numeral/locales'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import money from 'v-money'
import AppLayout from './components/AppLayout.vue'
import './registerServiceWorker'

// helper methods globally avaialable
import './mixins'

import store from './store'

Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

Vue.use(money, { precision: 2 })

var numeral = require('numeral')
numeral.defaultFormat('$ 0.00[,]00')
numeral.locale('pt-br')
Vue.mixin({
  filters: {
    currencyFormat: function (value) {
      return numeral(value).format()
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
