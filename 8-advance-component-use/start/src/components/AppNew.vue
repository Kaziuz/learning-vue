<template>
  <div>
    <h3>The new</h3>
    <button @click="counter++">Increase</button>
    <button @click="counter--">Decrease</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default { 
  data: () => ({
    counter: 0 
  }),
  destroyed() {
    console.log('destroyed')
  },
  deactivated() {
    // se ejecutara siempre que estemos en el componente y carguemos otro
    console.log('Deactivated')
  },
  activated() {
    // se ejecutara siempre que carguemos estre componente
    console.log('activated')
  }
}
</script>

<style>
</style>