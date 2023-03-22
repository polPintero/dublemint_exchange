<template>
  <form @submit.prevent>
    <div>
      <label>
        Currency
        <select v-model="firstCurrencySymbol">
          <option
            v-for="item in currencies"
            :value="item.name"
            :key="item.name"
          >
            {{ item.name }}
          </option>
        </select>
      </label>
      <label>
        Enter amount
        <input type="number" :max="maxValue" min="1" v-model="amount" />
      </label>
    </div>
    <div>
      <label>
        CurrencyTarget
        <select v-model="targetCurrency">
          <template v-for="item in currencies">
            <option
              v-if="item.name !== firstCurrencySymbol"
              :value="item.name"
              :key="item.name"
            >
              {{ item.name }}
            </option>
          </template>
        </select>
      </label>
      <span>{{ resultValue }}</span>
    </div>
  </form>
</template>

<script>
import {enumCurrencies} from '@/currency'

export default {
  name: 'ExchangeForm',
  data() {
    return {
      currencies: this.$store.state.currencies,
      firstCurrencySymbol: enumCurrencies.USD,
      targetCurrency: '',
      amount: 1,
      maxValue: 10000
    }
  },
  created() {
    console.log(this.currencies)
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
      if (!target) return 0
      // const crossRate = target.getCrossRateToCurrency(first)
      const crossRate = first.getCrossRateToCurrency(target)
      console.log(crossRate)
      return (crossRate * this.amount).toFixed(4)
    }
  }
}
</script>

<style></style>
