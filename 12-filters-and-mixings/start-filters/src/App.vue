<!-- filter and mixing -->
<!-- 
para crear nuestro propio  filter, necesitamos crear una funciton que devolvera los datos filtranos mas no los datos en si.
Luego en la interpolacion, se le pasa el simbolo pipe | para asignarle al dato que debe ser filtrado por la funcion. Esta function de filtrado
debe ingresarse en la instancia dentro del json con nombre filters
-->

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{ text | toUppercase | to-lowercase }} </p>
                <hr>
                <input v-model="filterText" />
                <ul v-for="fruit in filteredFruits" :key="fruit"><li>{{ fruit }}</li></ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'hello there!',
        fruits: ['Apple','Banana','Mango','Melon'],
        filterText: ''
      }
    },
    filters: {
      toUppercase(value) {
        // el value que entra aqui es el field text en data
        return value.toUpperCase()
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter(element => {
          return element.match(this.filterText)
        })
      }
    }
  }
</script>

<style>

</style>
