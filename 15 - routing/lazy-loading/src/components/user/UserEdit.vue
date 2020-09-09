<!-- aqui sacamos el query o consulta que se hace en los params configurados en userDetails en el link -->
<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analitycs: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    // aqui se ejecutara codigo ANTES de que el usuario cambio de sitio o de pagina o deje el componente
    if (this.confirmed) {
      next()
    } else {
      if (confirm('Are you sure?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>