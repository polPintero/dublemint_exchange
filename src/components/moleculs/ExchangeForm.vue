<template>
  <form @submit.prevent class="exchange-form">
    <div class="exchange-form__base">
      <label class="exchange-form__item">
        <dropdown-comp
          v-model="firstCurrencySymbol"
          :list="currencies"
          valueKey="name"
        >
        </dropdown-comp>
      </label>
      <label>
        <input-number v-model="amount" :max-value="maxValue"></input-number>
      </label>
    </div>
    <div class="exchange-form__target">
      <label class="exchange-form__item">
        <dropdown-comp
          v-model="targetCurrency"
          :list="currencies"
          valueKey="name"
          placeholder="Select"
          :condition-visible="conditionVisible"
        >
        </dropdown-comp>
      </label>
      <span class="exchange-form__result">{{ resultValue }}</span>
    </div>
  </form>
</template>

<script>
import { enumCurrencies } from '@/currency'
import DropdownComp from '@/components/atoms/DropdownComp.vue'
import InputNumber from '@/components/atoms/InputNumber.vue'

export default {
  name: 'ExchangeForm',
  components: {
    DropdownComp,
    InputNumber
  },
  data () {
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
    firstCurrencySymbol (value) {
      if (value === this.targetCurrency) this.targetCurrency = ''
    }
  },
  computed: {
    resultValue () {
      const target = this.currencies[this.targetCurrency]
      const first = this.currencies[this.firstCurrencySymbol]
      if (!target) return '-'
      const crossRate = first.getCrossRateToCurrency(target)
      return crossRate ? (crossRate * this.amount).toFixed(2) : '-'
    }
  },
  methods: {
    conditionVisible (item) {
      return item.name !== this.firstCurrencySymbol
    }
  }
}
</script>

<style lang="scss">
.exchange-form {
  padding: var(--gap-double);
  border-radius: var(--border-radius);
  @include blockShadowPrimary;

  &__base {
    margin-block-end: var(--gap-double);
    display: flex;
    gap: var(--gap-double);
  }

  &__target {
    display: flex;
    gap: var(--gap-double);
  }

  &__item {
    width: 120px;
  }

  &__result {
    align-self: center;
    margin-left: var(--gap);
  }
}
</style>
