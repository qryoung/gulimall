import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false




import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'


Vue.component(TypeNav.name, TypeNav);   // 注册全局组件
new Vue({
  render: h => h(App),
  // $route 
  //$router
  router,  // $route, $ router
  store,  // 组件实例身上 多一个  $store 属性 

}).$mount('#app')
