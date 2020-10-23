import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router/index'

Vue.config.productionTip = false

import Router from 'vue-router'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

require('../vant.conf')
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
