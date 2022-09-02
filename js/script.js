let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let card = document.querySelector(".card-items-container");

document.querySelector("#card-btn").onclick = () => {
  card.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  card.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  cnteredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
