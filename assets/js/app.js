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

  // Change active link on scrolling
  document.addEventListener("scroll", () => scrollActive());

  // Change header bg when scrolling
  document.addEventListener("scroll", () => headerActive());

  // Setup the dark mode button
  setupDarkModeButton();
};

const scrollActive = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

const headerActive = () => {
  const header = document.querySelector("header");

  if (this.scrollY >= 200) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
};

const setupDarkModeButton = () => {
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
