new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance'
  },
  beforeCreate: function () {
    console.log('before create')
  },
  created: function () {
    console.log('create')
  },
  beforeMount: function () {
    console.log('before Mount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('before updated')
  },
  updated: function () {
    console.log('updated')
  },
  beforeDestroy: function() {
    console.log('before destroy')
  },
  destroyed: function() {
    console.log('destroyed')
  },
  methods: {
    destroy: function() {
      this.$destroy() // nos referimos aqui el cicloc de vida destroy para destruirlo
    }
  },
})