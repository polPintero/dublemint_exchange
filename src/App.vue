<template>
  <exchange-form></exchange-form>
  <real-rates-table></real-rates-table>
</template>

<script>
import ExchangeForm from './components/ExchangeForm.vue'
import RealRatesTable from './components/RealRatesTable.vue'

export default {
  name: 'App',
  components: { ExchangeForm, RealRatesTable }
}
</script>

<style lang="scss"></style>
