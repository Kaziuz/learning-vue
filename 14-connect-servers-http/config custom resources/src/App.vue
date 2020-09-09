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

    <!-- change get url -->
    <div class="row">
      <input type="text" class="form-control" v-model="node" />
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
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    submit() {
      // console.log(this.user)
      // Sending a POST request
      // la uri por default para el realtime databse de firebase es https://vue-http-80f44.firebaseio.com/
      // asi no funcionará, debemos de añadir al servicio data.json
      // el $hhtp viene el vue resource que fue el que instalamos para poder hacer solicitudes post

      // de esta forma se hace con el vue resource
      // this.$http.post('data.json', this.user)
      //   .then(res => { 
      //     console.log('server response', res)
      //   }, error => {
      //     console.log(error)
      //   })

      // De esta manera usamos el vue resource
      // el resource.save() equivale a un POST
      // this.resource.save({}, this.user)

      // de esta manera usamos nuestro custom vue instalce
     this.resource.saveAlt(this.user)
    },
    fetchData() {
      // aqui usaremos el $hhtp.get de vue.resource. Que ademas de la respuesta de la request, tambien contiene algunos metodos
      // que podemos usar
      // 1. res.json()< -> es un metodo que convierte la respuesta del servidor en json 
      //this.$http.get('https://vue-http-80f44.firebaseio.com/data.json')

      // de esta manera se hace con el vue resource http
      // this.$http.get('data.json')
      //   .then(response => {
      //     const data_parsed = response.json()
      //     return data_parsed
      //   })
      //   .then(data_parsed => {
      //     const result_data = []
      //     Object.entries(data_parsed).map(value => {
      //       result_data.push(value[1])
      //     })
      //     console.log(result_data)
      //     this.users = result_data
      //   })

      // de esta manera lo hacemos con una configuracion resource custom,
      // cambian en la url el servicio al cual pedimos los dato
      // que es simplemente cambiar la url
      this.resource.getData({ node: this.node })
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
  },
  created() {
    // aqui creamos nuestra propio vue resource
    const customActions = {
      saveAlt:{ method: 'POST', url: 'alternative.json'},
      getData: { method: 'GET'}
    }

    // this.resource = this.$resource('data.json') // asi se usa el vue resource normalmente
    // this.resource = this.$resource('data.json', {}, customActions) // asi customizo el uso de vue resource
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
};
</script>

<style>
</style>
