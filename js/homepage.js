function ativarCarrossel(containerId, scrollId, btnLeftId, btnRightId, step) {
    const container = document.getElementById(containerId);
    if (!container) return;
 
    const scrollSection = container.querySelector(`#${scrollId}`);
    const btnLeft = container.querySelector(`#${btnLeftId}`);
    const btnRight = container.querySelector(`#${btnRightId}`);
    window.addEventListener('resize', function () {
        let maxScrollLeft = scrollSection.scrollWidth - scrollSection.clientWidth;
 
        if(window.innerWidth <= 992){
            btnLeft.classList.add('d-none');
            btnRight.classList.add('d-none');
            return;
        }
 
        if (scrollSection.scrollLeft <= 0) {
            btnLeft.classList.add('d-none');
        } else {
            btnLeft.classList.remove('d-none');
        }
        if (scrollSection.scrollLeft >= maxScrollLeft) {
            btnRight.classList.remove('d-lg-block');
            btnRight.classList.add('d-none');
        } else {
            btnRight.classList.add('d-lg-block');
            btnRight.classList.remove('d-none');
        }
    });
 
    scrollSection.addEventListener('scroll', function () {
        let maxScrollLeft = scrollSection.scrollWidth - scrollSection.clientWidth;
        if (scrollSection.scrollLeft <= 0 && window.innerWidth >= 992) {
            btnLeft.classList.add('d-none');
        } else {
            btnLeft.classList.remove('d-none');
        }
 
        if (Math.ceil(scrollSection.scrollLeft) >= maxScrollLeft && window.innerWidth >= 992) {
            btnRight.classList.remove('d-lg-block');
            btnRight.classList.add('d-none');
        } else {
            btnRight.classList.add('d-lg-block');
            btnRight.classList.remove('d-none');
        }
    });
 
    btnLeft.addEventListener('click', function () {
        scrollSection.scrollBy({
            left: -step, 
            behavior: 'smooth' 
        });
    });
 
    btnRight.addEventListener('click', function () {
        scrollSection.scrollBy({
            left: step, 
            behavior: 'smooth'
        });
    });
}
 
 
ativarCarrossel('container-help-carousel', 'carousel-scroll-container', 'slideLeft', 'slideRight', 300);
 
ativarCarrossel('unidades', 'unidades-scroll', 'btnLeftUnits', 'btnRightUnits', 630);
 
var formContact = document.getElementById('formContactForm');
if (formContact) {
    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        let isFormValid = formContact.checkValidity();
        if (isFormValid) {
            var modalSuccessMessage = new bootstrap.Modal(document.getElementById('modalSuccessMessage'));
            modalSuccessMessage.show();
            formContact.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

export { ativarCarrossel };