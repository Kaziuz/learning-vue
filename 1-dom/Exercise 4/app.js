new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    color1: 'square1',
    color2: 'square2',
    input_color: 'blue',
    flag: false,
    style_tag: 'blue',
    height: 100,
    init_progress_bar: false,
    width: 100,
    progress_bar: {
      width: 100,
      backgroundColor: 'red'
    },
  },
  computed: {
    add_class: function () {
      return this.flag === 'true' ? this.style_tag : ''
    }
  },
  methods: {
    startEffect: function () {
      const vm = this
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight
        vm.effectClasses.shrink = !vm.effectClasses.shrink
      }, 1000)
    },
    startProgressbar: function () {
      this.init_progress_bar = !this.init_progress_bar
    }
  },
  watch: {
    init_progress_bar: function (val, oldVal) {
      const vm_instance = this

      let animation = () => { }
      if (val) {
        animation = setInterval(() => {
          vm_instance.width += 10
        }, 1000)
      } else {
        clearInterval(animation)
      }

    }
  }
});
