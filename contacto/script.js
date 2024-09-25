document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    // Limpiar mensajes de error
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('statusMessage').textContent = '';

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let hasError = false;

    // Validación del nombre (sin números o caracteres especiales)
    if (/[^a-zA-Z\s]/.test(fullName)) {
        document.getElementById('nameError').style.display = 'block';
        hasError = true;
    }

    // Validación del correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }

    // Validación del teléfono (solo números, 10 dígitos)
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        hasError = true;
    }

    if (hasError) return; // Si hay errores, no envía el formulario

    // Preparar los datos del formulario para enviar
    const formData = new FormData(this);

    // Enviar el formulario mediante AJAX
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirigir a la página de agradecimiento
            window.location.href = 'gracias.html';
        } else {
            document.getElementById('statusMessage').textContent = data.message;
            document.getElementById('statusMessage').style.color = 'red';
        }
    })
    .catch(error => {
        document.getElementById('statusMessage').textContent = 'Hubo un error al enviar el formulario.';
        document.getElementById('statusMessage').style.color = 'red';
    });
});