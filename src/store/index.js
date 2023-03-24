import { createStore } from 'vuex'
import { exchangeRateAPI, cryptocompareAPI } from '@/api'
import currencies from '@/currency'

export default createStore({
  state: {
    currencies
  },
  getters: {},
  mutations: {
    setToUSDRate (state, payload) {
      const elem = state.currencies[payload.name]
      if (!elem) return
      elem.setRateToUSD(payload.value)
    }
  },
  actions: {
    async getData ({ commit }) {
      let result = await Promise.allSettled([
        exchangeRateAPI.getData(),
        cryptocompareAPI.getData()
      ])
      result = result.reduce((accum, item) => {
        return Object.assign(accum, item.value)
      }, {})
      Object.keys(result).forEach((name) => {
        commit('setToUSDRate', { name, value: result[name] })
      })
      return result
    }
  },
  modules: {}
})
