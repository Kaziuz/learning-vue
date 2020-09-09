<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
              class="list-group-item"
              v-for="index in serves"
              :key="index"
              @click="clikedServer(index)"
            >
              Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  data:() => ({
    serves: 5
  }),
  methods: {
    clikedServer(index) {
      eventBus.changeStatus(index)
    }
  }
}
</script>

<style>

</style>
