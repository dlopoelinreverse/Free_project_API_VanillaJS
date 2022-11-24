const listCurrency = (currentPricesArray) => {
  return currentPricesArray.filter(
    (pair) =>
      pair.includes("bnb") ||
      pair.includes("btc") ||
      pair.includes("cad") ||
      pair.includes("eth") ||
      pair.includes("gbp")
  );
};

export default listCurrency;
