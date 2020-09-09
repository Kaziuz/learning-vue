<!--
Explicacion v-model
El v-model hace principalmente dos cosas detras de escenas: 

1. bandea  el value (prop!!!) de la etiqueta y lo vincula al metodo o var que lo vaya a usar

<input 
  type="text" 
  id="email"
  v-bind:value="userData.email"
/> Send Infomail

2. Luego nos proprociona un evento de escucha (@input si usamos el v-model o @change si usamos el v-model.lazy)
  donde valaga la rebundancia, escucha los cambios y actualiza la variable bandiadia

<input
  type="text"
  id="email"
  :value="userData.email"
  @input="userData.email = $event.target.value"
/>
-->

<template>
  <div class="container">
    <form>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- <input
              id="email"
              type="text"
              class="form-control"
              v-model="userData.email"
            /> -->

            <!-- v-model custom -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!-- el v-mode.lazy es para que la info no se monte de una sino que cuando se haga click en otro sitio si se monte-->
            <input
              id="password"
              type="password"
              class="form-control"
              v-model.lazy="userData.password"
            />
            <p>Password: {{ userData.password }}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              id="age"
              type="number"
              class="form-control"
              v-model="userData.age"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input 
                type="checkbox" 
                id="sendmail" 
                value="SendMail" 
                v-model="sendMail"
              /> Send Mail
            </label>
            <label for="sendInfomail">
              <input 
                type="checkbox" 
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"
              /> Send Infomail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender" /> Female
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option 
              v-for="(priority, index) in priorities" 
              :key="index" 
              :selected="priorities[0]"
            >{{ priority }}</option>
          </select>
        </div>
      </div>
      <!-- custom input button -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr />

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button 
            class="btn btn-primary"
            @click.prevent="submitted"
          >Submit!</button>
        </div>
      </div>
    </form>

    <hr />

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!-- este estilo aqui sirve para conservar los enter que el usuario da en el textarea-->
            <p style="whiteSpace: pre">Message: {{ message }}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="(mail, index) in sendMail" :key="index">{{ mail }}</li>
            </ul>
            <p>Gender: {{ gender }} </p>
            <p>Priority: {{ selectedPriority }} </p>
            <p>Switched: {{ dataSwitch }} </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Switch from './Switch.vue'

export default {
  data: () => ({
    userData: {
      email: '',
      password: '',
      age: 26
    },
    message: 'A new text',
    sendMail: [],
    gender: 'Male',
    selectedPriority: 'High',
    priorities: ['High', 'Medium', 'Low'],
    dataSwitch: true,
    isSubmitted: false,
  }),
  methods: {
    submitted() {
      this.isSubmitted = true
    }
  },
  components: {
    'app-switch': Switch,
  }
};
</script>

<style>
</style>
