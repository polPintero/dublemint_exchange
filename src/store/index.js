import { createStore } from 'vuex'
import { exchangeRateAPI } from '@/api'
import currencies from '@/currency'

export default createStore({
  state: {
    currencies
  },
  getters: {},
  mutations: {
    setToUSDRate(state, payload) {
      const elem = state.currencies[payload.name]
      if (!elem) return
      elem.toUSD = payload.value
    }
  },
  actions: {
    async getData({ commit }) {
      const result = await exchangeRateAPI.getData()
      Object.keys(result).forEach((name) => {
        commit('setToUSDRate', { name, value: result[name] })
      })
      return result
    }
  },
  modules: {}
})
