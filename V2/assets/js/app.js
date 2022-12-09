// import navigation from "./components/navigation.js";
import navigation from "./utils/navigation.js";
import fetchData from "./utils/fetchData.js";

console.log("Go faire un projet SYMPA !");

document.addEventListener("DOMContentLoaded", async () => {
  //INIT LocalStorage
  // const favorites = localStorage.getItem("favorites");
  // favorites.push("ui");
  // if (favorites) {
  //   console.log("local storag ok");
  // } else {
  //   localStorage.setItem("favorites", []);
  // }
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
  //FAVORITES
  const favoritesPage = document.querySelector(".favorites-page");
  const favoritesCardsContainer = document.querySelector(
    ".favorites-cards-container"
  );
  // const currencySelection = document.querySelector(".currency-selection");
  //GET 250 COINSDATA
  const coinsData = await fetchData("250");
  // console.log(coinsData);
  // console.log(coinsData.sort((a, b) => b.current_price - a.current_price));
  // FAVORITES
  let domProps = {
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
  };
  navigation(domProps);
});
