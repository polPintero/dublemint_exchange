<template>
  <form @submit.prevent class="exchange-form">
    <div class="exchange-form__base">
      <label class="exchange-form__base__item">
        <dropdown-comp
          v-model="firstCurrencySymbol"
          :list="currencies"
          valueKey="name"
        >
        </dropdown-comp>
      </label>
      <label class="exchange-form__base__item">
        <input-number v-model="amount"></input-number>
      </label>
    </div>
    <div>
      <label>
        <dropdown-comp
          v-model="targetCurrency"
          :list="currencies"
          valueKey="name"
          placeholder="Select"
          :condition-visible="conditionVisible"
        >
        </dropdown-comp>
      </label>
      <span>{{ resultValue }}</span>
    </div>
  </form>
</template>

<script>
import {enumCurrencies} from '@/currency'
import DropdownComp from './DropdownComp.vue'
import InputNumber from './InputNumber.vue'

export default {
  name: 'ExchangeForm',
  components: {
    DropdownComp,
    InputNumber
  },
  data() {
    return {
      enumCurrencies,
      currencies: this.$store.state.currencies,
      firstCurrencySymbol: enumCurrencies.USD,
      targetCurrency: enumCurrencies.EUR,
      amount: 1,
      maxValue: 10000
    }
  },
  watch: {
    firstCurrencySymbol(value) {
      if (value === this.targetCurrency) this.targetCurrency = ''
    },
    amount(value, oldValue) {
      if (value > this.maxValue) this.amount = oldValue
    }
  },
  computed: {
    resultValue() {
      const target = this.currencies[this.targetCurrency]
      const first = this.currencies[this.firstCurrencySymbol]
      if (!target) return '-'
      const crossRate = first.getCrossRateToCurrency(target)
      return crossRate ? (crossRate * this.amount).toFixed(4) : '-'
    }
  },
  methods: {
    conditionVisible(item) {
      return item.name !== this.firstCurrencySymbol
    }
  }
}
</script>

<style lang="scss">
.exchange-form {
  padding: var(--gap-double);
  border-radius: var(--border-radius);
  // box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  background: linear-gradient(180deg, #2c2e2f 0%, #404142 100%);
  box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.3),
    inset 0px 2px 3px rgba(0, 0, 0, 0.5);

  &__base {
    margin-block-end: var(--gap-double);
    display: flex;
    gap: var(--gap-double);
  }
}
</style>
