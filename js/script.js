document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-times");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });

  // Typing Animation
  if (document.querySelector(".typing")) {
    const typed = new Typed(".typing", {
      strings: ["Designer", "Developer", "Creator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  // Portfolio Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const submitText = submitBtn.querySelector("span");
      const submitIcon = submitBtn.querySelector("i");

      // Change button to loading state
      submitText.textContent = "Sending...";
      submitIcon.className = "fas fa-spinner fa-spin";

      // Simulate form submission
      setTimeout(() => {
        // Show success state
        submitText.textContent = "Message Sent!";
        submitIcon.className = "fas fa-check";

        // Reset form
        this.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitText.textContent = "Send Message";
          submitIcon.className = "fas fa-paper-plane";
        }, 3000);
      }, 1500);
    });
  }

  // Scroll Animation
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Initialize
});
