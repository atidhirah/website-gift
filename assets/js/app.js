document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
});

const setupNavigation = () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");

  // Open and hide menu via nav toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });

  // Hide menu after clicking link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });
};
