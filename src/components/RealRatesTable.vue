<template>
  <form>
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
            <td>{{ item.getRateToCurrency(choicedCurrency) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
import currencies, { enumCurrencies } from '@/currency'

export default {
  name: 'RealRatesTable',
  data () {
    return {
      currencies,
      avialableList: [
        enumCurrencies.USD,
        enumCurrencies.EUR,
        enumCurrencies.UAH
      ],
      showList: [
        currencies[enumCurrencies.USD],
        currencies[enumCurrencies.EUR],
        currencies[enumCurrencies.UAH],
        currencies[enumCurrencies.BTC],
        currencies[enumCurrencies.ETH]
      ],
      radioValue: enumCurrencies.USD
    }
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
