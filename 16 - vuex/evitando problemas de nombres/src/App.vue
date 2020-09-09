<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr />
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr />
        <!-- cuando usamos redux el input funcionara con v-model
        utilizando el get y set properties que rara vez se usaran

          solcuion alternativa con methods
          sino que tenemos que ejecutar en methods una funcion 
          que haga un dispatch al store con el value del input -->
        <!-- <input type="text" :value="value" @input="updateValue"> -->
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";

export default {
  computed: {
    value: {
      get() {
        // aqui obtenemos los valores
        return this.$store.getters.value // NO working porque esta computada
      },
      set (value) {
        // aqui actualizamos los valoes
        console.log(value)
        return this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value)
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter,
  },
};
</script>

