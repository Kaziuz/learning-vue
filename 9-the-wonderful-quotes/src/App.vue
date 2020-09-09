<template>
    <div class="container">
      <Header
        :quoteCount="quotes.length"
        :maxQuotes="maxQuotes"
      ></Header>
      <!-- Escucho el emit quoteAdded en la funcion newQuote -->
      <NewQuote
        @quoteAdded="newQuote($event)"
      >
      </NewQuote>
      <QuoteGrid
        @quoteDelete="removeQuote($event)"
        :quotes="quotes"
      ></QuoteGrid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a Quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

    export default {
      data: () => ({
        quotes: [
          'Just a Qoute to see something'
        ],
        maxQuotes: 10
      }),
      methods: {
        newQuote(quote) {
          if (this.quotes.length >= 10) {
            alert('Please delete quotes!')
          }
          this.quotes.push(quote)
        },
        removeQuote(id) {
          this.quotes.splice(id, 1) // quito del quotes por el id que entra
        }
      },
      components: {
        QuoteGrid: QuoteGrid,
        NewQuote: NewQuote,
        Header: Header,
      }
    }
</script>

<style>
</style>
