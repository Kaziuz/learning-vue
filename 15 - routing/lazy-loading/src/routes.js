import Home from './components/Home.vue'
import Header from './components/Header.vue'
/*
  el lazy loading es una funcionalidad de vue que nos permite cargar solo las funcionalidad y componentes que necesitamos
  se cambian las importancines de los componenetes que queremos cargar perezosamente y la config del webpack reconocera esto -->
*/
// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

// asi se hace la carga lazy pero no funciona --> 
// const User = resolve => {
//   require(['./components/user/User.vue']), () => {
//     resolve(require('./components/user/User.vue'))
//   }
// }

// const UserStart = resolve => {
//   require(['./components/user/UserStart.vue']), () => {
//     resolve(require('./components/user/UserStart.vue'))
//   }
// }
// const UserDetail = resolve => {
//   require(['./components/user/UserDetail.vue']), () => {
//     resolve(require('./components/user/UserDetail.vue'))
//   }
// }
// const UserEdit = resolve => {
//   require(['./components/user/UserEdit.vue']), () => {
//     resolve(require('./components/user/UserEdit.vue'))
//   }
// }

export const routes = [
  // { path: '', component: Home, name: 'home' }, // example.com/
  { path: '', name: 'home', components: { 
    default: Home,
    'header-top': Header
   } },
  // { path: '/user', component: User } // as se usa de la forma normal
  //
  // { path: '/user/:id', component: User } // asi pasamos un enlace dinamico
  // asi es para configurar subrutas dentro de la ruta user
  { path: '/user', components: { 
    default: User,
    'header-bottom': Header
   }, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => { // corremos el beforeEach a nivel de ruta
      console.log('inside router setup')
      next()
    } }, // user/1
    { path: ':id/edit', component: UserEdit, name: 'userEdit' } // si pone nombre para luego poder tomar los params mas facil
  ] },
  { path: '/redirect-me', redirect: '/user' }, // esta ruta lo que hace es que si el usuario entra a '/redirect-me' lo redirecciona a user // tambien se pueede psasar un object de configuration -> redirect: { name: 'home' }
  { path: '*', redirect: '/' }, // este comodin * lo que hace es que si el usuario ingresa en la   // url algo que no existe lo redirecciona al home, osea... atrapada todos los routes poara manejarlos
]

