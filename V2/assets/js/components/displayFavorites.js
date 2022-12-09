const displayFavorites = (data, favoritesCardsContainer) => {
  for (const card of data) {
    favoritesCardsContainer.innerHTML += card.displayThumbCard();
  }

  const cards = document.querySelectorAll(".card");
  for (const card of cards) over(card, data);
};

export default displayFavorites;
