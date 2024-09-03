burger = document.querySelector(".burger");
logo = document.querySelector(".container--logo");
nav = document.querySelector(".nav");
nav__list = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  nav.classList.toggle("h-nav-resp");
  logo.classList.toggle("v-class-resp");
  nav__list.classList.toggle("v-class-resp");
});
