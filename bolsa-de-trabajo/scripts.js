function toggleText(id) {
    var moreText = document.getElementById(id);
    var buttonText = document.querySelector('.' + id);
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        buttonText.innerHTML = 'Ver menos';
    } else {
        moreText.style.display = 'none';
        buttonText.innerHTML = 'Ver más';
    }
}

