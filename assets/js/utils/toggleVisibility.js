const toggleVisibility = (page, visibility) => {
  switch (visibility) {
    case "visible":
      return page.classList.remove("hidden");
    case "hidden":
      return page.classList.add("hidden");
  }
};
export default toggleVisibility;
