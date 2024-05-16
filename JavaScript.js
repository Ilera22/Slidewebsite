document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-animation');

  const checkVisibility = () => {
    const triggerTop = window.innerHeight / 5 * 4; // Punto de activación ajustado
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerTop) {
        element.classList.remove('visible'); // Retira la clase cuando el elemento sube
      } else {
        element.classList.add('visible'); // Añade la clase cuando el elemento entra
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Inicializar al cargar
});
