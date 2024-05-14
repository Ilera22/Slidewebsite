document.querySelectorAll('.navigation a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto de los enlaces
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Crear un observador con IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Verificar si la sección está visible
        entry.target.classList.add('is-visible'); // Añadir clase para animación
        observer.unobserve(entry.target); // Opcional: Dejar de observar después de animar
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.5 // Ajusta esto para cambiar cuándo se activa la animación
  });

  // Aplicar el observador a cada sección
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

