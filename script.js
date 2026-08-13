const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

menu.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".placeholder").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Este proyecto está preparado para conectar su caso de estudio o repositorio de GitHub.");
  });
});
