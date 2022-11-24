import fetchData from "../utils/fetchData.js";

const showHome = async (showHome, homeContainer) => {
  let home = homeContainer;
  if (showHome) {
    console.log("home");
    home.classList.remove("hidden");

    const globalData = await fetchData("global").then((res) => res.data);
    console.log(globalData);
  } else {
    console.log("no-home");
    home.classList.add("hidden");
  }
};

export default showHome;
