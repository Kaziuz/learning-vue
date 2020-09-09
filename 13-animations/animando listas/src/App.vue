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
        <!-- transition grupales -->
        <hr>
        <button class="btn btn-primary" @click="selectedComponent = selectedComponent == 'DangerAlert' ? 'SuccessAlert' : 'DangerAlert'">carechimba</button>
        <br><br>
          <transition name="miclase" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="miclase2">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
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
      selectedComponent: 'DangerAlert',
      numbers: [1, 2, 3, 4, 5]
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
    addItem() {
      // genero un numero random entero que sera entre 0 - 10000 (Math.random) y el indice mas alto del ultimo elemento
      const pos = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(pos, 0, this.numbers.length + 1) // el +1 es para que no agregue el elemento entrante en algun lugar donde ya existe informacion
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    }
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
    position: absolute;
  }

  /* esta clase es muy especial, se adjunta a cualquier elemento que necesita cambiar de lugar
  permite la transcion entre elementos ya animados, que salen o entran o se desplazan */
  .miclase2-move {
    transition: transform 1s;
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
