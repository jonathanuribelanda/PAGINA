// Mostrar el texto emergente de WhatsApp cada cierto tiempo
function showWhatsAppPopup() {
    const popupText = document.querySelector('.whatsapp-popup .popup-text');
    popupText.classList.add('show-text');
    setTimeout(() => {
        popupText.classList.remove('show-text');
    }, 5000); // Mostrar el texto durante 5 segundos
}

// Mostrar el texto emergente de WhatsApp cada 10 segundos
setInterval(showWhatsAppPopup, 10000);

// Mostrar inicialmente el texto emergente de WhatsApp al cargar la página
window.addEventListener('load', showWhatsAppPopup);




// scrip del btn de donaciones
document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const headerMenuOptions = document.getElementById('header-menu-options');

    menuHamburguer.addEventListener('click', function () {
        headerMenuOptions.classList.toggle('open');
    });

    // Mostrar y ocultar el cuadro de donaciones cada 10 segundos con animación
    const donationBox = document.getElementById('donation-box');
    setInterval(() => {
        if (donationBox.classList.contains('show')) {
            donationBox.classList.remove('show');
        } else {
            donationBox.classList.add('show');
        }
    }, 15000);
});