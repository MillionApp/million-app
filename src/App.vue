<template>
  <v-app>
    <v-content>
      <router-view/>

      <v-footer
        height="auto"
        color="primary"
        app
      >

        <v-flex
          primary
          py-3
          text-xs-center
          white--text
          xs12
        >
          Code for a United World | <strong @click="goHome()">MillionApp</strong> | &copy;2019
        </v-flex>

      </v-footer>

    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
