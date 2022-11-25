import search from "../components/V2/search.js";
import toggleVisibility from "../utils/toggleVisibility.js";

const Search = (domProps) => {
  const {
    navContainer,
    navButtons,
    homePage,
    searchPage,
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
  } = domProps;
  toggleVisibility(homePage, "hidden");
  toggleVisibility(searchPage, "visible");
  let searchProps = {
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
  };

  search(searchProps);
};

export default Search;
