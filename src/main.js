import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import hero from './views/hero/hero.vue'
import weapon from './views/weapon/weapon.vue'
import equip from './views/equip/equip.vue'

Vue.use(VueRouter)
// 为什么要配置中间件

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    name: 'hero',
    path: '/hero',
    component: hero
  },{
    name: 'weapon',
    path: '/weapon',
    component: weapon
  },{
    name: 'equip',
    path: '/equip',
    component: equip
  },{path:'/',redirect:'/hero'}]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')