import Coin from "../class/Coin.js";
import CoinCard from "../class/CoinCard.js";
import fetchData from "../utils/fetchData.js";
import showPriceSelection from "./showPriceSelection.js";

const searchData = (data, cardContainer) => {
  let coinCards = [];

  if (data.coins.length > 0) {
    for (const coin of data.coins) {
      let coinCard = new CoinCard(
        coin.id,
        coin.name,
        coin.api_symbol,
        coin.symbol,
        coin.market_cap_rank,
        coin.thumb
      );
      coinCards.push(coinCard);
    }
    // console.log(coinCards);
    coinCards.map((coinCard) => {
      cardContainer.innerHTML += coinCard.showThumb();
    });
    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      // on hover

      card.addEventListener("mouseenter", () => {
        // btnFav clique => func => setLocalStorage

        coinCards
          .filter((coinCard) => coinCard.id === card.id)
          .map((coinCard) => (card.innerHTML = coinCard.display()));

        // get price
        const cardBtnContainer = document.querySelector(".card-btn-container");
        showPriceSelection(cardBtnContainer, card);
      });
      card.addEventListener("mouseleave", () => {
        // console.log(coinCards);
        coinCards
          .filter((coinCard) => coinCard.id === card.id)
          .map((coinCard) => (card.innerHTML = coinCard.showBackThumb()));
      });
    }
  } else {
    throw new Error("Cannot get coins with this search");
  }
};

export default searchData;
