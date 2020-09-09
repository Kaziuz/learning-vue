const data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

// Inicializar un componente en Vue
// que puedo usar en todas mis instancias
Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

const vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true
      this.updateTitle('The VueJS Instance (Updated)')
      // ref$ me da acceso las propiedades del elemento html
      // que contenga el ref respectivo
      this.$refs.myButton.innerText = 'Test'
    },
    updateTitle: function(title) {
      this.title = title
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed new Value: ' + value)
    }
  }
});

setTimeout(function(){
  vm1.title = 'Changed by Timer'
  vm1.show()
}, 3000)

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The new title 2'
  },
  methods: {
    onChange: function() {
      vm1.title = 'title change from app2'
    }
  }
});

// Esta es una forma de hacer un componente
const vm3 = new Vue({
  template: '<h1>Hello!</h1>'
})

vm3.$mount()
document.querySelector('#app3').appendChild(vm3.$el)

// Esta seria la otra forma de hacer un componente
// const vm4 = new Vue({
//   el: '.Forma2',
//   template: '<h1>Hello!</h1>'
// })
