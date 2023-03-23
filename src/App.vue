<template>
  <exchange-form class="app__exchange-form"></exchange-form>
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

<style lang="scss">
@import './assets/main.scss';
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app__exchange-form {
  margin-block-end: calc(var(--gap-double) * 2);
}
</style>
