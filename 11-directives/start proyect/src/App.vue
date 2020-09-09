<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<b>Some strong text</b>'"></p>
      </div>
    </div>
    <!-- custom directive -->
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-global-directive>text affected by global directive</p>
        <p v-global-directive="'blue'">text affected by global directive</p>
        <p v-global-directive:background="'tomato'">text affected by global directive</p>
        <p v-global-directive:background.delayed="'green'">text affected by global directive</p>
      </div>
    </div>

        <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-local-directive>text affected by local directive</p>
        <p v-local-directive="'violet'">text affected by local directive</p>
        <!-- <p v-local-directive:background="'yellow'">text affected by local directive</p> -->
        <!-- <p v-local-directive:background.delayed.blink="'gray'">text affected by local directive</p> -->
        <p v-local-directive:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">text affected by local directive</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // asi registro una diectiva localmente
  directives: {
    'local-directive': {
      bind (el, bindingValue, vnode) {
        let delay = 0;
        let mainColor = ''
        let secondColor = ''
        let currentColor = ''

        if (bindingValue.modifiers['delayed']) {
          delay = 3000;
        }

        if (bindingValue.modifiers['blink']) {
          mainColor = bindingValue.value.mainColor
          secondColor = bindingValue.value.secondColor
          currentColor = mainColor
          setTimeout(() => {

            setInterval(() => {
              // alternamos los colores
              currentColor === secondColor 
                ? currentColor = mainColor 
                : currentColor = secondColor
              
              // Decidimos si cambiamos el color o no
              if (bindingValue.arg === 'background') { 
                el.style.backgroundColor = currentColor
              } else {
                el.style.color = currentColor
              }
            }, bindingValue.value.delay)
          }, delay)

        } else {

          setTimeout(() => {
            if (bindingValue.arg === 'background') { 
              el.style.backgroundColor = bindingValue.value.mainColor
            } else {
              el.style.color = bindingValue.value.mainColor
            }
          }, delay)
        }
      }
    }
  }
};
</script>

<style>
</style>
