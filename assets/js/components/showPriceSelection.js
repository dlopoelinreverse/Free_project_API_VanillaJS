// display buttons for choosing prices, fetch on choses

import fetchData from "../utils/fetchData.js";
import displaySelectedPrice from "./displaySelectedPrice.js";

const showPriceSelection = (cardBtnContainer, card) => {
  cardBtnContainer.innerHTML += `<button class="get-prices-btn">Get prices</button>`;
  const getPricesBtn = document.querySelector(".get-prices-btn");
  const chooseBtnContainer = document.querySelector(".choose-btn-container");
  const currentPrice = document.querySelector(".current-price");

  getPricesBtn.addEventListener("click", async () => {
    if (getPricesBtn.textContent === "Get prices") {
      getPricesBtn.innerHTML = "X";

      const specificData = await fetchData("getSpecificData", card.id);
      chooseBtnContainer.innerHTML = `        
        <button class="choose-price-btn" id="usd">$</button>
        <button class="choose-price-btn" id="eur">€</button>
        <button class="choose-price-btn" id="btc">Btc</button>
        <button class="choose-price-btn" id="eth">Eth</button>
        <button class="choose-price-btn" id="gbp">£</button>
        `;

      // console.log(chooseButtons);
      displaySelectedPrice(
        specificData
        //  chooseBtnContainer
      );
    } else {
      chooseBtnContainer.innerHTML = "";
      getPricesBtn.innerHTML = "Get prices";
      currentPrice.innerHTML = "";
    }
  });
};

export default showPriceSelection;
