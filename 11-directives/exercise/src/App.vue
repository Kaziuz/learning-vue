<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <!-- <button v-customOn="clicked" class="btn">Click me</button>  1-->
                <button v-customOn:click="clicked" class="btn">Click me</button>

                <div
                  style="width: 100px; height: 100px; nackground-color: lightgreen"
                  v-customon:mouseenter="mouseEnter"
                  v-customon:mouseleave="mouseLeave"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        customOn: {
          bind(el, binding) { // elemento y functiones o callbacks a escuchar(binding)
            // 1
            // el.onclick = function() {
            //   binding.value() // en value viene clicked que es una function entonces se ejecuta
            // }

            const type = binding.arg
            const fn = binding.value
            el.addEventListener(type, fn)

          }
        }
      },
      methods: {
        clicked () {
          alert('I was clicked!')
        },
        mouseEnter() {
          console.log('Mouse entered!')
        },
        mouseLeave() {
          console.log('Mouse leaved')
        }
      }
    }
</script>

<style>
</style>
