<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="search"
        label="Busca"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-toolbar flat color="white">
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-divider class="mx-2" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-entry-form :categories="categories" :entry-type="entryType"></v-entry-form>

    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="entries"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.description }}</td>
        <td class="text-xs_right">{{ categoryName(props.item.category_id) }}</td>
        <td class="text-xs_right">{{ numberToCurrency(props.item.amount) }}</td>
        <td class="text-xs_right">{{ formatDate(props.item.made_at) }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Sua busca por {{ search }} não retornou resultados.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import EntryForm from './EntryForm'

export default {
  props: {
    entryType: String,
    entries: Array
  },
  data () {
    return {
      categories: [],
      search: '',
      headers: [
        { text: 'Descrição', value: 'description', sortable: true, align: 'left' },
        { text: 'Envelope', value: 'category_id', sortable: true },
        { text: 'Valor (R$)', value: 'amount', sortable: true },
        { text: 'Data', value: 'made_at', sortable: true }
      ]
    }
  },
  created () {
    this.categories = this.$store.state.categories
  },
  computed: {
    title () {
      return this.entryType === 'expense' ? 'Despesas' : 'Receitas'
    }
  },
  methods: {
    categoryName (categoryId) {
      var found = this.categories.find(function (category) {
        return category.id === categoryId
      })

      return found.name
    },
    numberToCurrency (number) {
      return Number(number).toFixed(2).replace('.', ',')
    }
  },
  components: {
    'v-entry-form': EntryForm
  }
}
</script>

<style scoped>
</style>
