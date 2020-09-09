import Vue from 'vue'
import App from './App.vue'

// esta instancia de vue sera un bus de eventos
//No los ingreso porque ellos ya estan almacenados
export const eventBus = new Vue({
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})