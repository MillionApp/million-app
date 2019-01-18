<template>
  <app-layout>
    <v-container>
      <h1>There will be a great app soon</h1>
      <router-link to="/">Home</router-link>
    </v-container>
  </app-layout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'

export default {
  components: {
    'app-layout': AppLayout
  }
}
</script>

<style scoped>

</style>
