<template>
  <div>
    <div class="form-group">
      <label>First name</label>
      <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)" />
    </div>
    <div class="form-group">
      <label>Last name</label>
      <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
      value: String
    },
    data: () => ({
      name: '',
    }),
    methods: {
      nameChanged(isFirst, event) {
        if (isFirst) {
          this.name = `${event.target.value} ${this.lastName}`
        } else {
          this.name = `${this.firstName} ${event.target.value}`
        }
        this.value = this.name
        this.$emit('input', this.value)
      }
    },
    computed: {
      firstName() {
        return this.value.split(' ')[0]; // parto el array por espacio en blanco y lo devuelvo
      },
      lastName() {
        return this.value.split(' ')[1]; // parto el array por espacio en blanco y lo devuelvo
      },
    }
};
</script>

<style scoped>
</style>