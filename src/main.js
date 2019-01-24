import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AppLayout from './components/AppLayout.vue'
import './registerServiceWorker'

// helper methods globally avaialable
import './mixins'

import store from './store'

Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
