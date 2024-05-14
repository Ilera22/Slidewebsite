gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  gsap.fromTo(section, 
    { y: '100vh', opacity: 0 }, // Estado inicial fuera de la vista
    {
      y: '0', // Termina en su posición normal
      opacity: 1, // Completamente visible
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // Inicia la animación cuando la parte superior del trigger está en la parte inferior de la ventana
        end: "bottom top", // Termina la animación cuando la parte inferior del trigger está en la parte superior de la ventana
        scrub: 1, // Suaviza la animación con el movimiento de scroll
      }
    }
  );
});
