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
        <br><br>
        <transition name="miclase">
          <div class="alert alert-info" v-if="show">This is a some info</div>
        </transition>
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
        <transition name="miclase2" type="animation">
          <div class="alert alert-info" v-if="show">This is a some info</div>
        </transition>
        <hr>
         <!-- 
          El attributo appear permite que las animaciones se apliquen cuando la dom este cargada 
         -->
        <transition name="miclase" appear>
          <div class="alert alert-info" v-if="show">This is a some info</div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      alertAnimation: 'miclase'
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
