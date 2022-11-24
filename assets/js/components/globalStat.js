import fetchData from "../utils/fetchData.js";

const globalStat = async () => {
  const cardContainer = document.querySelector(".card-container");
  const globalBtn = document.getElementById("global");
  cardContainer.classList.add("hidden");
  const globalData = await fetchData(globalBtn.id)
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(globalData);
};
export default globalStat;
