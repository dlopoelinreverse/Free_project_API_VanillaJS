const filterCurrency = (input, currentPricesArray) => {
  // console.log(input, currentPricesArray);
  const pair = currentPricesArray.filter((priceCurrency) =>
    priceCurrency.includes(input)
  )[0];

  return `
  <p class="current-price-selected-currency">Acutuellement au prix de ${pair[1]} en ${pair[0]}</p>
  `;
};

export default filterCurrency;
