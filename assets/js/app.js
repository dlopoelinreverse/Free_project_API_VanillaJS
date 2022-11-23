import fetchData from "./utils/fetchData.js";
import Coin from "./class/Coin.js";
import showSearchForm from "./components/showSearchForm.js";
import displaySearchData from "./components/displaySearchData.js";
console.log("Go faire un projet SYMPA !");

document.addEventListener("DOMContentLoaded", async () => {
  const searchBtn = document.getElementById("search");
  const globalBtn = document.getElementById("global");
  const cardContainer = document.querySelector(".card-container");
  const searchError = document.querySelector(".search-error");
  let show = "";

  searchBtn.addEventListener("click", (e) => {
    const searchForm = document.querySelector(".search-form");
    const searchValue = document.getElementById("searchValue");
    show = true;
    // show search form
    showSearchForm(show);

    //   // caler dans une fonction "show form" true/false

    //   // class d'event listener =>
  });
  globalBtn.addEventListener("click", async () => {
    show = false;
    showSearchForm(show);
    if (globalBtn.id === "global") {
      const globalData = await fetchData(globalBtn.id)
        .then((res) => res)
        .catch((err) => console.log(err));
      console.log(globalData);
    } else {
      throw new Error("Error on global button, cannot fetch");
    }
  });
});
