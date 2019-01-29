<template>
  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <v-img
            :src="require('../assets/logo.svg')"
            width="64"
            height="64"
          ></v-img>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat to="/users/12/dashboard">Painel</v-btn> |
      <v-btn flat to="/users/12/expenses">Despesas</v-btn> |
      <v-btn flat to="/users/12/revenues">Receitas</v-btn>
    </v-toolbar>

    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>

</style>
