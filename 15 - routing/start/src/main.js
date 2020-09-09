import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history' // el mode history es para reemplazar o quitar el # que tiene vue por default. ecample: http://localhost:8080/#/
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
