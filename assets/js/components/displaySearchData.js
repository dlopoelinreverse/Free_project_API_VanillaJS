import Coin from "../class/Coin.js";
import CoinCard from "../class/CoinCard.js";
import fetchData from "../utils/fetchData.js";
import showPriceSelection from "./showPriceSelection.js";

const searchData = (data) => {
  // const searchBtn = document.getElementById("search");

  const cardContainer = document.querySelector(".card-container");
  // const getPriceBtn = document.querySelector(".get-price");
  let coinCards = [];
  // console.log(data);

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
        // console.log(coinCards);
        coinCards
          .filter((coinCard) => coinCard.id === card.id)
          .map((coinCard) => (card.innerHTML = coinCard.display()));

        // get price
        const cardBtnContainer = document.querySelector(".card-btn-container");
        const getPriceBtn = document.querySelector(".get-price");

        getPriceBtn.addEventListener("click", () => {
          console.log("cliqué");
          showPriceSelection(cardBtnContainer);
        });
        // getPriceBtn.addEventListener("click", async (e) => {
        //   console.log(e.target.id);
        //   const coinSpeData = await fetchData("getSpecificData", e.target.id);
        //   console.log(coinSpeData);
        // });
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
