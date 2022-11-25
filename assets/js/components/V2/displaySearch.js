import CoinCard from "../../class/CoinCard.js";
import setCurrencySelection from "./setCurrencySelection.js";
// import setPrices from "./setPrices.js";

const displaySearch = (data) => {
  const coinsCards = [];
  const displayedCards = [];
  console.log(data);

  searchData.coins.map((coin) => {
    let coinCard = new CoinCard(
      coin.id,
      coin.name,
      coin.api_symbol,
      coin.symbol,
      coin.market_cap_rank,
      coin.thumb
    ); //id, name, apiSymbol, symbol, marketCapRank, thumb
    coinsCards.push(coinCard);
  });
  //   coinsCards.map((card) => {
  //     cardContainer.innerHTML += card.showCard();
  //     // console.log(card);
  //     handlePrices(card.id, coinsCards);
  //   });
  coinsCards.map((card) => {
    cardContainer.innerHTML += `
        <li class="card" id=${card.id}>
        <div class="card-header">
        <div class="thumb-left">
            <div class="img-container">
                <img class="thumb-img" src=${
                  card.large ? card.large : card.thumb
                } alt=${card.name}>
            </div>
        </div>
        <div class="thumb-right">
            <h2>${card.name}</h2>
        </div>
    </div>
    <div class="card-content">
        <div class="card-data">
        </div>
        <div class="price-container"></div>
    </div>
        </li>
    `;
    // console.log(card.id);
    // setPrices(coinsCards);
    displayedCards.push(card.id);
  });
  setCurrencySelection(currencySelection, coinsCards, displayedCards);
};

export default displaySearch;
