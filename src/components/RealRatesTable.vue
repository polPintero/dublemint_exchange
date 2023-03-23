<template>
  <form @submit.prevent class="real-rate">
    <fieldset class="real-rate__choice">
      <legend>Live Rate</legend>
      <table class="real-rate__table">
        <tbody>
          <tr>
            <td
              v-for="name in avialableList"
              :key="name"
              class="real-rate__choice__item"
            >
              <label>
                {{ name }}
                <input type="radio" v-model="radioValue" :value="name" />
              </label>
            </td>
          </tr>
          <tr v-for="(row, index) in showList" :key="index">
            <td v-for="item in row" :key="item.name">
              <div class="real-rate__table__cell">
                <span class="real-rate__table__cell__currency">{{
                  item.name
                }}</span>
                <span
                  class="real-rate__table__cell__rate"
                  :title="item.getCrossRateToCurrency(choicedCurrency) || '-'"
                  >{{
                    item.getCrossRateToCurrency(choicedCurrency) || '-'
                  }}</span
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </form>
</template>

<script>
import { enumCurrencies } from '@/currency'
import { splitArrOnSmallArr } from '@/utils'

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
    this.showList = splitArrOnSmallArr(this.showList)
  },
  computed: {
    choicedCurrency () {
      if (!this.radioValue) return false
      return this.currencies[this.radioValue]
    }
  }
}
</script>

<style lang="scss">
.real-rate {
  display: grid;
  grid-template-rows: 1fr max-content;
  width: 100%;
  padding: 0;
  background: linear-gradient(180deg, #2c2e2f 0%, #404142 100%);
  box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.3),
    inset 0px 2px 3px rgba(0, 0, 0, 0.5);

  legend {
    position: relative;
    transform: translateY(-10px);
    color: #eeffab;
    text-shadow: 0px 0px 8px rgba(146, 211, 0, 0.8);
  }

  &__choice {
    border: none;
    padding: 0;

    &__item {
      border-right: 3px solid #3d3c48;
      text-align: center;
      &:last-child {
        border: none;
      }

      label {
        display: block;
        width: 100%;
        cursor: pointer;
        input[type='radio'] {
          position: relative;
          &:checked:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, #b7dd18 0%, #4b9800 100%);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3),
              inset 0px 3px 1px rgba(255, 255, 255, 0.7);
            border-radius: 100%;
          }
        }
      }
    }
  }

  &__table {
    width: 100%;
    td {
      max-width: 120px;
    }
    &__cell {
      padding: var(--gap);
      display: flex;
      &__currency {
        margin-right: var(--gap);
      }

      &__rate {
        color: #50caff;
        text-shadow: 0px 0px 8px #50caff;

        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
