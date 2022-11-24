import Coin from "../class/Coin.js";
import CoinCard from "../class/CoinCard.js";
import addToFav from "../utils/addToFav.js";
import displaySelectedPrice from "./displaySelectedPrice.js";
import showPriceSelection from "./showPriceSelection.js";
import showSpecificPrice from "./showSpecificPrice.js";

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
      cardContainer.innerHTML += coinCard.showCard();
    });
    const cards = document.getElementsByClassName("card");

    for (const card of cards) {
      const cardData = coinCards.filter((coinCard) => coinCard.id === card.id);

      showSpecificPrice(cardData);

      // // card.addEventListener("mouseenter", () => {
      // // btnFav clique => func => setLocalStorage

      // coinCards
      //   .filter((coinCard) => coinCard.id === card.id)
      //   .map((coinCard) => {
      //     // card.innerHTML = coinCard.display();
      //     //listen favBtn
      //     // const favBtn = document.getElementById("favBtn");
      //     // favBtn.addEventListener("click", () => addToFav(coinCard));
      //   });

      // // get price
      // const cardBtnContainer = document.querySelector(
      //   ".card-buttons-container"
      // );
      // showPriceSelection(cardBtnContainer, card);
    }
  } else {
    throw new Error("Cannot get coins with this search");
  }
};

export default searchData;
