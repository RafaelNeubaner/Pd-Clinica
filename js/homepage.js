
var carouselHelpContainer = document.getElementById('container-help-carousel');

var carouselHelpSection = carouselHelpContainer.querySelector('#carousel-scroll-container');

btnLeft = carouselHelpContainer.querySelector('#slideLeft');
btnRight = carouselHelpContainer.querySelector('#slideRight');

carouselHelpSection.addEventListener('scroll', function () {
    let maxScrollLeft = carouselHelpSection.scrollWidth - carouselHelpSection.clientWidth;
    if (carouselHelpSection.scrollLeft <= 0 && window.innerWidth >= 992) {
        btnLeft.classList.add('d-none');
    } else {
        btnLeft.classList.remove('d-none');
    }
    if (carouselHelpSection.scrollLeft >= maxScrollLeft && window.innerWidth >= 992) {
        btnRight.classList.remove('d-lg-block');
        btnRight.classList.add('d-none');
    } else {
        btnRight.classList.add('d-lg-block');
        btnRight.classList.remove('d-none');
    }
});

btnLeft.addEventListener('click', function () {
    carouselHelpSection.scrollLeft -= 300;
});

btnRight.addEventListener('click', function () {
    carouselHelpSection.scrollLeft += 300;
});

var formContact = document.getElementById('formContactForm');
formContact.addEventListener('submit', function (event) {
    event.preventDefault();

    let isFormValid = formContact.checkValidity();
    if (isFormValid) {
        alert('Mensagem enviada com sucesso!');
        formContact.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
);