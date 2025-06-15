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
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    })
  );

  const prevButton = document.getElementById("prevTestimonial");
    const nextButton = document.getElementById("nextTestimonial");
    const testimonialContainer = document.querySelector(".testimonials__container");

    let currentIndex = 0; // Track current testimonial

    const testimonials = document.querySelectorAll(".testimonial__card");
    const totalTestimonials = testimonials.length;

    // Function to show the current testimonial
    const showTestimonial = (index) => {
        // Use modulo operator to loop back to the first or last testimonial
        currentIndex = (index + totalTestimonials) % totalTestimonials;

        // Move the container to the right testimonial
        testimonialContainer.style.transform = `translateX(-${currentIndex * 10}%)`;
    };

    // Event listeners for the buttons
    prevButton.addEventListener("click", () => {
        currentIndex--;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        showTestimonial(currentIndex);
    });

    // Initially display the first testimonial
    showTestimonial(currentIndex);

  const testimonialsCard = document.querySelectorAll(".testimonial__card");
  const events = document.querySelectorAll(".event__card");
  const questions = document.querySelectorAll(".faq__question");

  const fadeOutOnScroll = () => {
    testimonialsCard.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.remove("fade-out"); // Reset the fade-out effect when in view
      } else {
        card.classList.add("fade-out"); // Apply fade-out effect when out of view
      }
    });
    events.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.remove("fade-out"); // Reset the fade-out effect when in view
      } else {
        card.classList.add("fade-out"); // Apply fade-out effect when out of view
      }
    });
  };

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  });

  window.addEventListener("scroll", fadeOutOnScroll);
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

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
});

sr.reveal(".home__data, .explore__data, .explore__user, .footer__container");
sr.reveal(".home__card", { delay: 600, distance: "100px", interval: 100 });
sr.reveal(".about__data, .join__image", { origin: "right" });
sr.reveal(".about__image, .join__daya", { origin: "left" });
sr.reveal(".popular__card", { interval: 200 });
