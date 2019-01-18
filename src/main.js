import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AppLayout from './components/AppLayout.vue'
import './registerServiceWorker'

Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
