import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)   
// 为什么要配置中间件

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
