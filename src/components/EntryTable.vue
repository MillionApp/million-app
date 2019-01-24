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
      <v-dialog v-model="dialog" max-width="600px">
        <v-btn slot="activator" color="primary" dark class="mb-2">Nova entrada</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12 sm6>
                  <v-text-field v-model="editedEntry.description" label="Descrição"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="editedEntry.sub_category.id" label="Categoria"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="editedEntry.amount" label="Valor"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="editedEntry.made_at" label="Data"></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error lighten-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="primary darken-1" flat @click="save">Salvar</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="entries"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.description }}</td>
        <td class="text-xs_right">{{ subCategoryName(props.item.sub_category_id) }}</td>
        <td class="text-xs_right">{{ props.item.amount }}</td>
        <td class="text-xs_right">{{ props.item.made_at }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Sua busca por {{ search }} não retornou resultados.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    entries: Array
  },
  data () {
    return {
      dialog: false,
      editedIndex: -1,
      defaultEntry: {
        id: '',
        description: '',
        amount: 0.0,
        made_at: new Date().toLocaleString(),
        sub_category: {
          id: '',
          name: ''
        }
      },
      editedEntry: {
        id: '',
        description: '',
        amount: 0.0,
        made_at: new Date().toLocaleString(),
        sub_category: {
          id: '',
          name: ''
        }
      },
      search: '',
      headers: [
        { text: 'Descrição', value: 'description', sortable: true, align: 'left' },
        { text: 'Envelope', value: 'sub_category', sortable: true },
        { text: 'Valor (R$)', value: 'amount', sortable: true },
        { text: 'Data', value: 'made_at', sortable: true }
      ]
    }
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.entries[this.editedIndex], this.editedItem)
      } else {
        this.entries.push(this.editedItem)
      }
      this.close()
    },
    subCategoryName (subCategoryId) {
      var found = this.subCategories.find(function (subCategory) {
        return subCategory.id === subCategoryId
      })

      return found.name
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nova entrada' : 'Editar entrada'
    },
    subCategories () {
      return this.$store.state.sub_categories
    }
  }
}
</script>

<style scoped>
</style>
