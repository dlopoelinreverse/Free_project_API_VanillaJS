import search from "../components/search.js";
import toggleVisibility from "../utils/toggleVisibility.js";

const Search = (domProps) => {
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
  } = domProps;
  toggleVisibility(homePage, "hidden");
  toggleVisibility(favoritesPage, "hidden");
  toggleVisibility(searchPage, "visible");
  let searchProps = {
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
  };
  navContainer.classList.remove("initial");

  search(searchProps);
};

export default Search;
