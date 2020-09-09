import Vue from 'vue'
import App from './App.vue'

/*
  Para crear una directiva existen dos caminos. EL primero es registrarla GLOBALMENTE y luego pasamos la configuracion
  Una directiva tambien posee un ciclo de vida que nos permite manejar diferentes cosas. Los mas importantes seran bind y update
  bind nos permite conectar nuestra directiva con el elemento cuando se monta al dom. Recibe tres parametros: al acceso al elemento,
  el enlace y el nodo virtul. Update nos permitira actualizar elementos
*/

// ASI REGISTRO UNA DIRECTIVA GLOBALMENTE
Vue.directive('global-directive', {
  bind (el, bindingValue, vnode) {
    // 1. el.style.backgroundColor = 'green' // asi solamente se crea la directiva

    // 2. de esta manera cambiamos el color dinamicamnte, pasandole un valor a la directiva
    // el.style.backgroundColor = bindingValue.value 

    // 3. cambiamos el color dinamicamente, 
    // pasandole un valor con argumento a la directiva v-highlight:v-bind:background -> background seria el argumento
    //   if (bindingValue.arg === 'background') { 
    //     el.style.backgroundColor = bindingValue.value
    //   } else {
    //     el.style.color = bindingValue.value
    //   }

    // 4. podemos escuchar tambien los argumentos que vienen en la directiva -> .delayed
    let delay = 0;
    if (bindingValue.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (bindingValue.arg === 'background') { 
        el.style.backgroundColor = bindingValue.value
      } else {
        el.style.color = bindingValue.value
      }
    }, delay)
 }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
