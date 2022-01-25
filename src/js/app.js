import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

window.addEventListener("load", () => {
  let header = document.querySelector(".header");
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu");
  let menuItem = document.querySelectorAll(".menu__item");

    window.addEventListener("scroll", () => {
        window.pageYOffset >= 100
        ? header.classList.add("header--white")
        : header.classList.remove("header--white");
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger--active");
        menu.classList.toggle("menu--active");

        // menuItem.forEach(
        //     item.addEventListener("click", () => {
        //         menu.classList.toggle("menu--active");
        //     })
        // );
    });

    
});