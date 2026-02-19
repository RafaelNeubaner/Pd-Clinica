var formContact = document.getElementById('formTrabalheConoscoForm');
if (formContact) {
    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        let isFormValid = formContact.checkValidity();
        if (isFormValid) {
            alertToast('Currículo enviado com sucesso!');
            formContact.reset();
        } else {
            alertToast('Por favor, preencha todos os campos obrigatórios.', true);
        }
    });
}

function alertToast(message, error){
    var toastElement = document.getElementById('toastAlert');
    var toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = message;
    if(error===true){
        toastElement.classList.remove('bg-success');
        toastElement.classList.add('bg-danger');
    } else {
        toastElement.classList.remove('bg-danger');
        toastElement.classList.add('bg-success');
    }
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
}


var cardsTrabalho = document.querySelectorAll('.cardVagas');
cardsTrabalho.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.classList.toggle('dark');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.toggle('dark');
    });
});