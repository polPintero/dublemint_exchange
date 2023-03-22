class Currency {
  constructor(name) {
    this.name = name
    this.toUSD = ''
  }

  setRateToUSD(rate) {
    this.toUSD = rate
  }

  getCrossRateToCurrency(cur) {
    if (!(cur instanceof Currency)) return 0
    return (cur.toUSD / this.toUSD).toFixed(4)
  }
}
export const enumCurrencies = {
  USD: 'USD',
  EUR: 'EUR',
  UAH: 'UAH',
  GBP: 'GBP',
  BTC: 'BTC',
  ETH: 'ETH',
  BNB: 'BNB',
  XRP: 'XRP'
}

const currencies = {}

Object.keys(enumCurrencies).forEach((key) => {
  const name = enumCurrencies[key]
  currencies[name] = new Currency(name)
  if (name === enumCurrencies.USD) currencies[name].toUSD = 1
  // currencies[name].toUSD = Math.random()
})

export default currencies
