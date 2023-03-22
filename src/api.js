import data from './data'
class API {
  constructor(url) {
    this.url = url
  }

  async getData() {
    console.log('from API')
  }
}

class ExchangeRateAPI extends API {
  async getData() {
    await fetch(this.url)
    return data.conversion_rates
    // return await response.json()
  }
}

export const exchangeRateAPI = new ExchangeRateAPI(
  //   'https://v6.exchangerate-api.com/v6/de4f0861779f07d13276f98d/latest/USD'
  'https://v6.exchangerate-api.com/v6/de4f0861779f07/latest/USD'
)
