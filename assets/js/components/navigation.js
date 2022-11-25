import Home from "../pages/Home.js";
import Search from "../pages/Search.js";

export default navigation = (domProps) => {
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
  navContainer.classList.add(".initial");

  for (const navLink of navButtons) {
    navLink.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "home":
          return Home(domProps);
        case "search":
          return Search(domProps);
        case "fav":
          return console.log("fav");
        // default:
        //   return Home(domProps);
      }
    });
  }
};
