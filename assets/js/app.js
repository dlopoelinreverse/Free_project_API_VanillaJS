// import navigation from "./components/navigation.js";
import navigation from "./components/navigation.js";
import showHome from "./components/showHome.js";
import showSearchPage from "./components/showSearchPage.js";
import Home from "./pages/Home.js";
import fetchData from "./utils/fetchData.js";

console.log("Go faire un projet SYMPA !");

document.addEventListener("DOMContentLoaded", async () => {
  //INIT LocalStorage
  localStorage.setItem("favorites", []);
  // ***************   DOM   *********************
  //NAV
  const navContainer = document.querySelector(".nav-container");
  const navButtons = document.querySelectorAll(".nav-btn");
  // HIGH
  // const page = document.querySelector(".page");
  //HOME
  const homePage = document.querySelector(".home-page");
  //SEARCH
  const searchPage = document.querySelector(".search-page");
  const searchForm = document.querySelector(".search-form");
  const cardContainer = document.querySelector(".card-container");
  const searchError = document.querySelector(".search-error");
  const searchValue = document.getElementById("searchValue");
  // const currencySelection = document.querySelector(".currency-selection");
  //GET 250 COINSDATA
  const coinsData = await fetchData("250");
  console.log(coinsData);
  // console.log(coinsData.sort((a, b) => b.current_price - a.current_price));
  // FAVORITES
  let domProps = {
    navContainer,
    navButtons,
    homePage,
    searchPage,
    searchForm,
    cardContainer,
    searchError,
    searchValue,
    coinsData,
  };
  navigation(domProps);
  // basic state
  let showingHome = true;
  let showingForm = false;
  let showingFavorites = false;

  // navigation();
  // for (const navLink of navButtons) {
  //   navLink.addEventListener("click", (e) => {
  //     navigation(e);
  //   });
  // }
  // let homeParams = {
  //   homePage,
  // };
  // Home(homeParams);

  // showHome(showingHome, homePage);
  // showSearchPage(
  //   showingForm,
  //   searchPage,
  //   searchForm,
  //   cardContainer,
  //   searchError,
  //   searchValue
  // );

  // for (const navLink of navButtons) {
  //   navLink.addEventListener("click", (e) => {
  //     // envoyeyer le prosp de dom en fonction de l'id renvoyé par
  //     switch (e.target.id) {
  //       case "home":
  //         return (
  //           showHome(showingHome, homePage),
  //           showSearchPage(
  //             showingForm,
  //             searchPage,
  //             searchForm,
  //             cardContainer,
  //             searchError,
  //             searchValue
  //           )
  //         );
  //       case "search":
  //         return (
  //           showSearchPage(
  //             !showingForm,
  //             searchPage,
  //             searchForm,
  //             cardContainer,
  //             searchError,
  //             searchValue
  //           ),
  //           showHome(!showingHome, homePage)
  //         );
  //       // case "favorites":

  //       default:
  //         return (
  //           showHome(showingHome, homePage),
  //           showSearchPage(
  //             showingForm,
  //             searchPage,
  //             searchForm,
  //             cardContainer,
  //             searchError,
  //             searchValue
  //           )
  //         );
  //     }
  //   });
  // }

  //   //   // caler dans une fonction "show form" true/false

  //   //   // class d'event listener =>
  // });
  // localStorage ? => show fav
});
