let currentIndex = 0;
const gall = document.querySelector('.gall');

function cambiarSlide(direccion) {
  currentIndex += direccion;

  if (currentIndex < 0) {
    currentIndex = 3; // Última imagen
  } else if (currentIndex > 3) {
    currentIndex = 0; // Primera imagen
  }

  const desplazamiento = currentIndex * -25; // Cada slide ocupa el 25% del contenedor
  gall.style.transform = `translateX(${desplazamiento}%)`;
}

function iniciarPresentacion() {
  setInterval(function () {
    cambiarSlide(1);
  }, 3000); // Cambiar de imagen cada 3 segundos, ajusta según sea necesario
}

iniciarPresentacion(); // Iniciar la presentación automáticamente
