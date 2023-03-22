class Currency {
  constructor (name) {
    this.name = name
    this.toUSD = 23
  }

  setRateToUSD (rate) {
    this.toUSD = rate
  }

  getRateToCurrency (cur) {
    if (!(cur instanceof Currency)) return ''
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
  currencies[name].toUSD = Math.random()
})

export default currencies
