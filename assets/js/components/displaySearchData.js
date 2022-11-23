import Coin from "../class/Coin.js";
import CoinCard from "../class/CoinCard.js";

const searchData = (data) => {
  // const searchBtn = document.getElementById("search");

  const cardContainer = document.querySelector(".card-container");
  let coinCards = [];
  console.log(data);

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
      card.addEventListener("click", (e) => console.log(card.id));
      card.addEventListener("mouseenter", () => {
        // console.log(coinCards);
        coinCards
          .filter((coinCard) => coinCard.id === card.id)
          .map((coinCard) => (card.innerHTML = coinCard.display()));
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
