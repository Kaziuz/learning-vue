<!-- como este componente esta envuelto en el router entonces 
puedo acceder a los params envueltos -->
<template>
  <div>
    <h3>Some User Details</h3>
    <p> User loaded has ID: {{ $route.params.id }} </p>
    <!-- asi pasamos el parametro al componente con una parametro de busueda -->
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
      class="btn btn-warning"
    >
      Edit user
    </router-link>
  </div>
</template>