export const addToFav = (cardId) => {
  const favoritesIds = JSON.parse(localStorage.getItem("favorites"));
  if (favoritesIds) {
    if (!favoritesIds.includes(cardId)) favoritesIds.push(cardId);
    console.log(favoritesIds);
    localStorage.setItem("favorites", JSON.stringify(favoritesIds));
  } else {
    let favIds = [];
    favIds.push(cardId);
    localStorage.setItem("favorites", JSON.stringify(favIds));
  }
};
