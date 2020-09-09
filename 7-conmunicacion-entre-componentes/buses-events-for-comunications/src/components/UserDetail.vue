<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>User age: {{ myAge }} </p>
        <p>reversed name: {{ switchName() }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name from function</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
  export default {
    props: {
      name: [String, Array],
      resetFn: Function,
      myAge: {
        type: Number,
        required: true,
        default: 0
      },
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('')
      },
      resetName() {
        this.name = 'Alex'
        //this.$emit('ageWasEdited', this.myAge) // emito el evento de child to parent
      }
    },
    created () {
      eventBus.$on('ageWasEdited', age => { 
        this.myAge = age // escucho el evento cuando se ejecuta en el bus
      })
    }
  }
</script>

<style scoped>
    div {
      background-color: lightcoral;
    }
</style>

