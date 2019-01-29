<template>
  <div class="pa-3">
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`mt-3 mx-auto elevation-${hover ? 12 : 2}`"
        @click="goToRevenues(12)"
        max-width="350"
      >

        <v-sheet
          class="v-sheet--offset mx-auto px-2"
          color="green lighten-1"
          elevation="12"
          max-width="calc(100% - 32px)"
        >

          <v-sparkline
            :value="lastRevenues"
            color="white"
            line-width="2"
            padding="16"
            smooth
          >
            <template
              slot="label"
              slot-scope="item"
            >
            R$ {{ item.value }}
            </template>
          </v-sparkline>

        </v-sheet>

        <v-card-text class="pt-0">

          <div class="title font-weight-light m-2">Receitas</div>
          <div class="subheading font-weight-light grey--text text-xs-right">{{ currentRevenueAmount }}</div>
          <v-divider class="my-2"></v-divider>

          <v-icon
            class="mr-2"
            small
          >
            access_time
          </v-icon>

            <span class="caption grey--text font-weight-light">Atualizado em {{ new Date().toLocaleString() }}</span>

        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentRevenueAmount: 'R$ 2.340,90',
      lastRevenues: []
    }
  },
  created () {
    this.lastRevenues = this.$store.state.lastRevenues.flatMap(function (entry) { return entry.amount })
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
