// --- Control estricto de inicio en Top (Mobile & Desktop) ---
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const forzarTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  if (document.documentElement) document.documentElement.scrollTop = 0;
  if (document.body) document.body.scrollTop = 0;
};

// Ejecución inmediata
forzarTop();

// Ejecución cuando el DOM esté listo y cuando la página termine de renderizar assets
window.addEventListener('DOMContentLoaded', forzarTop);
window.addEventListener('load', () => {
  forzarTop();
  // Retardo táctico para contrarrestar el recalculo de viewport en navegadores móviles
  setTimeout(forzarTop, 50);
  setTimeout(forzarTop, 150);
});

window.addEventListener('beforeunload', forzarTop);

// --- Lógica original de Morgan (Intacta) ---
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
