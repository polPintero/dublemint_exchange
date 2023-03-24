<template>
  <button-comp
    class="app__reload-btn"
    label="reload rate"
    :is-loading="isLoading"
    :disabled="isDisabled"
    @click="reloadRates"
    :data-seconds="seconds + 's'"
    :delay="seconds > 0"
  ></button-comp>
  <exchange-form class="app__exchange-form"></exchange-form>
  <real-rates-table></real-rates-table>
</template>

<script>
import ExchangeForm from '@/components/moleculs/ExchangeForm.vue'
import RealRatesTable from '@/components/moleculs/RealRatesTable.vue'
import ButtonComp from './components/atoms/ButtonComp.vue'

export default {
  name: 'App',
  components: { ExchangeForm, RealRatesTable, ButtonComp },
  data () {
    return {
      isLoading: false,
      isDisabled: false,
      seconds: 0,
      timeout: null
    }
  },
  methods: {
    async reloadRates () {
      this.isLoading = true
      this.isDisabled = true
      await this.$store.dispatch('getData')
      this.isLoading = false
      this.seconds = 5
      this.loop()
    },
    loop () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        --this.seconds
        if (this.seconds === 0) {
          this.isDisabled = false
          return
        }
        this.loop()
      }, 1000)
    }
  }
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
    margin-block-end: calc(var(--gap-double) * 4);
  }
  &__reload-btn {
    position: relative;
    align-self: flex-end;
    margin-block-end: var(--gap-double);
    text-transform: capitalize;
    font-size: 0.8rem;

    &[delay='true'] {
      .btn {
        padding-right: calc(var(--gap-double) * 2);
      }
      &:after {
        content: attr(data-seconds);
        display: block;
        position: absolute;
        top: 50%;
        right: 10px;
        font-size: 1rem;
        transform: translateY(-50%);
        @include txtShadowTxtPrimary;
      }
    }
  }
}
</style>
