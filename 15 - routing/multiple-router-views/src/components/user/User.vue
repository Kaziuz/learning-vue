<!-- aqui voy a implementar la navegacion imperativa -->
<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
      <hr>
      <!-- este router viene a ser un router secundario 
        donde se muestran las subrutas configuradas del componente User
      -->
      <router-view></router-view>
    </div>
</template>

<!-- nested routes o rutas anidadas -->
<script>
export default {
  methods: {
    navigateToHome() {
      //this.$router.push({ path: '/' }) // asi redifiro a la ruta
      this.$router.push({ name: 'home' }) // si el en router el componente tiene un name, puedo redirigir de esta forma
    }
  }
}
</script>

<!-- get values params-->
<!--
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to, from) {
      // de esta manera observamos los cambios en el router para apicar los cambios si cambia
      // el parametro to es de donde venimos
      // y el from es hacia donde vamos
      // this.id = to.$route.params.id
      this.id = to.params.id
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push({ path: '/' }) // asi redifiro a la ruta
    }
  }
}
</script>
-->