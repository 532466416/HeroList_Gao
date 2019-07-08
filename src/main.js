import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/users'
Vue.prototype.axios = axios;
// 在这里this不等于Vue吗？this.prototype为什么不行？

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')