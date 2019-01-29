<template>
  <div class="pa-3">
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`mt-3 mx-auto elevation-${hover ? 12 : 2}`" @click="goToDashboard(12)" max-width="350">

        <v-sheet
          class="v-sheet--offset mx-auto px-2"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
        >

          <v-sparkline
            :labels="labels"
            :value="values"
            color="white"
            line-width="2"
            padding="16"
            smooth
          ></v-sparkline>

        </v-sheet>

        <v-card-text class="pt-0">

          <div class="title font-weight-light m-2">Saldo</div>

          <div class="subheading font-weight-light grey--text text-xs-right"> {{ currentBalance }}</div>

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
      labels: [],
      values: [],
      currentBalance: 'R$ 8.090,98'
    }
  },
  created () {
    this.labels = Object.keys(this.$store.state.lastBalances)
    this.values = Object.values(this.$store.state.lastBalances)
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
