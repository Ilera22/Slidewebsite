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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.5 // Ajusta esto según tus necesidades para cambiar cuándo ocurre la animación
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});
