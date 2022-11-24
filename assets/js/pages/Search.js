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
  } = domProps;
  toggleVisibility(homePage, "hidden");
  toggleVisibility(searchPage, "visible");
};

export default Search;
