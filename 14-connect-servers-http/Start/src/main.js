import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

/* Configuramos el vue resource globalmente
    Esto se hace añadiendo la utilidad a vue
*/
Vue.use(VueResource)

/* 
  configuraremos un servicio globalmente 
  Importante: cuando se configura una url para acceder a ella globalmente. No es necesario
  añadir el $ al http. Es decir: no es necesario escribir $http sino http. El uso del dolar solo 
  es necesario en una instancia creada localmente
*/

// configuramos una url global.
// al gacer esto todas las solicitudes que hagamos se iran por esta global configuration
Vue.http.options.root = 'https://vue-http-80f44.firebaseio.com/data.json'

/* Interceptors: interceptors request*/
// se definen globalmente y son usados para pre y post procesar un request.
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  // modificamos el metodo. Esto quiere decir que cuando en la app se haga un put este middleware o interceptor lo cambiara por un put
  if (request.method == 'POST') {
    request.method = 'PUT'
  }
    // este next es muy importante porque permite que el request siga su flujo
  next()
})


/* ESTO SOLO FUNCIONARA SI SE CORRE EL INTERCEPTOR DE REQUEST PRIMERO */
/* Interceptors: interceptors -> intercepting responses*/
// se definen globalmente y son usados para pre y post procesar un request.
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  // modificamos el metodo. Esto quiere decir que cuando en la app se haga un put este middleware o interceptor lo cambiara por un put
  if (request.method == 'POST') {
    request.method = 'PUT'
  }

  // aqui podemos interceptar las responses pasandole un argumento que tambien es una function
  next(response => {
    response.json = () => { return { messages: response.body }}
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
