const data = {
  title: 'The VueJS Instance',
  showParagraph: false
}


const vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true
      this.updateTitle('The VueJS Instance (Updated)')
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

// esta propiedad vue no la va a observar porque se creo
// fuera de la instancia ded vue...
vm1.newProp = "New1"


console.log('forma 1', vm1.title)
console.log('forma 2', vm1.$data.title)
console.log(vm1.$data === data)

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