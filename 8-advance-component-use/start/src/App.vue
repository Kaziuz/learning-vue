<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Qoute</button>
        <button @click="selectedComponent = 'appAutor'">The autor</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <!-- 
          La palabra reservada component me sirve para pintar componentes dinamicos
          bandiandole un atributo

          Ahora, si envuelvo mi componente o mis componentes en la palabra reservada
          keep-alive entonces el componente no se destruira, permitiendo que las acciones
          que se hicieron en ese componente y si se navega a otro componente no se pierdan
        -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>

        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful Qoute</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Qoute from './components/Quote.vue'
  import AppAutor from './components/AppAutor.vue'
  import AppNew from './components/AppNew.vue'

  export default {
    data: () => ({
      quoteTitle: 'The quote',
      selectedComponent: 'app-quote'
    }),
    components: {
      'app-quote': Qoute,
      appAutor: AppAutor,
      appNew: AppNew,
    }
  }
</script>

<style scoped>
  
</style>
