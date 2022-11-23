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
            <div class="thumb-left">
                <div class="img-container">
                    <img class="thumb-img" src=${this.thumb}>
                </div>
            </div>
            <div class="thumb-right">
                <h2>${this.name}</h2>
            </div>
        </li>
        `;
  }
  showBackThumb() {
    return `
        <div class="thumb-left">
            <div class="img-container">
                <img class="thumb-img" src=${this.thumb}>
            </div>
            <div class="thumb-right">
                <h2>${this.name}</h2>
            </div>
        </div>
        `;
  }

  display() {
    return `
        <li class="card" id=${this.id}>
            <h2>${this.name}</h2>
            <h3>${this.apiSymbol}</h3>
            <h3>${this.symbol}</h3>
            <h3>${this.marketCapRank}</h3>
        </li>        
        `;
  }
}
