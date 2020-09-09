<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select class="form-control" name="" id="" v-model="alertAnimation">
          <option value="miclase">mi clase</option>
          <option value="miclase2">mi clase 2</option>
        </select>
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <!-- el atributon name del transition tambien puede ser bendinado por otro valor -->
        <br><br>
        <transition :name="alertAnimation">
          <div class="alert alert-success" v-if="show">This is a some info</div>
        </transition>
        <!--  
          El componente transition nos permite animar contenido
          el attr name es el nombre de la clase para que vue utilize sus clases framework de animacion.
          El atributo type le indica a vue cuando una animacion o una transicion a finalizado segun las reglas css aplicadas
        -->
        <transition name="miclase2" type="animation" appear>
          <div class="alert alert-warning" v-if="show">This is a some info</div>
        </transition>
        <hr>
        <!--
          Si queremos eliminar las clases default que vue usa para la animacion, quitamois el attributo name
          y tambien el appear  luego agregamos las clases de transition que vue nos ofrece 
            enter-class
            enter-active-class
            leave-class
            leave-active-class="animated shake
          para asi agregar en estas mismas las clases de animacion. Para este ejemplo esas clases de animacion son las de animate css
        -->
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeX"
        > 
          <div class="alert alert-info" v-if="show">This is a some info</div>
        </transition>

        <!-- transision entre animaciones 
          para vue js si hay dos elementos en una transicion, se deben de añadir keys
          para que el componente animation pueda diferenciar los elementos, si eso no se añade, para el es lo mismo uno que mil
          el attr mode me permite espcificar como se ejecutara la transicion entre dos componenetes. Por defecto este componente
          ya tienbe un comportamiento determinado. Para customizar eso tenemod dos parametros.
          in-out: Las transiciones de los nuevos componentes entran en primer lugar, las transiciones de los componentes actuales 
          salen una vez finalizada la transición entrante.
          out-in: El componente actual sale primero, el nuevo componente entra después de que la transición saliente ha finalizado.
        -->
        <transition leave-active-class="animate__animated animate__bounce" :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is a some info</div>
          <div class="alert alert-warning" v-else key="warning">This is a some info</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <!-- Aqui empezaremos a animar con javascript, utilizando los hooks o eventos de eniamcion 
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"

            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
          >
            component
          </transition>
          -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; backgroundColor: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="selectedComponent = selectedComponent == 'DangerAlert' ? 'SuccessAlert' : 'DangerAlert'">carechimba</button>
        <br><br>
          <transition name="miclase" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue'
import SuccessAlert from './SuccessAlert.vue'
export default {
  name: 'app',
  components: {
    DangerAlert,
    SuccessAlert
  },
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'miclase',
      elementWidth: 100,
      selectedComponent: 'DangerAlert'
    }
  },
  methods: {
    beforeEnter (element) {
      console.log('beforeEnter')
      this.elementWidth = 100;
      element.style.width = this.elementWidth + 'px'
    },
    // aqui es donde realmente sucede la animacion, el argumento done es una funcion
    // debemos de ejecutar el metodo done para indicar a vue que la animacoin a finaliado
    // ademas, se debe de usar el done cuando el elemento NO tiene clases
    // debemos de recordar tambien que si el elemento no tiene clases bandiaremos el elemento diciendole false en :css
    enter(el, done) {
      console.log('enter')
      let round = 1
      const vm_instance = this
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10)+'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterEnter(element) {
      console.log('After enter')
    },
    enterCancelled(element) {
      console.log('enter cancelled')
    },
    beforeLeave(element) {
      console.log('beforeLeave')
      this.elementWidth = 300
      element.style.width = this.elementWidth + 'px'
    },
    leave(el, done) {
      console.log('leave')
      let round = 1
      const vm_instance = this
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10)+'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('After leave')
    },
    leaveCancelled(el) {
      console.log('leave cancelled')
    },
  },
};
</script>

<style>
    /* esta clase solo ataca el elemento al principio, estableemos el estado inicial */
  .miclase-enter {
    opacity: 0;
  }

  /* aqui configuro mi animacion */
  .miclase-enter-active {
    transition: opacity 1s;
  }
  .miclase-leave {
    /*opacity: 1; */
  }
  .miclase-leave-active {
    transition: opacity 1s;
    opacity:0;
  }

  /* init slide */
  .miclase2-enter {
    /* tranform: translateY(20px)*/
    opacity: 0;
  }

  /* el forwards es para que se la animacion se quede en el lugar final donde termina la animacion */
  .miclase2-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .miclase2-leave {

  }

  .miclase2-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
  }

  @keyframes slide-in{
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

    @keyframes slide-out{
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
