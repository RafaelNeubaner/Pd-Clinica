import { showToast } from "/js/showToast.js";

handleLoginButton = document.getElementById("handleSignup");
formSignin = document.getElementById("signupForm");
nomeInput = formSignin.querySelector('input[type="text"]');
emailInput = formSignin.querySelector('input[type="email"]');
passwordInput = formSignin.querySelector('input[type="password"]');
roleInput = formSignin.querySelector('select[name="role"]');


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
    console.log("Email:", email);
    const password = passwordInput.value;

    if(nomeInput.value.trim() === "") {
        console.log("Nome vazio");
        showToast("Por favor, insira seu nome.");
        return;
    }

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

    localStorage.setItem("userRole", "atendente");

    showToast("Login bem-sucedido!", true);
    
    setTimeout(() => {
        window.location.href = "/dashboard/index.html";
    }, 1200);
}