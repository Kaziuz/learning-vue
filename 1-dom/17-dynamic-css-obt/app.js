new Vue({
  el: "#app",
  data: {
    value: 'oe',
    attachRed: false
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
})