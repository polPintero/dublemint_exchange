<template>
  <form>
    <div>
      <label>
        Currency
        <select v-model="firstCurrency">
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
              v-if="item.name !== firstCurrency"
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
import currencies, { enumCurrencies } from '@/currency'

export default {
  name: 'ExchangeForm',
  data () {
    return {
      currencies,
      firstCurrency: enumCurrencies.USD,
      targetCurrency: '',
      amount: 1,
      maxValue: 10000
    }
  },

  watch: {
    firstCurrency (value) {
      if (value === this.targetCurrency) this.targetCurrency = ''
    },
    amount (value, oldValue) {
      if (value > this.maxValue) this.amount = oldValue
    }
  },
  computed: {
    resultValue () {
      const target = this.currencies[this.targetCurrency]
      if (!target) return 0
      return target.toUSD * this.amount
    }
  }
}
</script>

<style></style>
