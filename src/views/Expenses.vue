<template>
  <app-layout>
    <v-container>
      <v-card class="mb-3 mx-auto transparent" flat @click="goToDashboard(12)">
        <v-card-text class="pa-0">
          <h1 class="title md-2 font-weight-bold">Despesas</h1>
          <div class="subheading font-weight-bold grey--text m-2">Veja para onde está indo seu dinheiro</div>
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
            title="Despesas"
            :entries="expenses"
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
      expenses: [
        {
          id: '87070298-0a94-473d-b05a-1cda87e76029',
          amount: 62.49,
          made_at: '2018-11-02',
          sub_category_id: 'feb4718f-dbbd-4c63-8cf4-63edd6acc922',
          description: 'Remédios, creme hidratante e desodorantes'
        },
        {
          id: '9c2713ad-888e-491e-91f7-4051f09bbc79',
          amount: 8.98,
          made_at: '2018-11-03',
          sub_category_id: 'feb4718f-dbbd-4c63-8cf4-63edd6acc922',
          description: 'Lata de balas Valda'
        },
        {
          id: 'ba4d7854-0a3a-45ce-a41e-796bc02657cc',
          amount: 24.76,
          made_at: '2018-11-01',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Dia %'
        },
        {
          id: '41432e4a-a3e6-4741-b417-bcf4306e088f',
          amount: (2 * 69.90),
          made_at: '2018-11-14',
          sub_category_id: '3674c036-1730-4132-9aab-57841d4d3df7',
          description: 'Rodízio no Sushi Naoto'
        },
        {
          id: '872f529f-19b3-4be5-a311-678773b4c01d',
          amount: 21.45,
          made_at: '2018-11-22',
          sub_category_id: 'feb4718f-dbbd-4c63-8cf4-63edd6acc922',
          description: 'Shampoo'
        },
        {
          id: '1a1bd1b6-8a7f-46ab-8136-d4894cca9d96',
          amount: 32.50,
          made_at: '2018-11-08',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Temperos e legumes'
        },
        {
          id: '463143c7-2225-44db-a9c8-2ea39cd960bd',
          amount: 20.0,
          made_at: '2018-11-10',
          sub_category_id: '8fba6893-c3b7-4e48-bd53-f404e2984475',
          description: 'Recarga de bilhete único'
        },
        {
          id: '5669ad34-36f7-46a6-9f27-8e1b50427709',
          amount: 119.90,
          made_at: '2018-11-26',
          sub_category_id: '1e5b6e67-69f4-4bbc-9faf-2ff2fbffbb0a',
          description: 'Camisa social para casamento'
        },
        {
          id: '5f12512a-c8cc-4a68-b331-3eb009d0604c',
          amount: 39.70,
          made_at: '2018-11-30',
          sub_category_id: '1e5b6e67-69f4-4bbc-9faf-2ff2fbffbb0a',
          description: 'Meias e cuecas'
        },
        {
          id: '1bcd7248-b420-4216-b54c-077d739e55e1',
          amount: 149.90,
          made_at: '2018-12-01',
          sub_category_id: '1e5b6e67-69f4-4bbc-9faf-2ff2fbffbb0a',
          description: 'Vestido de presente'
        },
        {
          id: '276175ef-1404-4f68-8174-93e474526d76',
          amount: 29.70,
          made_at: '2018-12-12',
          sub_category_id: '108ca15f-604c-44fb-b0ed-c752051eec0e',
          description: 'Água sanitária e sabão em pó'
        },
        {
          id: 'b7243c1d-2810-483f-a0b2-5d07e0eb1015',
          amount: (4 * 1.29),
          made_at: '2018-12-04',
          sub_category_id: '108ca15f-604c-44fb-b0ed-c752051eec0e',
          description: 'Detergente'
        },
        {
          id: '289db8f7-a489-4e43-bce2-5ab986b67265',
          amount: 57.89,
          made_at: '2018-12-12',
          sub_category_id: '108ca15f-604c-44fb-b0ed-c752051eec0e',
          description: 'Coisas para limpeza de casa'
        },
        {
          id: '586e9eea-0896-4523-8f65-df62477861b9',
          amount: 146.90,
          made_at: '2018-12-13',
          sub_category_id: '8185e71d-22b6-43b3-961e-b7bccf89748d',
          description: 'Aluguel de carro para ir em Vargem Grande Paulista'
        },
        {
          id: 'e32ee7ea-70cb-4cac-96cc-d8146169f1b2',
          amount: 1543.0,
          made_at: '2018-12-22',
          sub_category_id: '611a3f2a-8be2-43b4-b2bc-e9441b9355e6',
          description: 'Apto Macapá 32 referente a novembro'
        },
        {
          id: 'e6d74d6b-82e4-43ec-900b-b6e804051590',
          amount: 53.49,
          made_at: '2018-12-22',
          sub_category_id: '4137cd2a-5832-48fa-8836-3faaf127f93f',
          description: 'Conta de luz'
        },
        {
          id: 'dba5fbb7-bd66-4635-9d19-8d71479ebc8c',
          amount: 116.89,
          made_at: '2018-12-23',
          sub_category_id: '4137cd2a-5832-48fa-8836-3faaf127f93f',
          description: 'Conta de gás'
        },
        {
          id: '46478479-2d06-4cd7-b3e8-62f2336cb0fd',
          amount: 105.10,
          made_at: '2018-12-24',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Compras para ceia de Natal'
        },
        {
          id: '0f90ed6b-f9bd-4580-9b5c-eec8583920d7',
          amount: 42.30,
          made_at: '2018-12-25',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Açaí e lanches no Dia %'
        },
        {
          id: '353e008e-3937-4b2b-beda-6e64d57668c3',
          amount: 40.0,
          made_at: '2018-12-25',
          sub_category_id: '8fba6893-c3b7-4e48-bd53-f404e2984475',
          description: 'Recarga de bilhete único'
        },
        {
          id: 'd030712e-2073-4f32-b1eb-95a7bb33c901',
          amount: 200.0,
          made_at: '2018-15-25',
          sub_category_id: '9f526728-17f2-4ed6-8d79-c2443eea6f65',
          description: 'Consulta com oftalmologista'
        },
        {
          id: '7d0cd5e2-3f88-48e4-a838-39f6a2467473',
          amount: 349.0,
          made_at: '2018-12-26',
          sub_category_id: 'a9271049-5e10-4f74-b99f-1a2ae2940099',
          description: 'Caixa de som bluetooth JBL'
        },
        {
          id: 'd30fa15e-e071-4870-bd18-c9dc72854122',
          amount: 29.80,
          made_at: '2018-12-27',
          sub_category_id: 'a9271049-5e10-4f74-b99f-1a2ae2940099',
          description: 'Cabo HDMI'
        },
        {
          id: '0c4bcd94-b27e-4e30-a5da-f72bc2ae12d1',
          amount: 99.90,
          made_at: '2018-12-29',
          sub_category_id: 'a9271049-5e10-4f74-b99f-1a2ae2940099',
          description: 'Transformador de elericidade 220V para 110V'
        },
        {
          id: '882669c2-1fad-4179-a9e2-f4e66d26ae0b',
          amount: 20.0,
          made_at: '2018-12-29',
          sub_category_id: '8defbdb9-48ee-4d09-814f-df305dd52911',
          description: 'Faixa para carregar celular no braço'
        },
        {
          id: 'ce657698-0b6d-4c68-ae95-65c56993cad0',
          amount: 50.0,
          made_at: '2018-12-30',
          sub_category_id: '8fba6893-c3b7-4e48-bd53-f404e2984475',
          description: 'Recarga de bilhete único para Vale'
        },
        {
          id: '89191869-5f96-465c-b68d-66c9cd9bb979',
          amount: 39.90,
          made_at: '2019-01-02',
          sub_category_id: '8defbdb9-48ee-4d09-814f-df305dd52911',
          description: 'Carteira na Miniso'
        },
        {
          id: '6d2c1c51-a5cd-46f8-a9d4-d44b8cf2eb29',
          amount: 99.79,
          made_at: '2019-01-03',
          sub_category_id: '8defbdb9-48ee-4d09-814f-df305dd52911',
          description: 'Mi Band 3 no Aliexpress'
        },
        {
          id: '4dd6cc02-5eaa-4da0-af39-e02294b42ed2',
          amount: 20.0,
          made_at: '2019-01-04',
          sub_category_id: '8fba6893-c3b7-4e48-bd53-f404e2984475',
          description: 'Recarga de bilhete único'
        },
        {
          id: 'b443f229-f10e-4a9e-949b-61a288129fe0',
          amount: 18.0,
          made_at: '2019-01-12',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Pastel e garapa na feira do condomínio'
        },
        {
          id: '2e8006c1-ad3a-491a-b94c-cf23e25b662e',
          amount: 17.85,
          made_at: '2019-01-12',
          sub_category_id: '2695b330-6cdf-43c4-86da-5e616f31e939',
          description: 'Coisa para café da manhã no Pão de açucar minuto'
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
