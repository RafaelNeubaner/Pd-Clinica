var links = document.querySelectorAll("a.nav-link");

window.addEventListener("hashchange", () => {
    var link = document.querySelector("a[href='" + window.location.hash + "']")
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active")

    if (document.body.clientWidth < 768) {
        document.querySelector("header").classList.add("d-none");
    }
})

document.querySelector("#showMenu").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("d-none");
});