import Vue from 'vue'
import App from './App.vue'

// De esta manera podemos crear un filtro global y podemos encadenar multiples filtros
Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
