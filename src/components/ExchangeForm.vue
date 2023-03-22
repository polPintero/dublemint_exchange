<template>
  <form>
    <div>
      <label>
        Currency
        <select v-model="firstCurrency">
          <option
            v-for="item in currenciesList"
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
          <template v-for="item in currenciesList">
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
import currenciesList from '@/currency'

export default {
  name: 'ExchangeForm',
  data() {
    return {
      currenciesList,
      firstCurrency: 'USD',
      targetCurrency: '',
      amount: 1,
      maxValue: 10000
    }
  },

  watch: {
    firstCurrency(value) {
      if (value === this.targetCurrency) this.targetCurrency = ''
    },
    amount(value, oldValue) {
      if (value > this.maxValue) this.amount = oldValue
    }
  },
  computed: {
    resultValue() {
      const target = this.currenciesList[this.targetCurrency]
      console.log(target)
      if (!target) return 0
      return target.toUSD * this.amount
    }
  }
}
</script>

<style></style>
