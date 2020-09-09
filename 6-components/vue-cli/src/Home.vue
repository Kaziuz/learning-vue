<template>
  <div>
    <ServerStatus v-for="server in 5" :key="`${server}-1`"></ServerStatus>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'ServerStatus': ServerStatus
    }
  }
</script>

<style>

</style>
