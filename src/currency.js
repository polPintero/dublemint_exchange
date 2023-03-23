class Currency {
  constructor (name) {
    this.name = name
    this.toUSD = 0
    this.oldPrice = null
  }

  setRateToUSD (rate) {
    this.oldPrice = this.toUSD
    this.toUSD = rate
  }

  getCrossRateToCurrency (cur) {
    if (!(cur instanceof Currency) || !cur.toUSD || !this.toUSD) return 0
    return Number(this.calculateCrossRate(cur.toUSD, this.toUSD).toFixed(2))
  }

  checkRateUp (cur) {
    if (!(cur instanceof Currency) || !cur.oldPrice || !this.oldPrice) {
      return null
    }
    const oldRate = this.calculateCrossRate(cur.oldPrice, this.oldPrice)
    const nowRate = this.getCrossRateToCurrency(cur)
    if (nowRate === oldRate) return null
    return oldRate < nowRate
  }

  calculateCrossRate (base, target) {
    return base / target
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
})

export default currencies
