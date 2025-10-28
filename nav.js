document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", nav.classList.contains("active"));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
