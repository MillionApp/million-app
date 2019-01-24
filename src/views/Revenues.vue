<template>
  <app-layout>
    <v-container>
      <v-card class="mb-3 mx-auto transparent" flat @click="goToDashboard(12)">
        <v-card-text class="pa-0">
          <h1 class="title md-2 font-weight-bold">Receitas</h1>
          <div class="subheading font-weight-bold grey--text m-2">Insira e acompanhe seus salários, rendimento, bonús e mais aqui</div>
        </v-card-text>
      </v-card>

      <v-layout
        class="primary elevation-5"
        v-bind="binding"
        justify-center
        align-center
        fill-height
        wrap
      >
        <v-flex xs12>
          <entry-table
            title="Receitas"
            :entries="revenues"
          ></entry-table>
        </v-flex>
      </v-layout>

    </v-container>
  </app-layout>
</template>

<script>
import AppLayout from '../components/AppLayout.vue'
import EntryTable from '../components/EntryTable.vue'

export default {
  data () {
    return {
      revenues: [
        {
          id: '8ed96fd6-af90-49a2-9463-b88a51e0822d',
          amount: 2423.72,
          made_at: '2019-01-07',
          sub_category_id: '8cafd747-e695-400e-a496-a83896e1bb74',
          description: 'Locaweb referente a dezembro de 2018'
        },
        {
          id: '166a864e-88cd-43b6-a86f-c67fe26f1dc1',
          amount: 6324.12,
          made_at: '2019-01-24',
          sub_category_id: '2325abeb-9d9d-46a4-9ab1-db713995e135',
          description: 'Locaweb com abono de 10 dias'
        },
        {
          id: '503510b9-070d-4ff7-8a24-0ea1abef2e75',
          amount: 2152.45,
          made_at: '2018-12-20',
          sub_category_id: '4b48721f-64c8-45e5-8bf4-bd502085e926',
          description: '2º parcela da Locaweb'
        },
        {
          id: 'ce32695f-343b-4980-a8db-9b5fe67e9de4',
          amount: 1572.24,
          made_at: '2018-11-20',
          sub_category_id: '8cafd747-e695-400e-a496-a83896e1bb74',
          description: 'Adiantamento referente a novembro Locaweb'
        },
        {
          id: '8ad1b49c-673d-44a9-89e1-a30941e2be7a',
          amount: 2512.53,
          made_at: '2018-11-30',
          sub_category_id: '4b48721f-64c8-45e5-8bf4-bd502085e926',
          description: '1º parcela da Locaweb'
        },
        {
          id: 'e2886eb3-a02d-4293-a995-68503ad4330d',
          amount: 2456.42,
          made_at: '2018-11-07',
          sub_category_id: '8cafd747-e695-400e-a496-a83896e1bb74',
          description: 'Locaweb referente a outubro'
        }
      ]
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
    'entry-table': EntryTable
  }
}
</script>

<style scoped>

</style>
