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
