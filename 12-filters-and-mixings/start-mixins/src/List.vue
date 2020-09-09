<!-- filter and mixing -->
<!-- 
para crear nuestro propio  filter, necesitamos crear una funciton que devolvera los datos filtranos mas no los datos en si.
Luego en la interpolacion, se le pasa el simbolo pipe | para asignarle al dato que debe ser filtrado por la funcion. Esta function de filtrado
debe ingresarse en la instancia dentro del json con nombre filters

Muy importante entender que primero se ejecutan los mixins y luego el componente. O la instancia.
Mirar los console.log de este proyecto para entender
-->

<script>
export default {

}
</script>

<style>

</style>
-->

<template>
  <div class="row">
    <h1>Filters & Mixins</h1>
    <input v-model="filterText" />
    <ul v-for="fruit in filteredFruits" :key="fruit"><li>{{ fruit }}</li></ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
  export default {
    mixins: [fruitMixin],
    created () {
      console.log('Inside list creating hook')
    }
  }
</script>

<style>

</style>
