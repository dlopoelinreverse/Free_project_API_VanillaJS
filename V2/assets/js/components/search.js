import toggleVisibility from "../utils/toggleVisibility.js";
import CoinCard from "../class/coinCard.js";
import displaySearch from "./displaySearch.js";

const search = (searchProps) => {
  const { searchForm, cardContainer, searchError, searchValue, coinsData } =
    searchProps;

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (searchValue.value === "") {
      toggleVisibility(searchError, "visible");
      searchError.innerHTML = `<p class"error">Veuillez saisir une lettre au minimum</p>`;
    } else {
      searchError.innerHTML = "";
      cardContainer.innerHTML = "";
      toggleVisibility(searchError, "hidden");
      const searchedData = [];
      const coinsCards = [];
      coinsData
        .filter((coin) =>
          coin.name.toLowerCase().includes(searchValue.value.toLowerCase())
        )
        .map((coin) => searchedData.push(coin));

      searchedData.map((coin) => {
        let card = new CoinCard(
          coin.id,
          coin.name,
          coin.current_price,
          coin.high_24h,
          coin.image,
          coin.price_change_percentage_1h_in_currency,
          coin.price_change_percentage_24h_in_currency,
          coin.price_change_percentage_7d_in_currency
        );
        coinsCards.push(card);
      });

      coinsCards.length === 0
        ? (searchError.innerHTML = `Votre recherche n'a pas aboutie, veuillez essayer avec un nom différent`)
        : displaySearch(coinsCards, cardContainer);
    }
  });
};
export default search;
