const data = {
  title: 'The VueJS Instance',
  showParagraph: false
}


const vm1 = new Vue({
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

/*
$mount
Nos permite montar una instancia de vue sin tener que 
seleccionar el elemento directamente en la instancia
*/
vm1.$mount('#app1')

// vm1.$refs.heading.innerText = 'cambiando propiedad'

// setTimeout(function(){
//   vm1.title = 'Changed by Timer'
//   vm1.show()
// }, 3000)

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

const vm3 = new Vue({
  template: '<h1>Hello from templeate instance vue!</h1>'
})

//vm3.$mount('#app3')
vm3.$mount()
document.querySelector('#app3').appendChild(vm3.$el)