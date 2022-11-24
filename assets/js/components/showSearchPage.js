import fetchData from "../utils/fetchData.js";
import displaySearchData from "./displaySearchData.js";

// class autoloader

const showSearchPage = (
  show,
  searchPage,
  searchForm,
  cardContainer,
  searchError,
  searchValue
) => {
  // if show => creer le form => logique

  if (show) {
    // display search form
    searchPage.classList.remove("hidden");

    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      // on submit, clear the card-container
      cardContainer.innerHTML = "";

      // check content value

      if (searchValue.value === "") {
        // en calss ?

        searchError.innerHTML = "Veuillez renseigner le nom d'un coin";
      } else {
        searchError.innerHTML = "";

        const searchData = await fetchData("search", searchValue.value)
          .then((res) => res)
          .catch((err) => console.log(err));
        displaySearchData(searchData, cardContainer);
      }
    });
  } else {
    // clear search form
    searchPage.classList.add("hidden");
  }
};

export default showSearchPage;
