<!-- tomamos una prop como valor (dataSwitch) y emitimos un evento de entrada -->
<template>
  <div>
    <div
      id="on"
      @click="changeState(true)"
      :class="{active: value}"
    >
      Onn
    </div>
    <div
      id="off"
      @click="changeState(false)"
      :class="{active: !value}"
    >Off</div>
  </div>
</template>

<script>
export default {
  props: ['value'], // value === dataSwitch porque lo que entra es por el v-model
  methods: {
    changeState(state) {
      this.$emit('input', state) // este input es un nombre personalizado cuando se usa un custom boton controlado por v-model
    }
  }
}
</script>

<style>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on:hover, #on.active {
    background-color: lightgreen;
  }

  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>