<template>
  <app-layout app>
    <v-container>

      <v-card class="mb-3 mx-auto transparent" flat @click="goHome()">
        <v-card-text class="pa-0">
          <h1 class="title md-2 font-weight-bold">Painel</h1>
          <div class="subheading font-weight-bold grey--text m-2">Acompanhe aqui sua saúde financeira</div>
        </v-card-text>
      </v-card>

      <v-layout align-center v-bind="binding" wrap justify-center class="px-0" fill-height>
        <v-flex xs12 md4> <balance-card /> </v-flex>

        <v-flex xs12 md4> <expenses-card /> </v-flex>

        <v-flex xs12 md4> <revenues-card /> </v-flex>
      </v-layout>

    </v-container>
  </app-layout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'
import BalanceCard from '../components/BalanceCard.vue'
import ExpensesCard from '../components/ExpensesCard.vue'
import RevenuesCard from '../components/RevenuesCard.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    }
  },
  components: {
    'app-layout': AppLayout,
    'balance-card': BalanceCard,
    'expenses-card': ExpensesCard,
    'revenues-card': RevenuesCard
  }
}
</script>

<style scoped>
</style>
