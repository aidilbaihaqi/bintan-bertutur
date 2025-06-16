document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR MENU =====
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (navMenu) navMenu.classList.remove("show-menu");
    })
  );

  // ===== TESTIMONIAL CAROUSEL =====
  const prevButton = document.getElementById("prevTestimonial");
  const nextButton = document.getElementById("nextTestimonial");
  const testimonialContainer = document.querySelector(".testimonials__container");
  const testimonials = document.querySelectorAll(".testimonial__card");
  let currentIndex = 0;
  const totalTestimonials = testimonials.length;

  if (prevButton && nextButton && testimonialContainer && testimonials.length > 0) {
    const showTestimonial = (index) => {
      currentIndex = (index + totalTestimonials) % totalTestimonials;
      testimonialContainer.style.transform = `translateX(-${currentIndex * 5}%)`;
    };
    prevButton.addEventListener("click", () => {
      currentIndex--;
      showTestimonial(currentIndex);
    });
    nextButton.addEventListener("click", () => {
      currentIndex++;
      showTestimonial(currentIndex);
    });
    showTestimonial(currentIndex);
  }

  // ===== FAQ ACCORDION TOGGLE =====
  const questions = document.querySelectorAll(".faq__question");
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // Close all others
      questions.forEach((q) => {
        if (q !== question) {
          q.classList.remove("active");
          if (q.querySelector('.faq__icon')) q.querySelector('.faq__icon').textContent = "+";
        }
      });
      // Toggle this one
      question.classList.toggle("active");
      const icon = question.querySelector('.faq__icon');
      if (icon) {
        icon.textContent = question.classList.contains('active') ? "–" : "+";
      }
    });
  });

  // ===== FADE OUT EFFECT ON SCROLL =====
  const testimonialsCard = document.querySelectorAll(".testimonial__card");
  const events = document.querySelectorAll(".event__card");
  const fadeOutOnScroll = () => {
    testimonialsCard.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.remove("fade-out");
      } else {
        card.classList.add("fade-out");
      }
    });
    events.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.remove("fade-out");
      } else {
        card.classList.add("fade-out");
      }
    });
  };
  window.addEventListener("scroll", fadeOutOnScroll);

  // ===== SCROLL HEADER BLUR =====
  const blurHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      if (window.scrollY >= 50) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    }
  };
  window.addEventListener("scroll", blurHeader);

  // ===== SCROLL UP BUTTON =====
  const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if (scrollUp) {
      window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
    }
  };
  window.addEventListener("scroll", scrollUp);

  // ===== NAV ACTIVE LINK ON SCROLL =====
  const section = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    section.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionClass = document.querySelector(
        `.nav__menu a[href*='${sectionId}']`
      );
      if (sectionClass) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add("active-link");
        } else {
          sectionClass.classList.remove("active-link");
        }
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  // ===== SCROLL REVEAL ANIMATION (if ScrollReveal available) =====
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
    });

    sr.reveal(".home__data, .explore__data, .explore__user, .footer__container");
    sr.reveal(".home__card", { delay: 600, distance: "100px", interval: 100 });
    sr.reveal(".about__data, .join__image", { origin: "right" });
    sr.reveal(".about__image, .join__data", { origin: "left" });
    sr.reveal(".popular__card", { interval: 200 });
  }
});
