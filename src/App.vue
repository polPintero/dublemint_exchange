<template>
  <button-comp class="app__reload-btn" label="reload rate"></button-comp>
  <exchange-form class="app__exchange-form"></exchange-form>
  <real-rates-table></real-rates-table>
</template>

<script>
import ExchangeForm from './components/ExchangeForm.vue'
import RealRatesTable from './components/RealRatesTable.vue'
import ButtonComp from './components/ButtonComp.vue'

export default {
  name: 'App',
  components: {ExchangeForm, RealRatesTable, ButtonComp}
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

.app {
  &__exchange-form {
    margin-block-end: calc(var(--gap-double) * 2);
  }
  &__reload-btn {
    align-self: flex-end;
    margin-block-end: var(--gap-double);
    text-transform: capitalize;
    font-size: 0.8rem;
  }
}
</style>
