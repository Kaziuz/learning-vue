<template>
    <div>
        <button class="btn btn-danger" @click="increment(100)">Increment</button>
        <button class="btn btn-warning" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>

// asi mapeo las mutations
// import { mapMutations } from 'vuex'
//   export default {
//     methods: {
//         ...mapMutations([
//           'increment',
//           'decrement'
//         ])
//         // increment() {
//         //   // this.$emit('updated', 1);

//         //   // para hacer uso del store. 
//         //   // en este caso accedo a el y al parametro counter para aumentarlo
//         //   // Este seria el caso de uso normal
//         //   //this.$store.state.counter++

//         //   // asi usamos invocamos la mutation y se usan normalmente
//         //   // this.$store.commit('increment')
//         // },
//         // decrement() {
//         //   //this.$store.state.counter--
//         //   // this.$store.commit('decrement')
//         // }
//     }
//   }

// asi mapeo las actions, que son eventos asyncronos que mutan el store
import { mapActions } from 'vuex'

// import * as types from '../store/types'
  export default {
    methods: {
        ...mapActions([
          'increment',
          'decrement'
        ])
        // cuando invocamos nuestras actions de esta forma
        // lo que el destrcuturing hace es lo siguiente
        /*
        increment() {
          this.$store.dispatch('increment')
        },
        esta function tambien puiede resibir argumentos
        increment(by) {
          this.$store.dispatch('increment', by)
        }
        */
    }
  }
</script>