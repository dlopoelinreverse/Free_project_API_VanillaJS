import over from "./over.js";

const displaySearch = (data, cardContainer) => {
  for (const card of data) {
    cardContainer.innerHTML += card.displayThumbCard();
  }

  const cards = document.querySelectorAll(".card");
  for (const card of cards) over(card, data);
};

export default displaySearch;
