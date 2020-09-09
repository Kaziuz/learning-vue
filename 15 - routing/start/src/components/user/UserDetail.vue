<!-- como este componente esta envuelto en el router entonces 
puedo acceder a los params envueltos -->
<template>
  <div>
    <h3>Some User Details</h3>
    <p> User loaded has ID: {{ $route.params.id }} </p>

    <!-- asi pasamos el parametro de una manera sin nombre -->    
    <!-- <router-link
      tag="button"
      :to="`/user/${$route.params.id}/edit`"
      class="btn btn-primary"
    >
      Edit user
    </router-link> -->
    <!-- asi pasamos el parametro al componente por el nombre que le dimos el en router -->
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      class="btn btn-primary"
    >
      Edit user
    </router-link>
  </div>
</template>