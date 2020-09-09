<template>
  <div class="container">
    <form v-if="!submitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <FullName v-model="fullName" @input="updateFullName($event)" ></FullName>
          <div class="form-group">
            <label>Mail</label>
            <input type="text" class="form-control" v-model="email">
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <div class="form-group">
            <label>
              <input type="radio" value="yes" v-model="storeData" /> Yes
            </label>
            <label>
              <input type="radio" value="no" v-model="storeData" /> No
            </label>
          </div>
          <button class="btn btn-primary" type="submit" @click.prevent="submitted = true">send</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }} </p>
            <p>Store in Database?: {{ storeData }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue'
export default {
  data: () => ({
    fullName: 'Johnny sepúlveda',
    email: '',
    password: '',
    storeData: 'yes',
    submitted: false
  }),
  methods: {
    updateFullName (event) {
      this.fullName = event
    }
  },
  components: {
    FullName: FullName
  }
};
</script>

<style>
</style>
