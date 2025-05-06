document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre && email && mensaje) {
      alert(`¡Gracias por contactarme, ${nombre}! He recibido tu mensaje.`);
    } else {
      alert('Por favor, llena todos los campos.');
    }
  });

// Selección del botón de menú y del menú de navegación
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Evento que se activa cuando se hace clic en el botón de menú hamburguesa
menuToggle.addEventListener("click", () => {
    // Alterna la clase 'active' para mostrar/ocultar el menú
    navMenu.classList.toggle("active");
});
