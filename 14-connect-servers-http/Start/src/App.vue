<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http - postData</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http - get Data</h1>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br >
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} - {{ u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submit() {
      // console.log(this.user)
      // Sending a POST request
      // la uri por default para el realtime databse de firebase es https://vue-http-80f44.firebaseio.com/
      // asi no funcionará, debemos de añadir al servicio data.json
      // el $hhtp viene el vue resource que fue el que instalamos para poder hacer solicitudes post
      this.$http.post('', this.user)
        .then(res => { 
          console.log('server response', res)
        }, error => {
          console.log(error)
        })
    },
    fetchData() {
      // aqui usaremos el $hhtp.get de vue.resource. Que ademas de la respuesta de la request, tambien contiene algunos metodos
      // que podemos usar
      // 1. res.json()< -> es un metodo que convierte la respuesta del servidor en json 
      //this.$http.get('https://vue-http-80f44.firebaseio.com/data.json')
      this.$http.get('')
        .then(response => {
          const data_parsed = response.json()
          return data_parsed
        })
        .then(data_parsed => {
          const result_data = []
          Object.entries(data_parsed).map(value => {
            result_data.push(value[1])
          })
          console.log(result_data)
          this.users = result_data
        })
    }
  }
};
</script>

<style>
</style>
