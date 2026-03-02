export function showToast(message, isSuccess = false) {
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