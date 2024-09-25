document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById('popup');
  var closeBtn = document.getElementById('closeBtn');
  var registerBtn = document.getElementById('registerBtn');

  // Mostrar pop-up al cargar la página
  popup.style.display = 'block';

  // Cerrar pop-up al hacer clic en el botón de cerrar
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Cerrar pop-up al hacer clic fuera del contenido
  window.addEventListener('click', function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
// Función para redirigir al usuario al hacer clic en el botón "Registrarse"
registerBtn.addEventListener('click', function() {
    // Cambiar la URL por la que desees redirigir al usuario
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScQYaXGCKS8HlheWJ-Pf8kmn3z4p-N5HQDxPpL_edLIC9FLIw/viewform';
  
  // Aquí puedes agregar la funcionalidad de registro al hacer clic en el botón de registro
});

});
