// import setPrices from "./setPrices.js";

const setCurrencySelection = (currencySelection, coinsCard, displayedCards) => {
  console.log(displayedCards);
  currencySelection.innerHTML = `
        <li class="choose-price-btn" id="usd">$</li>
        <li class="choose-price-btn" id="eur">€</li>
        <li class="choose-price-btn" id="btc">Btc</li>
        <li class="choose-price-btn" id="eth">Eth</li>
        <li class="choose-price-btn" id="gbp">£</li>
  `;
  let currencySelected;
  const choosePriceBtns = document.querySelectorAll(".choose-price-btn");
  // for (const choosePriceBtn of choosePriceBtns)
  // choosePriceBtn.addEventListener("click", (e) =>
  //   // setPrices(currency, coinsCard, displayedCards)
  // );
};
export default setCurrencySelection;
