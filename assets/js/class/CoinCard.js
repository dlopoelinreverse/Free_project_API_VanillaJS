export default class CoinCard {
  constructor(id, name, apiSymbol, symbol, marketCapRank, thumb) {
    this.id = id;
    this.name = name;
    this.apiSymbol = apiSymbol;
    this.symbol = symbol;
    this.marketCapRank = marketCapRank;
    this.thumb = thumb;
  }

  showThumb() {
    return `
        <li class="card" id=${this.id}>
            <img class="thumb-img" src=${this.thumb}>
        </li>
        `;
  }

  display() {
    return `
        
            <h2>${this.name}</h2>
            <h3>${this.apiSymbol}</h3>
            <h3>${this.symbol}</h3>
            <h3>${this.marketCapRank}</h3>
            <img src=${this.thumb}>
       
        `;
  }
}
