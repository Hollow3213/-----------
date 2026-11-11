/*ИНТЕРАКТИВ ДЛЯ САЙДБАРА*/

const sidebarLinks = document.querySelectorAll(".sidebar__link");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach((item) => {
      item.classList.remove("sidebar__link_active");
    });
    link.classList.add("sidebar__link_active");
  });
});

/*СВАРАЧИВАНИЕ ДЛЯ САЙДБАРА*/

const sideBar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".sidebar__button");
sideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar__collapsed");
});
