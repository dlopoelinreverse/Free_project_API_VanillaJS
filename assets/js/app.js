import fetchData from "./utils/fetchData.js";
import Coin from "./class/Coin.js";
import displaySearchData from "./components/displaySearchData.js";
console.log("Go faire un projet SYMPA !");

document.addEventListener("DOMContentLoaded", async () => {
  const searchBtn = document.getElementById("search");
  const globalBtn = document.getElementById("global");
  const cardContainer = document.getElementById("cardContainer");

  searchBtn.addEventListener("click", (e) => {
    const searchForm = document.querySelector(".search-form");
    const searchValue = document.getElementById("searchValue");

    if (!searchForm.classList.contains("visible")) {
      searchForm.classList.add("visible");
      searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        // on submit, clear the card-container
        const searchData = await fetchData(searchBtn.id, searchValue.value)
          .then((res) => res)
          .catch((err) => console.log(err));
        displaySearchData(searchData);
      });
    } else {
      searchForm.classList.remove("visible");
      cardContainer.innerHTML = "";
    }
  });
  globalBtn.addEventListener("click", async () => {});
});
