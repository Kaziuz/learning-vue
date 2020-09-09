<template>
  <div class="row">
    <!-- Se agrega el native para que el componente Quote
    que es una lista pueda escuchar el click del usuario y pasarle
    el id a lña function deleteQuote -->
    <Quote v-for="(quote, index) in quotes"
      :key="index"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </Quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  methods: {
    deleteQuote(index){
      this.$emit('quoteDelete', index)
    }
  },
  components: {
    Quote: Quote
  }  
}
</script>