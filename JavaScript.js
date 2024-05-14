document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let previousSection = entry.target.previousElementSibling;
        // Asegurar que la animación se aplique cuando la sección previa casi ha salido de la vista
        if (previousSection && !previousSection.classList.contains('is-visible')) {
          previousSection.classList.add('is-visible');
        }
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    rootMargin: "0px",
    threshold: 0.05 // Un umbral más pequeño para empezar la animación más temprano
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
