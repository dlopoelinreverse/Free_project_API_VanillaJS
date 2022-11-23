import fetchData from "../utils/fetchData.js";
import displaySearchData from "./displaySearchData.js";

const showSearchForm = (show) => {
  const searchForm = document.querySelector(".search-form");
  const cardContainer = document.querySelector(".card-container");
  const searchBtn = document.getElementById("search");
  const searchError = document.querySelector(".search-error");

  if (show) {
    console.log("Show form");
    searchForm.classList.add("visible");

    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      // on submit, clear the card-container
      cardContainer.innerHTML = "";

      // check content value

      if (searchValue.value === "") {
        searchError.innerHTML = "Veuillez renseigner le nom d'un coin";
      } else {
        searchError.innerHTML = "";

        // if (searchBtn.id === "search") {
        const searchData = await fetchData(searchBtn.id, searchValue.value)
          .then((res) => res)
          .catch((err) => console.log(err));
        displaySearchData(searchData);
        // } else {
        //   throw new Error("Error on search button, cannot fetch");
        // }
      }
    });
  } else {
    console.log("false");
    searchForm.classList.remove("visible");
  }
};

export default showSearchForm;
