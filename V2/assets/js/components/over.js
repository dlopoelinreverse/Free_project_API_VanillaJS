import { addToFav } from "../utils/addToFav.js";
import findCard from "../utils/findCard.js";
import getHTMLCard from "../utils/getHTMLCard.js";

const over = (card, data) => {
  card.addEventListener("mouseenter", (e) => {
    const card = findCard(data, e.target.id);
    const cardHMTL = getHTMLCard(e.target.id);
    cardHMTL.innerHTML = card.showCompleteCard();
    const favBtn = document.getElementById("favBtn");
    favBtn.addEventListener("click", () => addToFav(card.id));
  });
  card.addEventListener("mouseleave", (e) => {
    const card = findCard(data, e.target.id);
    const cardHMTL = getHTMLCard(e.target.id);
    cardHMTL.innerHTML = card.showBackThumbCard();
  });
};
export default over;
