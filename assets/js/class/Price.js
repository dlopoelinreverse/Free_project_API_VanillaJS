export default class Price {
  constructor(priceChangeIn24h, priceChangePercentageIn1h) {
    this.priceChangeIn24h = priceChangeIn24h; //price_change_24h_in_currency
    this.priceChangePercentageIn1h = priceChangePercentageIn1h; //price_change_percentage_1h_in_currency
  }
}
