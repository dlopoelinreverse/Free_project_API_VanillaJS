// const allCoinsDataURL = "https://botw-compendium.herokuapp.com/api/v2";
const allCoinsDataURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

const fetchData = (query, value) => {
  switch (query) {
    case "250":
      return new Promise((resolve, reject) => {
        // retourne obligatoirement de la DATA
        fetch(allCoinsDataURL)
          .then((response) => response.json())
          .then((d) => resolve(d))
          .catch((e) => reject(e));
      });

    default:
      return "cannot make fetch, error query";
  }
};

export default fetchData;
