<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
      // props: ['counter']
      computed: {
        counter() {
          // return this.$store.state.counter*2 // asi enboco el valor del store
          return this.$store.getters.doubleCounter // asi enboco un valor desde el getters
        }
      }
    }
</script>