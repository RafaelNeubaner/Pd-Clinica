
if (localStorage.getItem("userRole") !== "medico") {
    document.querySelector("body > main").classList.add("d-none");
    document.querySelector("body > main").classList.remove("d-flex");
    document.querySelector("body > section").classList.remove("d-none");
    document.querySelector("body > section").classList.add("d-flex");
};