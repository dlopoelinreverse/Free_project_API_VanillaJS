import showHome from "./components/showHome.js";
import showSearchPage from "./components/showSearchPage.js";
console.log("Go faire un projet SYMPA !");

document.addEventListener("DOMContentLoaded", () => {
  //INIT LocalStorage
  localStorage.setItem("favorites", []);
  // ***************   DOM   *********************
  //NAV
  const navButtons = document.querySelectorAll(".nav-btn");
  //HOME
  const homePage = document.querySelector(".home-page");
  //SEARCH
  const searchPage = document.querySelector(".search-page");
  const searchForm = document.querySelector(".search-form");
  const cardContainer = document.querySelector(".card-container");
  const searchError = document.querySelector(".search-error");
  const searchValue = document.getElementById("searchValue");
  //FAVORITES

  // basic state
  let showingHome = true;
  let showingForm = false;
  let showingFavorites = false;

  showHome(showingHome, homePage);
  showSearchPage(
    showingForm,
    searchPage,
    searchForm,
    cardContainer,
    searchError,
    searchValue
  );

  for (const navLink of navButtons) {
    navLink.addEventListener("click", (e) => {
      // envoyeyer le prosp de dom en fonction de l'id renvoyé par
      switch (e.target.id) {
        case "home":
          return (
            showHome(showingHome, homePage),
            showSearchPage(
              showingForm,
              searchPage,
              searchForm,
              cardContainer,
              searchError,
              searchValue
            )
          );
        case "search":
          return (
            showSearchPage(
              !showingForm,
              searchPage,
              searchForm,
              cardContainer,
              searchError,
              searchValue
            ),
            showHome(!showingHome, homePage)
          );
        // case "favorites":

        default:
          return (
            showHome(showingHome, homePage),
            showSearchPage(
              showingForm,
              searchPage,
              searchForm,
              cardContainer,
              searchError,
              searchValue
            )
          );
      }
    });
  }

  //   //   // caler dans une fonction "show form" true/false

  //   //   // class d'event listener =>
  // });
  // localStorage ? => show fav
});
