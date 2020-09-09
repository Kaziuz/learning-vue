<template>
    <div>
        <!-- <button class="btn btn-primary" @click="asyncIncrement('hola)">Increment</button>-->
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 1000 })">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {

    // asi mapeo el uso de las actions
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ])
    }

    /*
    methods: {
        increment() {
          // this.$emit('updated', 1);
          // para hacer uso del store. 
          // en este caso accedo a el y al parametro counter para aumentarlo
          // Este seria el caso de uso normal
          this.$store.commit('increment')
        },
        decrement() {
          this.$store.commit('decrement')
        }
    }
    */
  }
</script>