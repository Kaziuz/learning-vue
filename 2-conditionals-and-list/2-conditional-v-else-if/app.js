new Vue({
  el: "#app",
  data: {
    show: true,
    counter: 0,
  },
  watch: {
    counter: function(){
      if (this.counter >= 4) {
        const vm = this
        setTimeout(() => {
          vm.counter = 0
        }, 2000)
      }
    }
  }
})