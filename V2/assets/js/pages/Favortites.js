import favorites from "../components/favorites.js";
import toggleVisibility from "../utils/toggleVisibility.js";

const Favorites = (domProps) => {
  const {
    navContainer,
    navButtons,
    homePage,
    searchPage,
    favoritesPage,
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
    favoritesCardsContainer,
  } = domProps;
  toggleVisibility(homePage, "hidden");
  toggleVisibility(searchPage, "hidden");
  toggleVisibility(favoritesPage, "visible");

  navContainer.classList.remove("initial");
  favorites(coinsData, favoritesCardsContainer);
};

export default Favorites;
