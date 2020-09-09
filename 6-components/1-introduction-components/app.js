Vue.component('my-comp', {
  data: function() {
    return {
      status: 'critical'
    }
  },
  template: '<p>Server status: {{ status }}</ps>'
})

new Vue({
  el: '#app',
})