export default class CoinCard {
  constructor(
    id,
    name,
    currentPrice,
    high24h,
    image,
    changePer1h,
    changePer24h,
    changePer7d
  ) {
    this.id = id;
    this.name = name;
    this.currentPrice = currentPrice;
    this.high24h = high24h;
    this.image = image;
    this.changePer1h = changePer1h;
    this.changePer24h = changePer24h;
    this.changePer7d = changePer7d;
  }

  // creer une seule class HTML generator
  displayThumbCard() {
    return `
          <li class="card" id=${this.id}>
             <div class="thumb-card">
                <div class="img-container">
                    <img class="thumb-img" src=${this.image} alt=${this.name}>
                </div>
                </div>
                <h2>${this.name}</h2>
          </li>
          `;
  }
  showCompleteCard() {
    return `
            
             <div class="card-content">
                <h2>${this.name}</h2>
                <p>Au prix de : ${this.currentPrice.toFixed(4)} $</p>
                <p>Prix le plus haut 24h : ${this.high24h.toFixed(2)} $</p>
                <p>Changement 1h : ${this.changePer1h.toFixed(2)} %</p>
                <p>Changement 1j : ${this.changePer24h.toFixed(2)} %</p>
                <p>Changement 1 semaine : ${this.changePer7d.toFixed(2)} %</p>
                <button id="favBtn">FAV</button>
             </div>
          `;
  }
  showBackThumbCard() {
    return `
          
            <div class="thumb-card">
                <div class="img-container">
                    <img class="thumb-img" src=${this.image} alt=${this.name}>
                </div>
            </div>
            <h2>${this.name}</h2>
          
          `;
  }
}
