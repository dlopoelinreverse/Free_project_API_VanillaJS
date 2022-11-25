import displaySearchV2 from "./displaySearchV2.js";

const search = (searchProps) => {
  const { searchForm, cardContainer, searchError, searchValue, coinsData } =
    searchProps;
  // set currencySelection

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (searchValue.value === "") {
      searchError.innerHTML = `<p class"error">Veuillez saisir une lettre au minimum</p>`;
    } else {
      searchError.innerHTML = "";
      cardContainer.innerHTML = "";
      const searchedData = [];
      console.log(searchValue.value);
      coinsData
        .filter((coin) =>
          coin.name.toLowerCase().includes(searchValue.value.toLowerCase())
        )
        .map((coin) => searchedData.push(coin));

      searchedData.length === 0
        ? (searchError.innerHTML = `Votre recherche n'a pas aboutie, veuillez essayer avec un nom différent`)
        : displaySearchV2(searchedData, cardContainer);
    }
  });
};
export default search;
