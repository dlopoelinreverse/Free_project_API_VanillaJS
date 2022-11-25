import toggleVisibility from "../utils/toggleVisibility.js";

const Home = (domProps) => {
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
  console.log(homePage);
  toggleVisibility(homePage, "visible");
  toggleVisibility(searchPage, "hidden");
};

export default Home;
