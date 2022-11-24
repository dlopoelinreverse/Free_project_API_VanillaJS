const url = "https://api.coingecko.com/api/v3/";

const fetchData = (query, value) => {
  switch (query) {
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
