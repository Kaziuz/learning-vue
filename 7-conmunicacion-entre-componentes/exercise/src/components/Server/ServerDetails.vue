<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently {{ details }}</p>
    </div>

</template>

<script>
import { eventBus } from '../../main'
export default {
  data: () => ({
    details: 'not updated'
  }),
  created () {
    eventBus.$on('changeStatusServer', status => {
      if (status === 1 || status === 2 || status === 3 ||
      status === 4 || status === 5) {
        this.details = `updated server ${status}`
      }
    })
  }
}
</script>

<style>

</style>
