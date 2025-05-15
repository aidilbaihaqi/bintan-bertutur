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
  
    // Tutup menu jika link diklik (opsional)
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(link => link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }));
  });
  