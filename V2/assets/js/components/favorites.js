import over from "./over.js";
import CoinCard from "../class/coinCard.js";
import displayFavorites from "./displayFavorites.js";

const favorites = (coinsData, favoritesCardsContainer) => {
  const favoritesIds = JSON.parse(localStorage.getItem("favorites"));
  if (favoritesIds) {
    let coinsCards = [];
    for (const favIds of favoritesIds) {
      coinsData
        .filter((coin) => coin.id === favIds)
        .map((coin) => {
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
          coinsCards.push(coin);
        });
    }

    displayFavorites(coinsData, favoritesCardsContainer);
  } else {
    console.log("No fav");
  }
};

export default favorites;
