import Vue from 'vue'

Vue.mixin({
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goToDashboard (userId) {
      this.$router.push({ name: 'dashboard', params: { id: userId } })
    },
    goToExpenses (userId) {
      this.$router.push({ name: 'expenses', params: { id: userId } })
    },
    goToRevenues (userId) {
      this.$router.push({ name: 'revenues', params: { id: userId } })
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.substr(0, 10).split('-')
      return `${day}/${month}/${year}`
    }
  }
})
