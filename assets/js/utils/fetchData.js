const allCoinsDataURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";
const url = "https://api.coingecko.com/api/v3/";
const fetchData = (query, value) => {
  switch (query) {
    case "250":
      return new Promise((resolve, reject) => {
        fetch(allCoinsDataURL)
          .then((response) => response.json())
          .then((d) => resolve(d))
          .catch((e) => reject(e));
      });
    case "search":
      return new Promise((resolve, reject) => {
        fetch(url + query + "?query=" + value)
          .then((response) => response.json())
          .then((d) => resolve(d))
          .catch((e) => reject(e));
      });
    case "global":
      return new Promise((resolve, reject) => {
        fetch(url + query)
          .then((response) => response.json())
          .then((d) => resolve(d))
          .catch((e) => reject(e));
      });
    case "getSpecificData":
      return new Promise((resolve, reject) => {
        fetch("https://api.coingecko.com/api/v3/coins/" + value)
          .then((response) => response.json())
          .then((d) => resolve(d))
          .catch((e) => reject(e));
      });
    default:
      return "cannot make fetch, error query";
  }
};

export default fetchData;
