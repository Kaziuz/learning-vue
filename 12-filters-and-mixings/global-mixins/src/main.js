import Vue from 'vue'
import App from './App.vue'

// De esta manera podemos crear un filtro global y podemos encadenar multiples filtros
Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
})

// De esta manera podemos crear un mixin global
Vue.mixin({
  created () {
    console.log('mixing globally!')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
