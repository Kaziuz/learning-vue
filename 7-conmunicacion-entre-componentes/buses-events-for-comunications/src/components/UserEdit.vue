<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ myAge }} </p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: ['myAge'],
  methods: {
    editAge() {
      this.myAge = 30
      // this.$emit('ageWasEdited', this.myAge) // emito el evento de child to parent
      //eventBus.$emit('ageWasEdited', this.myAge) // emito el evento al bus de eventos
      eventBus.changeAge(this.myAge) // emito el evento desde el bus de eventos
    }
  },
}
</script>
