import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history', // el mode history es para reemplazar o quitar el # que tiene vue por default. ecample: http://localhost:8080/#/
  // scrollBehavoiur: con esta propiedad controlamos el comportamiento de desplazamiento del scroll
  // es una que contiene 3 metodos. to, from y guardar la poscision en caso de que el usuario haga scroll hacia abajo y queremos guardar esa posicion
  // esta función espera recuperar un objeto donde tenemos una coordenada x y y
  scrollBehavior(to, from, savedPosition) {
    // tenemos acceso al hash que viene en el uri entonces podemos anclararlo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition){
          // esto da como resultado un comportamiento similiar al navegar
          // con los botones de retroceso y avance
          resolve(savedPosition)
        }
        if (to.hash) {
          resolve({ selector: to.hash })
        }
        resolve({ x: 0, y: 0 })
      }, 600)
    })
  }
})

// aqui ejecutaremos el  beforeEach
// Este codigo se ejecutara ANTES de cada accion de enrutamiento
// como esta aqui definido globalmente se ejecutarea Sempre que el ususario visita una nieav page
router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
