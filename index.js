import menuList from "./menu.json";
import Handlebars from "handlebars";

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

function makeMarkUp(obj) {
  return obj
    .map(() => {
      return `<li class="menu__item">
        <article class="card">
          <img
            src= {{image}}
            alt="name"
            class="card__image"
          />
          <div class="card__content">
            <h2 class="card__name">{{name}}</h2>
            <p class="card__price">
              <i class="material-icons"> monetization_on </i>
              {{price}}
            </p>
      
            <p class="card__descr">
              {{description}}
            </p>
      
            <ul class="tag-list">
              <li class="tag-list__item">{{ingredients}}</li>
              <li class="tag-list__item">{{ingredients}}</li>
              <li class="tag-list__item">{{ingredients}}</li>
              <li class="tag-list__item">{{ingredients}}</li>
              <li class="tag-list__item">{{ingredients}}</li>
              <li class="tag-list__item">{{ingredients}}</li>
            </ul>
          </div>
      
          <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
          </button>
        </article>
      </li>`;
    })
    .join("");
}
