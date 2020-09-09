import Vue from 'vue'
import App from './App.vue'

// importo el store creado
import { store } from './store/store'

new Vue({
  el: '#app',
  store, // registro el store en la app
  render: h => h(App)
})
