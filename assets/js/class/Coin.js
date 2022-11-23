export default class Coin {
  constructor(id, name, apiSymbol, symbol, marketCapRank) {
    this.id = id;
    this.name = name;
    this.apiSymbol = apiSymbol;
    this.symbol = symbol;
    this.marketCapRank = marketCapRank;
  }

  // rajouter des fonctions définies

  compare(marketCap) {
    console.log(`${this.marketCapRank} superieur à ${marketCap} ?`);
  }
}
