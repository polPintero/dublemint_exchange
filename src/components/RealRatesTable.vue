<template>
  <form  @submit.prevent>
    <fieldset>
      <legend>Choice Currency</legend>
      <label v-for="name in avialableList" :key="name">
        {{ name }}
        <input type="radio" v-model="radioValue" :value="name" />
      </label>
    </fieldset>
    <div>
      <table>
        <tbody>
          <tr v-for="item in showList" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.getCrossRateToCurrency(choicedCurrency) || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
import { enumCurrencies } from '@/currency'

export default {
  name: 'RealRatesTable',
  data () {
    return {
      currencies: this.$store.state.currencies,
      avialableList: [
        enumCurrencies.USD,
        enumCurrencies.EUR,
        enumCurrencies.UAH
      ],
      showList: [],
      radioValue: enumCurrencies.USD
    }
  },
  created () {
    this.showList = [
      this.currencies[enumCurrencies.USD],
      this.currencies[enumCurrencies.EUR],
      this.currencies[enumCurrencies.UAH],
      this.currencies[enumCurrencies.BTC],
      this.currencies[enumCurrencies.ETH]
    ]
  },
  computed: {
    choicedCurrency () {
      if (!this.radioValue) return false
      return this.currencies[this.radioValue]
    }
  }
}
</script>

<style></style>
