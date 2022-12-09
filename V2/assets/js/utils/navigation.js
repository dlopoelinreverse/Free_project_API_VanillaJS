import Home from "../pages/Home.js";
import Search from "../pages/Search.js";
import Favorites from "../pages/Favortites.js";

export default navigation = (domProps) => {
  const {
    navContainer,
    navButtons,
    homePage,
    searchPage,
    favoritesPages,
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
    favoritesCardsContainer,
  } = domProps;

  navContainer.classList.add("initial");

  for (const navLink of navButtons) {
    navLink.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "home":
          return Home(domProps);
        case "search":
          return Search(domProps);
        case "fav":
          return Favorites(domProps);
        // default:
        //   return Home(domProps);
      }
    });
  }
};
