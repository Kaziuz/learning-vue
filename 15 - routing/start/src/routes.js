import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
  { path: '', component: Home, name: 'home' }, // example.com/
  // { path: '/user', component: User } // as se usa de la forma normal
  // { path: '/user/:id', component: User } // asi pasamos un enlace dinamico
  // asi es para configurar subrutas dentro de la ruta user
  { path: '/user', component: User, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail }, // user/1
    { path: ':id/edit', component: UserEdit, name: 'userEdit' } // si pone nombre para luego poder tomar los params mas facil
  ] } 
]

