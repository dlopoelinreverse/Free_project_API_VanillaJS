import fetchData from "../utils/fetchData.js";
import displaySearchData from "./displaySearchData.js";

const showSearchPage = (
  show,
  searchPage,
  searchForm,
  cardContainer,
  searchError,
  searchValue,
  cardBtnContainer
) => {
  // if show => creer le form => logique

  if (show) {
    console.log(show);

    searchPage.classList.remove("hidden");

    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      // on submit, clear the card-container
      cardContainer.innerHTML = "";

      // check content value

      if (searchValue.value === "") {
        searchError.innerHTML = "Veuillez renseigner le nom d'un coin";
      } else {
        searchError.innerHTML = "";

        const searchData = await fetchData("search", searchValue.value)
          .then((res) => res)
          .catch((err) => console.log(err));
        displaySearchData(searchData, cardContainer, cardBtnContainer);
      }
    });
  } else {
    console.log(show);

    searchPage.classList.add("hidden");
  }
};

export default showSearchPage;
