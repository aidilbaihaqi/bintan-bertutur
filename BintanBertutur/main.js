document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  // Buka menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Tutup menu
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // Tutup menu jika link diklik
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    })
  );
});

/* Blur header on scroll */
const blurHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
};

window.addEventListener("scroll", blurHeader);
