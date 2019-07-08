import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 为什么要配置中间件

import hero from './views/hero/hero.vue'
import weapon from './views/weapon/weapon.vue'
import equip from './views/equip/equip.vue'

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
    },{path:'/',redirect:'/hero'}],
    linkExactActiveClass:'active'
  })

  export default router