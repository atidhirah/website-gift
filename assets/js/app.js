document.addEventListener("DOMContentLoaded", () => {
  setupNavigationBar();
});

const setupNavigationBar = () => {
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

  // Setup the dark mode button
  const navModeButton = document.getElementById("nav-darkmode");
  const darkTheme = "dark-theme";
  const iconTheme = "bxs-sun";
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () => {
    if (document.body.classList.contains(darkTheme)) {
      return "dark";
    } else {
      return "light";
    }
  };

  const getCurrentIcon = () => {
    if (navModeButton.classList.contains(iconTheme)) {
      return "bxs-sun";
    } else {
      return "bxs-moon";
    }
  };

  // Change website mode depend on user last choice
  if (selectedTheme) {
    if (selectedTheme === "dark") {
      document.body.classList.add(darkTheme);
      navModeButton.classList.add(iconTheme);
    } else {
      document.body.classList.remove(darkTheme);
      navModeButton.classList.remove(iconTheme);
    }
  }

  // Add the event listener into the mode button
  navModeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    navModeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
};
