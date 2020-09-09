<template>
  <div>
    <nav class="navbar navbar-default">

        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>

        <strong class="navbar-text navbar-right mr-2 pr-2">Funds: {{ funds | currency }}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li><a @click="endDay" href="#">End Day</a></li>
          <li 
            class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a 
              href="#"
              class="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load<span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="" @click.prevent="saveData">Save Data</a></li>
              <li><a href="" @click.prevent="loadData">Load Data</a></li> 
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.$store.dispatch('randomizeStocks')
    },
    saveData() {
      // obtengo todos los datos del store
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }

      // console.log('saved data', data)
      // solo deseo mantener un registro en firebase, 
      // por eso uso PUT
      this.$http.put('data.json', data)
    },
    loadData() {
      this.fetchData()
    }
  }
}
</script>