var links = document.querySelectorAll("a.nav-link");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        if(document.body.clientWidth < 768) {
            document.querySelector("header").classList.add("d-none");
        }
    });
});

document.querySelector("#showMenu").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("d-none");
});