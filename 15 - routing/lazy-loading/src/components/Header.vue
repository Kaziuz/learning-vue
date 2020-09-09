<template>
<ul class="nav nav-pills">
  
  <!-- <li role="presentation"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">User</li> -->

  <!-- vue tiene sus propios componentes de <a> -->
  <!--
  <li role="presentation" class="active"><router-link to="/">Home</router-link></li>
  <li role="presentation"><router-link to="/user">User</router-link></li>
  -->

  <!-- para definir un tag personalizdo con active link, ademas agregamos el exact porque el router de vue viene con el to="/" siempre seleccionado
    por default. entonces asi cambiamos ese comportamiento para que siempre el active del router funcione 
  -->
  <!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="user" tag="li" active-class="active"><a>User</a></router-link> -->

  <!-- simulando el envio de un parametro -->
  <!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
  <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link> -->

  <!-- nested routes -->
    <!-- simulando el envio de un parametro -->
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="/user" tag="li" active-class="active"><a>User </a></router-link>
</ul>
</template>

