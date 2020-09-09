
// Esta es la forma en que se registra un componente globalmente
// pasando un nombre y el obj de configaration
/*
Vue.component('my-comp', {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
})
*/

// Esta es la manera en que se registra localmente
// pasando solo el obj de configuration
const component = {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
}

// registramos el componente
new Vue({
  el: '#app1',
  components: {
    'my-comp': component // name_your_component: component locally
  }
})

new Vue({
  el: '#app2',
})