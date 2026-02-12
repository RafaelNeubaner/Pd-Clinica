
handleLoginButton = document.getElementById("handleLogin");
formSignin = document.getElementById("signupForm");
emailInput = formSignin.querySelector('input[type="email"]');
passwordInput = formSignin.querySelector('input[type="password"]');


formSignin.querySelectorAll('input').forEach(input => {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleLogin();
        }
    });
});

handleLoginButton.addEventListener("click", handleLogin);


function handleLogin() {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (emailInput.checkValidity() === false) {
        console.log("Email inválido");
        showToast("Por favor, insira um email válido.");
        return;
    }

    if (password.length < 6) {
        console.log("Senha muito curta");
        showToast("A senha deve conter pelo menos 6 caracteres.");
        return;
    }

    if (email === "medico@gmail.com"){
        localStorage.setItem("userRole", "medico");
    }else{
        localStorage.setItem("userRole", "atendente");
    }

    showToast("Login bem-sucedido!", true);
    
    setTimeout(() => {
        window.location.href = "/dashboard/index.html";
    }, 1200);
}

function showToast(message, isSuccess = false) {
    const toastElement = document.getElementById("errorToast");
    const toastBody = toastElement.querySelector(".toast-body");
    toastBody.textContent = message;

    if(isSuccess) {
        toastElement.classList.remove("bg-danger");
        toastElement.classList.add("bg-success");
    } else {
        toastElement.classList.remove("bg-success");
        toastElement.classList.add("bg-danger");
    }

    bootstrap.Toast.getOrCreateInstance(toastElement).show();
}