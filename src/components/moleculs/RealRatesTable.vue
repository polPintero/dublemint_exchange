<template>
  <form @submit.prevent class="real-rate">
    <fieldset class="real-rate__choice">
      <legend>Live Rate</legend>
      <button-comp
        label="Add"
        class="real-rate__add-btn"
        @click="showModal = !showModal"
      >
        <template #after>
          <IconComp name="PlusIconComp" class="dropdown__chevron"></IconComp>
        </template>
      </button-comp>
      <table class="real-rate__table">
        <tbody>
          <tr>
            <td
              class="real-rate__choice__item"
              v-for="name in avialableList"
              :key="name"
            >
              <InputRadio
                v-model="radioValue"
                :list="[name]"
                name="live-rate"
              ></InputRadio>
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
                  :up="item.checkRateUp(choicedCurrency)"
                  >{{
                    item.getCrossRateToCurrency(choicedCurrency).toFixed(2) || '-'
                  }}</span
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
    <modal-comp :show="showModal" @close="closeModalWindow">
      <template #header>
        <span>Select Extra Currency</span>
      </template>
      <template #body>
        <InputRadio
          v-model="extraCurrency"
          :list="listExtraCurrency"
          name="extra-currency"
        ></InputRadio>
      </template>
      <template #footer>
        <button-comp label="Ok" @click="closeModalWindow"></button-comp>
      </template>
    </modal-comp>
  </form>
</template>

<script>
import { enumCurrencies, defaultCurrencies } from '@/currency'
import { splitArrOnSmallArr } from '@/utils'
import ButtonComp from '@/components/atoms/ButtonComp.vue'
import InputRadio from '@/components/atoms/InputRadio.vue'
import ModalComp from '@/components/atoms/ModalComp.vue'

import IconComp, { PlusIconComp } from '@/components/atoms/IconsVue'

export default {
  name: 'RealRatesTable',
  components: {
    InputRadio,
    ModalComp,
    ButtonComp,
    IconComp,
    /* eslint-disable vue/no-unused-components */
    PlusIconComp
  },
  data () {
    return {
      enumCurrencies,
      showModal: false,
      extraCurrency: null,
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
    this.init()
  },
  computed: {
    choicedCurrency () {
      if (!this.radioValue) return false
      return this.currencies[this.radioValue]
    },
    listExtraCurrency () {
      const arr = this.showList.flat(Infinity)
      return Object.values(enumCurrencies).filter(
        item => !arr.find(el => el.name === item)
      )
    }
  },
  methods: {
    closeModalWindow () {
      this.showModal = false
      if (!this.extraCurrency) return
      this.saveExtraCurrency(this.extraCurrency)
    },
    saveExtraCurrency (ticker) {
      if (!this.currencies[ticker]) return
      const savedData = this.getSavedData()
      savedData.push(ticker)
      window.localStorage.setItem('extraCurrency', JSON.stringify(savedData))
      this.init()
    },
    getSavedData () {
      const savedData = JSON.parse(window.localStorage.getItem('extraCurrency'))
      if (!savedData || !Array.isArray(savedData)) return []
      return savedData
    },
    init () {
      const savedData = this.getSavedData()
      const arr = defaultCurrencies.concat(savedData)
      this.showList = arr.map(i => this.currencies[i])
      this.showList = splitArrOnSmallArr(this.showList)
    }
  }
}
</script>

<style lang="scss">
.real-rate {
  position: relative;
  display: grid;
  grid-template-rows: 1fr max-content;
  width: 100%;
  padding: 0;
  @include blockShadowPrimary;

  legend {
    position: relative;
    transform: translateY(-10px);
    @include txtShadowTxtPrimary;
  }

  &__choice {
    border: none;
    padding: 0;
    padding-block-start: var(--gap);

    &__item {
      border-right: 3px solid #3d3c48;
      text-align: center;
      &:last-child {
        border: none;
      }
    }
  }

  &__table {
    width: 100%;
    td {
      --size: 120px;
      max-width: var(--size);
      width: var(--size);
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
        &[up='true'] {
          @include txtShadowTxtPrimary;
        }
        &[up='false'] {
          color: tomato;
          text-shadow: 0px 0px 8px tomato;
        }
        &[up='null'] {
          color: #50caff;
          text-shadow: 0px 0px 8px #50caff;
        }
      }
    }
  }

  &__add-btn {
    &.btn__wrap {
      position: absolute;
      width: max-content;
      top: -25px;
      right: 0;
    }
  }

  .modal-header {
    @include txtShadowTxtPrimary;
  }

  .modal-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
