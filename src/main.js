import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
    console.log(124)
    el.focus()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
