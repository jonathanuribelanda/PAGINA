<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener datos del formulario
    $name = htmlspecialchars(trim($_POST['fullName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $countryCode = htmlspecialchars(trim($_POST['countryCode']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $country = htmlspecialchars(trim($_POST['country']));
    $serviceRequested = htmlspecialchars(trim($_POST['serviceRequested']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validar que los campos no estén vacíos
    if (empty($name) || empty($email) || empty($phone) || empty($country) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Todos los campos son obligatorios.']);
        exit;
    }

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'El correo electrónico no es válido.']);
        exit;
    }

    // Crear un array con palabras clave relacionadas con solicitudes de trabajo
    $keywords = ['vacante', 'empleo', 'trabajo', 'postulación'];

    // Verificar si el mensaje contiene alguna de las palabras clave
    $sendToAlternateEmail = false;
    foreach ($keywords as $keyword) {
        if (stripos($message, $keyword) !== false) {
            $sendToAlternateEmail = true;
            break;
        }
    }

    // Definir el correo destinatario según las palabras clave
    if ($sendToAlternateEmail) {
        $to = "yzamora@eishel.org"; // Cambia este correo al correo alternativo
    } else {
        $to = "yzamora@eishel.org"; // El correo original
    }

    // Preparar el mensaje de correo
    $subject = "Nueva solicitud de contacto a través de la página web";
    $body = "Nombre: $name\nCorreo: $email\nTeléfono: $countryCode $phone\nPaís: $country\nServicio Solicitado: $serviceRequested\nMensaje:\n$message";
    $headers = "From: $email";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto con usted pronto.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No se pudo enviar el mensaje. Intente nuevamente.']);
    }
}
?>