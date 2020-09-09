<!-- 
  cuando hacemos click en cada componente regidigimos el ususario hacia
  cada vista configuyrada en el router (router.js)
-->
<template>
  <div>
    <p>Please select a User</p>
    <hr>

    <router-link
      class="list-group-item"
      tag="li"
      to="/user/1"
      style="cursor: pointer"
    >
      User 1
    </router-link>
    <router-link
      class="list-group-item"
      tag="li"
      to="/user/2"
      style="cursor: pointer"
    >
      User 2
    </router-link>
    <router-link
      class="list-group-item"
      tag="li"
      to="/user/3"
      style="cursor: pointer"
    >
      User 3
    </router-link>
    <!-- <ul class="list-group">
      <li class="list-group-item" style="cursor: pointer">User 1</li>
      <li class="list-group-item" style="cursor: pointer">User 2</li>
      <li class="list-group-item" style="cursor: pointer">User 3</li>
    </ul> -->
  </div>
</template>