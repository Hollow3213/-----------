/*РАЗВОРАЧИВАНИЕ ПОИСКА*/

const search = document.querySelector(".header__search");
const searchBtn = document.querySelector(".header__search-button");
searchBtn.addEventListener("click", () => {
  search.classList.toggle("header__search_open");
});
