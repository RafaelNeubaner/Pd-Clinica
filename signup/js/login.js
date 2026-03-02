import { showToast } from "/js/showToast.js";

const handleLoginButton = document.getElementById("handleLogin");
const formSignin = document.getElementById("signupForm");
const emailInput = formSignin.querySelector('input[type="email"]');
const passwordInput = formSignin.querySelector('input[type="password"]');

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

    if (email === "medico@gmail.com" ) {
        if (password !== "medico123") {
            console.log("Senha incorreta para médico");
            showToast("Senha incorreta para médico.");
            return;
        }
        // Login bem-sucedido para médico
        localStorage.setItem("userRole", "medico");

        showToast("Login bem-sucedido!", true);
    
        setTimeout(() => {
            window.location.href = "/dashboard/index.html";
        }, 800);
        return;
    }

    localStorage.setItem("userRole", "atendente");

    showToast("Login bem-sucedido!", true);
    
    setTimeout(() => {
        window.location.href = "/dashboard/index.html";
    }, 800);
}

