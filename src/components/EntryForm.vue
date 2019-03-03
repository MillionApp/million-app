<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-btn slot="activator" :color="binding ? binding.color || 'primary' : 'primary'" dark class="mb-2" v-bind="binding">
      <v-icon v-if="icon">add</v-icon>
      <span v-else>Nova Entrada</span>
    </v-btn>
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
              <v-select
                :items="categories"
                item-text="name"
                item-value="id"
                v-model="editedEntry.category_id"
                label="Categoria"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm6>
              <div class="v-input v-text-field theme--light">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <div class="v-text-field__slot">
                      <money
                         v-model="editedEntry.amount"
                         v-bind="money"
                         label="Valor"
                         ></money>
                    </div>
                  </div>
                </div>
              </div>
            </v-flex>

            <v-flex xs12 sm6>
              <v-dialog
                v-model="date_modal"
                persistent
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="computedFormattedDate"
                  label="Data"
                  prepend-icon="event"
                  readonly
                ></v-text-field>

                <v-date-picker
                  v-model="editedEntry.made_at"
                  scrollable
                  @input="date_modal = false"
                ></v-date-picker>
              </v-dialog>
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
</template>

<script>
export default {
  props: {
    categories: Array,
    entryType: String,
    binding: Object,
    icon: Boolean
  },
  data () {
    return {
      dialog: false,
      date_modal: false,
      formattedDate: this.formatDate(new Date().toISOString().substr(0, 10)),
      editedIndex: -1,
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
        prefix: 'R$ ',
        masked: false
      },
      defaultEntry: {
        id: '',
        description: '',
        amount: 0.0,
        made_at: new Date().toISOString().substr(0, 10),
        category_id: ''
      },
      editedEntry: {
        id: '',
        description: '',
        amount: 0.0,
        made_at: new Date().toISOString().substr(0, 10),
        category_id: ''
      }
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nova entrada' : 'Editar entrada'
    },
    computedFormattedDate () {
      return this.formatDate(this.editedEntry.made_at)
    }
  },
  watch: {
    'editedEntry.made_at' (val) {
      this.formattedDate = this.formatDate(val)
    }
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedEntry = Object.assign({}, this.defaultEntry)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        // TODO: Implementar método de edição
        // Object.assign(this.entries[this.editedIndex], this.editedEntry)
      } else {
        this.$store.dispatch('createEntry', {
          operation: this.entryType,
          entry: this.editedEntry
        })
      }
      this.close()
    },
    parseDate (date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>
