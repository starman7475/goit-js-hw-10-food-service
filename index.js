import menuList from "./menu.json";
import menuTemplate from "./templates/menulist.hbs";

// import Handlebars from "handlebars";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const refs = {
  changeTheme: document.querySelector(".theme-switch__toggle"),
  placeForMarkUp: document.querySelector(".js-menu"),
};

refs.changeTheme.addEventListener("change", () => {
  document.body.classList.toggle(Theme.DARK);
  localStorage.setItem(
    "theme",
    document.body.classList.contains(Theme.DARK) ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add(Theme.DARK);
  refs.changeTheme.checked = true;
}

const menuListMarkUp = makeMarkUp(menuList);
refs.placeForMarkUp.insertAdjacentHTML("beforeend", menuListMarkUp);

function makeMarkUp(objs) {
  return objs.map(menuTemplate).join("");
}
