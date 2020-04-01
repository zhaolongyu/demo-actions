import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import axios from './axios/index'
// Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
