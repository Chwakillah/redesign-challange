document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

