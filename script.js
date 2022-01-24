let activeElem = null;
let activeClass = "";
const bgOverlay = document.querySelector(".background-overlay");
const calendar = document.querySelector(".header-link--red-dot");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const cldMenu = document.querySelector(".calendar-menu");
const cldClose = document.querySelector(".calendar-menu__close-box");
const loadMenu = (menuElem, className) => {
  document.body.classList.toggle("no-scroll");
  bgOverlay.classList.toggle("background-overlay--activated");
  bgOverlay.disabled = true;
  menuElem.classList.toggle(className);
  activeElem = activeElem === null ? menuElem : null;
  activeClass = activeClass === "" ? className : "";
  setTimeout(() => (bgOverlay.disabled = false), 300);
};

calendar.addEventListener("click", () =>
  loadMenu(cldMenu, "calendar-menu--active")
);

hamburger.addEventListener("click", () => loadMenu(navMenu, "nav--activated"));

bgOverlay.addEventListener("click", () => loadMenu(activeElem, activeClass));
cldClose.addEventListener("click", () => loadMenu(activeElem, activeClass));
