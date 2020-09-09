<!-- como este componente esta envuelto en el router entonces 
puedo acceder a los params envueltos -->
<template>
  <div>
    <h3>Some User Details</h3>
    <p> User loaded has ID: {{ $route.params.id }} </p>
    <!-- asi pasamos el parametro al componente con una parametro de busueda -->
    <router-link
      tag="button"
      class="btn btn-warning"
      :to="link"
    >
      Edit user
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: 'userEdit', 
        params: { 
          id: this.$route.params.id 
        }, 
        query: { 
          locale: 'en', 
          q: 100 
        },
        hash: '#data' // este hash selecciona un div en userEdit y hace que el browser brinque a esa posicion
      }
    }
  }
}
</script>