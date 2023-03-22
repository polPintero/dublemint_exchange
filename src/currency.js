class Currency {
  constructor(name) {
    this.name = name
    this.toUSD = 23
  }

  setRateToUSD(rate) {
    this.toUSD = rate
  }
}
const currenciesList = ['USD', 'EUR', 'UAH', 'GBP', 'BTC', 'ETH', 'BNB', 'XRP']

const currencies = {}

currenciesList.forEach((name) => {
  currencies[name] = new Currency(name)
})

export default currencies
