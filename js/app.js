"use strict";
const nav = document.querySelector(".navbar");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Event Listners
menuBtn.addEventListener("click", function () {
  document.querySelector(".navbar .menu").classList.toggle("active");
  menuBtnIcon.classList.toggle("fa-bars");
  menuBtnIcon.classList.toggle("fa-times");
});

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.9,
});

headerObserver.observe(home);
