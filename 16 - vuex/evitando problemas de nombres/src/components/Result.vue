<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'
    export default {

      // de esta manera se hace usando em mapGetters
      // el mapGetters lo que hace es que le dice al compilado
      // parce sacame todos los metodos y cosas que tenes aqui
      // // y a cada una de ellas creales la estructura key: value
      // computed: mapGetters({
      //   doubleCounter: 'doubleCounter',
      //   stringCounter: 'stringCounter'
      // })
      computed: {
        ...mapGetters({
          counter: types.DOUBLE_COUNTER,
        })
      }
      // de esta manera se hace el uso normal de los getters
      // computed: {
      //   counter() {
      //     // return this.$store.state.counter*2 // asi enboco el valor del store
      //     return this.$store.getters.doubleCounter // asi enboco un valor desde el getters
      //   },
      //   clicks() {
      //     return this.$store.getters.stringCounter
      //   }
      // }
    }
</script>