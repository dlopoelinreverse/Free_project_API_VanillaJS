import filterCurrency from "../utils/filterCurrency.js";

const displaySelectedPrice = (
  specificData
  // chooseBtnContainer
) => {
  const chooseButtons = document.querySelectorAll(".choose-price-btn");
  const currentPrice = document.querySelector(".current-price");
  const currentPrices = specificData.market_data.current_price;
  let currentPricesArray = [];
  for (const [currency, price] of Object.entries(currentPrices))
    currentPricesArray.push([currency, price]);

  for (const chooseButton of chooseButtons) {
    chooseButton.addEventListener("click", (e) => {
      currentPrice.innerHTML = filterCurrency(e.target.id, currentPricesArray);
    });
  }
};

export default displaySelectedPrice;
