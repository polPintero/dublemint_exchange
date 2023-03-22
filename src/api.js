import data from './data'
import data2 from './data2'

import { enumCurrencies } from './currency'
class API {
  constructor (url) {
    this.url = url
  }

  async getData () {
    console.log('from API')
  }
}

class ExchangeRateAPI extends API {
  async getData () {
    // let response = await fetch(this.url)
    // response = await response.json()
    // if (response.result === 'error') return {}
    // return response.conversion_rates
    return data.conversion_rates
  }
}

class CryptocompareAPI extends API {
  async getData () {
    // let response = await fetch(this.url)
    // response = await response.json()
    // if (!response.Type) return {}
    // return response.USD
    return data2.USD
  }
}

export const exchangeRateAPI = new ExchangeRateAPI(
  //   'https://v6.exchangerate-api.com/v6/de4f0861779f07d13276f98d/latest/USD'
  'https://v6.exchangerate-api.com/v6/de4f0861779f07/latest/USD'
)

const list = Object.values(enumCurrencies).join(',')

export const cryptocompareAPI = new CryptocompareAPI(
  `https://min-api.cryptocompare.com/data/pricemui?fsyms=USD&tsyms=${list}&api_key=c5bf132`
  //   `https://min-api.cryptocompare.com/data/pricemulti?fsyms=USD&tsyms=${list}&api_key=c5bf6d5b55d5ac7c289fd19d332a7f675f4e68bdf09f16a7d5587e765751f132`
)
